<template>
  <div class="socials">
    <social-link
      iconLink="https://img.icons8.com/ios-glyphs/48/000000/github.png"
      link="https://github.com/thetravisweber"
      description="My Github"
    />
    <social-link
      iconLink="https://img.icons8.com/material/48/000000/twitter--v1.png"
      link="https://twitter.com/travis_weber_"
      description="My Twitter"
    />
    <social-link
      iconLink="https://img.icons8.com/ios-filled/50/000000/youtube.png"
      link="https://www.youtube.com/channel/UCJECUUnURjLq6QuetU5Mn1A"
      description="My YouTube"
    />
    <social-link
      iconLink="https://img.icons8.com/ios-filled/48/000000/instagram-new.png"
      link="https://www.instagram.com/travis__weber/"
      description="My Instagram"
    />
    <social-link
      iconLink="https://img.icons8.com/ios-filled/50/000000/email-sign.png"
      link="mailto: tjw328@nau.edu"
      description="My Email, send me a message!"
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
  justify-content: space-between;
  max-width: 500px;
  width: 100%;
}

@media only screen and (max-width: 620px) {
  .socials {
    display: block;
    width: 100%;
    margin: auto;
  }
}

</style>
