<template>
  <button type="submit" class="nes-btn is-success">{{ title }}</button>
</template>

<script>
export default {
  name: 'TextButton',
  props: {
    title: {
      type: String,
    }
  }
}
</script>

<style>

</style>