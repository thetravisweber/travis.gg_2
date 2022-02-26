<template>
  <router-view/>
</template>

<style>
#app {
  font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000020;

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
  /* border-bottom: .2em solid var(--secondary-color);
  padding-bottom: 0em; */
}
</style>
