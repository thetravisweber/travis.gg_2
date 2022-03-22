<template>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: 'Ubuntu';
  color: #102010;

  --secondary-color: #40E0D0A9;
}

h1 {
  font-size: 3em;
}

h2 {
  font-size: 2em;
}

a {
  color: inherit;
  text-decoration: underline .2em var(--secondary-color);
  text-underline-offset: 0;
}
</style>
