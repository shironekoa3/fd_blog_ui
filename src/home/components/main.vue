<template>
  <main>
    <transition name="main" mode="out-in">
      <router-view/>
    </transition>
  </main>
</template>

<script>
</script>

<style scoped>
  .main-enter,
  .main-leave-to {
    opacity: 0;
    transform: translateY(20px);
  }

  .main-enter-active,
  .main-leave-active {
    transition: all .2s
  }
</style>
