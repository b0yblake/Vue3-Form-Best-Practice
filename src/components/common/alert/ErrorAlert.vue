<template>
  <div v-show="errorMessage" class="error-alert border border-red-700 bg-red-200 p-2 my-2">
    {{ errorMessage }}
  </div>
</template>

<script>
export default {
  name: 'ErrorAlert',
  props: {
    errorMessage: {
      type: String,
    }
  }
}
</script>

<style>

</style>