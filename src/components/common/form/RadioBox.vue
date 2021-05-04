<template>
  <div class="form_text">
    <ul class="vue-form-list">
      <li v-for="(fav, index) in loves" :key="fav">
        <input
          type="radio" 
          :value="fav" 
          :id="'cb-love-'+index" 
          v-model="itemChecked"
          class=""
        />
        <label :for="'cb-love-'+index">{{ fav }}</label>
      </li>
      <!-- <li><input type="radio" id="one" value="One" v-model="picked" /></li> -->
    </ul>
  </div>
</template>

<script>
import {
  ref,
  watchEffect,
  isRef,
} from 'vue';

export default {
  name: "RadioBox",
  props: {
    loves: {
      type: Array,
    }
  },
  data: () => ({
    // itemChecked: [],
  }),
  setup(props, { emit }) {

    const itemChecked = ref(null);
    console.log('isRef: ', isRef(itemChecked));

    watchEffect(() => {
      console.log(itemChecked.value)
      emit("update:love", itemChecked.value)
    })

    console.log('props.love: ', props.love);

    return {
      itemChecked,
    }
  },
}
</script>

<style>

</style>