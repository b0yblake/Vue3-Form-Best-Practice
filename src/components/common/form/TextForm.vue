<template>
  <div class="form-text flex flex-col justify-start ">
    <input type="text" :value="address" @input='onHandleInp($event)' class="nes-input">
  </div>
</template>

<script>
export default {
  name: 'TextForm',
  props: {
    address: {
      type: String,
    }
  },
  setup(props, { emit }) {
    const onHandleInp = ($event) => {
      emit("update:address", $event.target.value);
    }

    return {
      onHandleInp,
    }
  }
}
</script>

<style>

</style>