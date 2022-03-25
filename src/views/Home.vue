<template>
  <div class="home">
    <div id="about">
      <h1>Hello, my name is Travis Weber.</h1>
      <TravisBio id="bio" />
      <TravisSocials id="social-media-links"/>
    </div>
    <BasicSketch id="math-animation"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TravisBio from '@/components/TravisBio.vue'; // @ is an alias to /src
import BasicSketch from '@/components/BasicSketch.vue';
import TravisSocials from '@/components/TravisSocials.vue';

@Options({
  components: {
    TravisBio,
    BasicSketch,
    TravisSocials
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

h1 {
  background: rgba(255, 255, 255, .5);
  box-shadow: rgb(255 255 255 / 50%) 0 0 20px 20px;
}

#bio {
  min-width: 10em;
}

#about {
  width: 50%;
}

@media only screen and (max-width: 1026px) {
  #math-animation {
      display: none;
  }

  #about {
    width: 70%;
  }
}

@media only screen and (max-width: 620px) {
  .home {
    width: 80%;
    margin: auto;
    justify-content: center;
  }

  #about {
    width: 100%;
  }
}

</style>