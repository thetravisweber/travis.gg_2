<template>
  <div class="home">
    <h1>Hello.</h1>
    <h2>My Name is Travis Weber</h2>
    <TravisBio/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TravisBio from '@/components/TravisBio.vue'; // @ is an alias to /src

@Options({
  components: {
    TravisBio,
  },
})
export default class Home extends Vue {}
</script>

<style scoped>

.home {
  margin-top: 10%;
  margin-left: 14%;
  text-align: left;
}

</style>