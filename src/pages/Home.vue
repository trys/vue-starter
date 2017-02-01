<template>
  <div>
    <main-layout>
      <h1>Hi there</h1>
      <img src="/static/images/logo.png">
    </main-layout>
  </div>
</template>

<script>
  import MainLayout from '../components/MainLayout.vue'

  export default {
    data () {
      return {
        title: 'Home'
      }
    },
    components: {
      MainLayout
    }
  }
</script>
