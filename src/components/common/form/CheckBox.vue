<template>
  <div class="form_text">
    <ul class="vue-form-list">
      <li v-for="(fav, index) in favorites" :key="fav">
        <input
          type="checkbox" 
          :value="fav" 
          :id="'cb-fav-'+index" 
          v-model="listChecked"
        />
        <label :for="'cb-fav-'+index">{{ fav }}</label>
      </li>
      <li>
        <input type="checkbox" id="checkbox-all" v-model="btnCheckall"  @click="checkAll($event)">
        <label for="checkbox-all">Check All</label>
      </li>
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
  name: "CheckBox",
  props: {
    favorites: {
      type: Array,
    }
  },
  data: () => ({
    // listChecked: [],
  }),
  setup(props, { emit }) {

    const listChecked = ref([]);
    console.log('isRef: ', isRef(listChecked));

    const btnCheckall = ref(null);

    const checkAll = ($event) => {
      return $event.target.checked ? emptyListCheck(true) : emptyListCheck(false);
    }

    const emptyListCheck = (status) => {
      if(status) { //if true, add more item in props
        return listChecked.value = props.favorites;
      }
      //if false, rmeove all item in listChecked

      return listChecked.value = [];
      // return delete listChecked;
    }

    watchEffect(() => {
      emit("update:favorite", listChecked.value);

      //Check status of checkall checkbox when all item checked or not
      if(listChecked.value.length !== props.favorites.length) {
        return btnCheckall.value = false
      }
      return btnCheckall.value = true
    })

    return {
      checkAll,
      listChecked,
      btnCheckall,
    }
  },
}
</script>

<style>

</style>