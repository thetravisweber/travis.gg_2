<template>
  <div class="soc">
    <a :href="link">
      <img class="social-icon" :src="iconLink" width="64"/>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    link: String,
    iconLink: String,
  },
};
</script>

<style scoped>
.social-icon {
  box-shadow: none;
  background-color: none;
}

.soc {
  padding: 20px;
  font-size: 30px;
  width: 64px;
  align-content: center;
}

a:hover {
  border: none;
}

.soc:hover {
  opacity: 0.7;
}

@media only screen and (max-width: 620px) {
  .soc {
    padding: 0px;
    padding-top: 20%;
    margin: auto;
  }
}
</style>
