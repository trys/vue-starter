<template>
  <div>
    <navigation></navigation>
    <slot></slot>
  </div>
</template>

<script>
  import Navigation from '../components/Navigation.vue'
  export default {
    components: {
      Navigation
    }
  }
</script>