import hl from 'highlight.js';
import 'highlight.js/styles/darcula.css';
import Vue from "vue";

Vue.directive('highlight', el => {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach(block => {
    try {
      // 得到经过highlight.js之后的html代码
      // console.log(block.innerHTML);
      let lang = block.className.split("-")[1] || "java";
      try {
        lang = hl.getLanguage(lang).name;
      } catch (e) {
        lang = "java";
      }
      let preCode = hl.highlight(lang, block.innerHTML, false).value;

      // 以换行进行分割
      let linesLength = preCode.split("\n").length;

      // 生成行号 aria-hidden 对浏览器语义化隐藏
      let linesNum = '<span aria-hidden="true" class="line-numbers-rows">';
      for (let index = 0; index < linesLength; index++) {
        linesNum += "<span></span>";
      }
      linesNum += "</span>";
      // console.log(linesNum);

      block.innerHTML = preCode.replace(/&amp;/g, "&");
      block.parentNode.className = "hljs";
      block.parentNode.innerHTML += (linesNum);

    } catch (__) {
      // console.log("执行错误", __);
    }
  })
});
