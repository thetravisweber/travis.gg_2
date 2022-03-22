<template>
  <div class="container border">
    <div class="d-flex justify-content-center" id="p5Canvas"></div>
  </div>
</template>

<script>
export default {
  mounted() {   
    var radar = require('@/sketches/Sierpenski.js')
    const P5 = require('p5')
    new P5(radar.main)
  }
};

</script>

<style scoped>
#math-canvas {
  position: absolute;
  top: 0;
}
</style>