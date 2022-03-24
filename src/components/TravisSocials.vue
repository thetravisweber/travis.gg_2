<template>
  <div class="socials">
    <social-link
      iconLink="https://img.icons8.com/material/48/000000/twitter--v1.png"
      link="https://twitter.com/travis_weber_"
    />
    <social-link
      iconLink="https://img.icons8.com/ios-filled/48/000000/instagram-new.png"
      link="https://www.instagram.com/travis__weber/"
    />
    <social-link
      iconLink="https://img.icons8.com/ios-filled/50/000000/youtube.png"
      link="https://www.youtube.com/channel/UCJECUUnURjLq6QuetU5Mn1A"
    />
    <social-link
      iconLink="https://img.icons8.com/ios-glyphs/48/000000/github.png"
      link="https://github.com/thetravisweber"
    />
  </div>
</template>

<script>
import SocialLink from "./SocialLink.vue";

export default {
  components: {
    SocialLink,
  },
};
</script>

<style scoped>
.socials {
  display: flex;
  margin: auto;
  width: 100%;
}
</style>
