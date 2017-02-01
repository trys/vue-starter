<template>
  <div>
    <main-layout>
      <h1>{{ title }}</h1>
      <img src="/static/images/logo.png">
      <markdown></markdown>
    </main-layout>
  </div>
</template>

<script>
  import MainLayout from '../components/MainLayout.vue'
  import markdown from '../content/Home.md'

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
      MainLayout,
      markdown
    }
  }
</script>
