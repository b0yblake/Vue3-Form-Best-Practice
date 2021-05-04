<template>
  <div class="form_text">
    <select  v-model="listSelected" multiple>
      <option disabled value="" selected>Please select one</option>
      <option v-for="option in mocData" :key="option" :value="option.code">{{ option.val }}</option>
    </select>
  </div>
</template>

<script>
import {
  ref,
  watchEffect,
} from 'vue';

export default {
  name: "SelectMultiBox",
  props: {
    // gender: {
    //   type: String,
    // }
  },
  data() {
    return {
      mocData: [
        {
          code: "male",
          val: "Male"
        },
        {
          code: "female",
          val: "Female"
        },
        {
          code: "other",
          val: "Other"
        },
      ]
    }
  },
  setup(props, { emit }) {

    const listSelected = ref([]);

    watchEffect(() => {
      console.log(listSelected.value)
      emit("update:gender", listSelected.value)
    })

    return {
      listSelected,
    }
  }
}
</script>

<style>

</style>