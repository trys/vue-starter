<template>
  <div>
    <main-layout>
      <h1>404</h1>
    </main-layout>
  </div>
</template>

<script>
  import MainLayout from '../components/MainLayout.vue'

  export default {
    head: {
      title: 'Page Not found'
    },
    components: {
      MainLayout
    }
  }
</script>
