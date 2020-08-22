<template>
  <transition-group
    :tag="tag"
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave"
  >
    <slot></slot>
  </transition-group>
</template>

<script>
  export default {
    name: "MyAnimation",
    props: {
      tag: {
        type: String,
        default: "div"
      }
    },
    methods: {
      beforeEnter(el) {
        el.style.transform = "translateY(20px)";
        el.style.opacity = 0;
      },
      enter(el, done) {
        let delay = el.dataset.index * 50 + 100;
        setTimeout(function () {
          el.style.transition = "all 0.5s";
          el.style.transform = "translateY(0px)";
          el.style.opacity = 1;
          done();
        }, delay)
      },
      leave(el, done) {
        let delay = el.dataset.index * 50 + 100;
        setTimeout(() => {
          el.style.transform = "translateY(20px)";
          el.style.opacity = 0;
          done();
        }, delay)
      }
    }
  }
</script>

<style scoped>

</style>
