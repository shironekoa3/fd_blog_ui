function scrollAnimation(targetY, skip) {

  // 获取当前位置
  let currentY = document.documentElement.scrollTop || document.body.scrollTop

  let id = setInterval(() => {
    // 计算需要移动的距离
    let needScroll = targetY - currentY;
    // 一次调用滑动帧数，每次调用会不一样
    let dist = Math.ceil(needScroll / 6);
    currentY += dist;
    window.scrollTo(0, currentY);
    // 如果移动幅度小于十个像素，直接移动，否则递归调用，实现动画效果
    if (needScroll > 10 || needScroll < -10) {
      // 滑动
      // console.log(currentY);
    } else {
      window.scrollTo(0, targetY);
      clearInterval(id);
    }
  }, skip);
}

module.exports = {
  scrollAnimation
};
