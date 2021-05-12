<script>
import {
  ref,
  h,
} from 'vue';
import TextButton from '@/components/common/button/TextButton.vue';

export default {
  name: "RenderFuncEx",
  components: {
    TextButton,
  },
  props: {
    // heading: {
    //   type: Number,
    //   required: true,
    //   default: 2,
    //   validator: propValue => {
    //     const isNumber = isNumber(propValue)
    //     return isNumber && false
    //   }
    // }
  },
  setup(props, { context }) {

    //<TextButton :title="'PressMe'" />
    return () => h(
      TextButton,
      {
        title: 'Simple Button renderles',
        onClick: () => alert('clicked')
      }
      
    )
  }
}
</script>

<style>

</style>