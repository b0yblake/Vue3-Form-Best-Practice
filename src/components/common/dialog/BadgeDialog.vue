<template>

  <div class="nes-dialog" id="badge-dialog" >
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
      <menu class="dialog-menu is-centered">
        <button class="nes-btn is-primary" @click="handleDialog">OK</button>
      </menu>
    </form>
  </div>
</template>

<script>
import {
  ref,
  watchEffect,
  nextTick,
} from 'vue';

export default {
  name: 'BadgeDialog',
  props: {
    dataDialog: {
      type: Object,
    },
    active: {
      type: Boolean,
    }
  },
  setup(props, { emit }) {
    
    const handleDialog = () => {
      // console.log('OK')
      emit("update:active", false)
    }

    const handleEsc = () => {
      // console.log('press esc button');
      handleDialog()
    }

    const dialog = ref(null);

    watchEffect(() => {
      // console.log('active: ', props.active)
      if(props.active) {
        // console.log('active1: ', props.active)
        // console.log('dialog.value: ', dialog.value)
        //dialog.value.focus(); // Không focus được vì nó chưa xuất hiện, phải dùng nextTick

        // nextTick có thể dùng với asyn/await
        nextTick(() => {
          // DOM is now updated
          dialog.value.focus();
        })
      }
    })

    return {
      dialog,
      handleDialog,
      handleEsc,
    }
  }
}
</script>

<style scoped>
.nes-dialog {
  background-color: rgba(0,0,0,.3);
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  
}
.dialog {
  position: absolute;
  right: 0;
  left: 0;
  display: block;
  width: -moz-fit-content;
  width: -webkit-fit-content;
  width: fit-content;
  height: -moz-fit-content;
  height: -webkit-fit-content;
  height: fit-content;
  padding: 2em;
  margin: auto !important;
  color: #000;
  background: #fff;
  border: solid;
  top: 0;
  bottom: 0;
  max-width: 500px;
}
</style>