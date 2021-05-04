<template>
  <div class="form-text flex flex-col justify-start ">
    <textarea :value="desc" @input='onHandleTextarea($event)' name="message" rows="3" cols="10" class="nes-input"></textarea>
  </div>
</template>

<script>
export default {
  name: 'TextareaBox',
  props: {
    desc: {
      type: String,
    }
  },
  setup(props, { emit }) {
    const onHandleTextarea = ($event) => {
      emit("update:desc", $event.target.value);
    }

    return {
      onHandleTextarea,
    }
  }
}
</script>

<style>

</style>