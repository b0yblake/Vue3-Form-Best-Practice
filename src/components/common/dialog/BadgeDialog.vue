<template>
  <div class="nes-dialog" id="badge-dialog">
    <form method="dialog" class="dialog" @keydown.esc="handleEsc" tabindex="0" ref="dialog">
      <p class="title"></p>
      <dl>
        <dt>Data</dt>
        <dd>
          <pre>
            <code>{{ dataDialog }}</code>
          </pre>
        </dd>
      </dl>
      <button class="nes-btn is-primary" @click="handleDialog">OK</button>

      <!-- Delete all data dialog -->
      <div class="a" v-if="isDelDialogSlot"><slot name="delDialog"></slot></div>
    </form>
  </div>

</template>

<script>
import {
  ref,
  watchEffect,
  nextTick,
  computed,
} from 'vue';

export default {
  name: 'BadgeDialog',
  props: {
    dataDialog: {
      type: Object,
    },
    active: {
      type: Boolean,
    },
    preventBackgroundScrolling: { default: true }
  },
  setup(props, context) {
    
    const handleDialog = () => {
      context.emit("update:active", false)
    }

    const isDelDialogSlot = computed(() => {
      return true;
      return context.slots.delDialog || false
    })

    const handleEsc = () => {
      handleDialog()
    }

    const dialog = ref(null);

    watchEffect(() => {
      if(props.active) {

        // Chúng ta cần cover thêm 1 bước nữa khi muốn scale app (preventBackgroundScrolling)
        props.preventBackgroundScrolling && document.body.style.setProperty('overflow', 'hidden') 

        //dialog.value.focus(); // Không focus được vì nó chưa xuất hiện, phải dùng nextTick
        // nextTick có thể dùng với asyn/await
        nextTick(() => {
          dialog.value.focus(); // DOM is now updated
        })
      }else {
        props.preventBackgroundScrolling && document.body.style.removeProperty('overflow')
      }
    })

    return {
      dialog,
      handleDialog,
      handleEsc,
      isDelDialogSlot,
    }
  }
}
</script>

<style scoped>
</style>