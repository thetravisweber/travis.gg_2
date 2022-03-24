<template>
  <div class="home">
    <h1>Hello, my name is Travis Weber.</h1>
    <TravisBio id="bio"/>
    <BasicSketch id="math-animation"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TravisBio from '@/components/TravisBio.vue'; // @ is an alias to /src
import BasicSketch from '@/components/BasicSketch.vue';

@Options({
  components: {
    TravisBio,
    BasicSketch
  },
})
export default class Home extends Vue {}
</script>

<style scoped>

.home {
  margin-top: 10%;
  margin-left: 10%;
  text-align: left;
}

#bio {
  width: 50%;
  min-width: 10em;
}

</style>