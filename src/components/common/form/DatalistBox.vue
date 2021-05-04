<template>
  <div class="form_text">
    <input :list="idList" :value="browser" @input='onHandleDatalist($event)' type="search" placeholder="Search" class="nes-input">
    <datalist :id="idList">
      <option v-for="option in mocData" :key="option" :value="option"></option>
    </datalist>
  </div>
</template>

<script>
import {
  ref,
  watchEffect,
} from 'vue';

export default {
  name: "DatalistBox",
  props: {
    idList: {
      type: String,
    },
    browser: {
      type: String,
    }
  },
  data() {
    return {
      mocData: ['Internet Explorer', 'Firefox', 'Chrome', 'Opera', 'Safari']
    }
  },
  setup(props, { emit }) {
    const dataList = ref(null);

    const onHandleDatalist = ($event) => {
      emit("update:browser", $event.target.value)
    }

  // watchEffect(() => {
  //   console.log(dataList.value);
  //   emit("update:dataList", $event.tartget.value);
  // })

    return {
      dataList,
      onHandleDatalist,
    }
  }
}
</script>

<style>

</style>