<template>
  <div>
    <main-layout>
      <h1>Sub Page</h1>
    </main-layout>
  </div>
</template>

<script>
  import MainLayout from '../components/MainLayout.vue'

  export default {
    data () {
      return {
        title: 'About Sub Page'
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
