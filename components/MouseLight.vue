<script>
  export default {
    mounted() {
      const mouseLight = this.$refs.mouseLight;
      const body = window.document.body;
      let bodyRect;
      let enableAnimation = true;

      function onFocusOut() {
      if (!enableAnimation) {
        return
      }
      mouseLight.style.opacity = 0
      }

      function onMouseMove(e) {
      if (!enableAnimation) {
        return
      }
      if (!bodyRect) {
        bodyRect = document.querySelector('body')?.getBoundingClientRect()
      }
      const size = Math.max((1000) / 2 / 100, 1)

      mouseLight.style.top = `${e.clientY - bodyRect.y - mouseLight.clientHeight / 2}px`
      mouseLight.style.left = `${e.clientX - mouseLight.clientWidth / 2}px`
      mouseLight.style.width = mouseLight.style.height = `${Math.max(Math.round(size * 100), 300)}px`
      mouseLight.style.filter = `blur(${Math.min(Math.max(size * 50, 100), 160)}px)`
      mouseLight.style.opacity = Math.min(Math.max(size / 4, 0.6), 1)
      }


      body.addEventListener('mousemove', onMouseMove, { passive: true })
      body.addEventListener('mouseleave', onFocusOut, { passive: true })
    },
  };
</script>

<template>
  <div class="overflow-hidden absolute full-height full-width top-0 left-0 z-index-cover">
    <div ref="mouseLight" class="mouse-gradient absolute full-height full-width top-0 left-0"></div>
  </div>
</template>

<style scoped>
.mouse-gradient {
  background: repeating-linear-gradient(to right, #00DC82 0%, #1DE0B1 50%, #36E4DA 100%);
  filter: blur(100px);
  opacity: 0.5;
}
@keyframes gradient {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -200% 0;
  }
}
@keyframes width {
  0% {
    width: 100%;
  }
  50% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
</style>