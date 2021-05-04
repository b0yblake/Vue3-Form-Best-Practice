<template>
  <div class="nes-select">
    <select @input='onHandleSelect($event)'>
      <option disabled value="" selected>Please select one</option>
      <option v-for="option in mocData" :key="option" :value="option.code">{{ option.val }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SelectBox",
  props: {
    location: {
      type: String,
    }
  },
  data() {
    return {
      mocData: [
        {
          code: "restaurant",
          val: "Restaurant"
        },
        {
          code: "gas",
          val: "Gas Station"
        },
      ]
    }
  },
  setup(props, { emit }) {
    const onHandleSelect = ($event) => {
      emit("update:location", $event.target.value)
    }

    return {
      onHandleSelect,
    }
  }
}
</script>

<style>

</style>