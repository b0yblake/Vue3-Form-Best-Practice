<template>
  <div class="form-text flex flex-col justify-start ">
    <label :for="id" class="" v-show="!isBlind">{{ label }}</label>
    <input type="text" :id="id" ref="date" :value="picker" @input='onHandlePicker($event)' class="nes-input">
  </div>
</template>

<script>
import Pikaday from 'pikaday';
import 'pikaday/css/pikaday.css';
import {
  ref,
  onMounted,
  reactive
} from 'vue';

export default {
  name: "DatepickerPikaday",
  props: {
    id: {
      type: String,
    },
    isBlind: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
    },
    picker: {
      type: String,
    }
  },
  setup(props, { emit }) {
    const date = ref('');
    let picker = reactive({});

    const onHandlePicker = ($event) => {
      emit("update:picker", date.value = $event?.target?.value || picker.toString())
      // console.log(1);
    }
    // console.log(date.value = $event.target.value)

    onMounted(() => {
      picker = new Pikaday({
        field: date.value,
        format: 'DD MM YYYY',
        onSelect: () => {
          //access from panel of datepicker
          onHandlePicker()
        }
      })

      // console.log(date);
    })

    return {
      date,
      onHandlePicker,
    }
  }
}
</script>
