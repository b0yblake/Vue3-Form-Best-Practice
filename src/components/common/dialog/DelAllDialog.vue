<template>
  <div class="nes-dialog" id="delall-dialog">
    <!-- <form method="dialog" class="dialog" @keydown.esc="handleEsc" tabindex="0" ref="dialog"> -->
    <form method="dialog" class="dialog" tabindex="0">
      <p class="title">Are you sure?</p>
      <menu class="dialog-menu is-centered">
        <button class="nes-btn is-primary" @click="onCancelDialog">Cancel</button>
        <button class="nes-btn is-success" @click="onConfirmDialog">Confirm</button>
      </menu>
    </form>
  </div>
</template>

<script>
import {
  ref,
} from 'vue';

export default {
  name: 'DelAllDialog',

  emits: ['handle-confirm-del-data', 'handle-badga-dialog'],

  setup(props, { emit }) {

    const onCancelDialog = () => {
     emit("handle-confirm-del-data", false);
    }

    const onConfirmDialog = () => {
      emit("handle-confirm-del-data", false); //data to close del dialog
      emit("handle-badga-dialog", false); //data to close badge dialog
    }

    return {
      onCancelDialog,
      onConfirmDialog,
    }
  }
}
</script>

<style scoped>
</style>