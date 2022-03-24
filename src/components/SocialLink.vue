<template>
  <div class="soc">
    <a :href="link">
      <img class="social-icon" :src="iconLink" height="50" />
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
  width: 33%;
  align-content: center;
}

a:hover {
  border: none;
}

.soc:hover {
  opacity: 0.7;
}
</style>
