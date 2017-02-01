<template>
  <h1>A</h1>
</template>

<script>
import routes from './routes'

export default {
  
}

window.addEventListener('popstate', function () {
  app.currentRoute = window.location.pathname
});
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  margin-top: -100px;
  max-width: 600px;
  font-family: Helvetica, sans-serif;
  text-align: center;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
