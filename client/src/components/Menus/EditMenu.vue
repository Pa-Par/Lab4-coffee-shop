<template>
  <div>
    <h1>Edit Menu</h1>
    <p>Menu ID: {{ menuId }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    menuId() {
      return this.$route.params.menuId
    }
  }
}
</script>

<style scoped>
</style>
