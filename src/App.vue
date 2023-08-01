<template>
  <v-app>
    <v-main style="height: 100%">
      <!-- <keep-alive :include="['index']"> -->
        <transition :name="transitionName">
          <router-view style="width: 100%; height: 100%"></router-view>
        </transition>
      <!-- </keep-alive> -->
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    transitionName:'', // 动画名称
    transitCount: 0, // 记录跳转次数;
  }),
  watch: {
  '$route' (to, from) {
    if (this.transitCount === 0) {
      this.transitCount++;
    } else {
      this.transitionName = to.meta.level < from.meta.level ? 'slide-right' : 'slide-left'
    }
  }
}
};
</script>
<style scoped>
/*向左滑动*/
@keyframes slideInLeft {
  from {
    transform: translate3d(100%, 0, 0);
    position: fixed;
    top: 0;
    left: 0;
    opacity: 1;
  }
  to {
    transform: translate3d(0, 0, 0);
    position: fixed;
    top: 0;
    left: 0;
    opacity: 1;
  }
}
@keyframes slideInRight {
  from {
    transform: translate3d(0%, 0, 0);
    position: fixed;
    top: 0;
    left: 0;
    opacity: 1;
  }
  to {
    transform: translate3d(-100%, 0, 0);
    position: fixed;
    top: 0;
    left: 0;
    opacity: 1;
  }
}
.slide-left-enter-active {
  position: fixed;
  top: 0;
  left: 0%;
  width: 100vw;
  height: 100vh;
  animation: slideInLeft 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
}
.slide-left-leave-active {
  position: fixed;
  top: 0;
  left: 0%;
  width: 100vw;
  height: 100vh;
  animation: slideInRight 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
}
/*向右滑动*/
@keyframes slideOutLeft {
  from {
    transform: translate3d(-100%, 0, 0);
    position: fixed;
    top: 0;
    left: 0;
    opacity: 1;
  }
  to {
    transform: translate3d(0%, 0, 0);
    position: fixed;
    top: 0;
    left: 0;
    opacity: 1;
  }
}
@keyframes slideOutRight {
  from {
    transform: translate3d(0%, 0, 0);
    position: fixed;
    top: 0;
    left: 0;
    opacity: 1;
  }
  to {
    transform: translate3d(100%, 0, 0);
    position: fixed;
    top: 0;
    left: 0;
    opacity: 1;
  }
}
.slide-right-enter-active {
  position: fixed;
  top: 0;
  left: 0%;
  width: 100vw;
  height: 100vh;
  animation: slideOutLeft 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
}
.slide-right-leave-active {
  position: fixed;
  top: 0;
  left: 0%;
  width: 100vw;
  height: 100vh;
  animation: slideOutRight 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
}
</style>