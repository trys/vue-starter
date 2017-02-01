<template>
  <div>
    <main-layout>
      <h1>{{ title }}</h1>
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
    head: {
      title: function () {
        return {
          inner: this.title
        }
      }
    },
    components: {
      MainLayout
    }
  }
</script>
