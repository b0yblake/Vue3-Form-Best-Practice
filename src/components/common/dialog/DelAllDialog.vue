<template>
  <div class="nes-dialog" id="delall-dialog">
    <!-- <form method="dialog" class="dialog" @keydown.esc="handleEsc" tabindex="0" ref="dialog"> -->
    <form method="dialog" class="dialog" tabindex="0">
      <p class="title">Are you sure?</p>
      <menu class="dialog-menu is-centered">
        <button class="nes-btn is-primary" @click="onDelDialog">Cancel</button>
        <button class="nes-btn is-success" @click="onDelDialog">Confirm</button>
      </menu>
    </form>
  </div>
</template>

<script>
export default {
  name: 'DelAllDialog',
  setup(props, { emit }) {

    const onDelDialog = () => {
      emit("update:active2", false)
    }

    return {
      onDelDialog,
    }
  }
}
</script>

<style scoped>
</style>