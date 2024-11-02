<template>
  <div ref="mouseLight" class="mouse-gradient fixed"></div>
</template>

<script>
export default {
  mounted() {
    const mouseLight = this.$refs.mouseLight;
    const body = window.document.body;

    function onMouseMove(e) {
      const size = Math.max(1200 / 2 / 100, 1);

      mouseLight.style.top = `${e.clientY - mouseLight.clientHeight / 2}px`;
      mouseLight.style.left = `${e.clientX - mouseLight.clientWidth / 2}px`;
      mouseLight.style.width = mouseLight.style.height = `${Math.max(Math.round(size * 100), 300)}px`;
      mouseLight.style.filter = `blur(${Math.min(Math.max(size * 50, 100), 160)}px)`;
      mouseLight.style.opacity = Math.min(Math.max(size / 4, 0.6), 1);
    }

    body.addEventListener('mousemove', onMouseMove, { passive: true });
  },
};
</script>

<style scoped>
.mouse-gradient {
  background: repeating-linear-gradient(to right, #151c25 0%, #301b22 50%, #331d25 100%);
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
