<template>
  <div class="flex flex-row ">
    <section class="form-all border border-gray-400 rounded p-5 m-10 bg-white w-2/4">

      <div class="nes-container is-dark with-title">
        <p class="title">Special tips</p>
        <p>You can use Object.fromEntries(new FormData(event.target)) instead of v-model</p>
        <p>This form use NES stye</p>
      </div>

      <div class="nes-container with-title">
        <p class="title">All commons form</p>
        <section class="icon-list">
          <i class="nes-pokeball"></i>
          <i class="nes-pokeball"></i>
          <i class="nes-pokeball"></i>
          <i class="nes-pokeball"></i>
          <i class="nes-pokeball"></i>
        </section>
        
        <form @submit.prevent="" autocomplete="off">
          <fieldset>
          <legend></legend>
            <div class="form-wrap flex flex-col">

              NOW: {{ form.picker }}
              <DatepickerPikaday 
                :id="'datepicker'"
                :isBlind="true"
                :label="'Enter Your Date'"
                v-model:picker="form.picker"
              />
              <br/>
              
              ADDRESS : {{ form.address }}
              <TextForm v-model:address="form.address" />
              <br/>

              DESC : {{ form.desc }}
              <TextareaBox v-model:desc="form.desc" />
              <br/>

              LOCATION : {{ form.location }}
              <SelectBox v-model:location="form.location" />
              <br/>

              GENDER : {{ form.gender }}
              <SelectMultiBox v-model:gender="form.gender" />
              <br/>

              FAVORITE : {{ form.favorite }}
              <CheckBox v-model:favorite="form.favorite" :favorites="mocData" />
              <br/>

              LOVE : {{ form.love }}
              <RadioBox v-model:love="form.love" :loves="loves" />
              <br/>

              BROWSER : {{ form.browser }}
              <DatalistBox v-model:browser="form.browser" :idList="'browsers'" />
              <br/>

              <TextButton :title="'PressMe'" />
              
            </div>
          </fieldset>
        </form>
      </div>
    </section>
    <section class="log_board debug flex w-2/4 mt-10 p-5 rounded ">
      <pre>
        <code>
          Data on parent
          (after emit form children)
          {
            "picker": "{{ form.picker }}",
            "address": "{{ form.address }}",
            "desc": "{{ form.desc }}",
            "location": "{{ form.location }}",
            "gender": "{{ form.gender }}",
            "favorite": "{{ form.favorite }}",
            "love": "{{ form.love }}",
            "browser": "{{ form.browser }}",
          }
        </code>
      </pre>
    </section>

    
  </div>
</template>

<script>
import {
  ref,
  reactive
} from 'vue';

export default {
  name: "Form",
  data() {
    return {
      mocData: ['games', 'foods', 'code'],
      loves: ['Yes', 'No'],
    }
  },
  setup() {
    const form = reactive({
      picker: '',
      address: '',
      desc: 'Textarea ...',
      location: '',
      gender: '',
      favorite: '',
      love: '',
      browser: '',
    });

    // console.log(form.value);

    return {
      form,
    }
  }
}
</script>

<style>
body {
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,83,121,1) 0%, rgba(184,0,255,1) 100%);
}
</style>

<style scoped>
.form-all v-deep .form-text {
  margin-bottom: 15px;
}
.debug {
  background-color: #000;
  padding: 50px 50px 50px 0;
  background: rgba(0, 0, 0, 0.8);
  box-shadow: 0 4px 6px 0 rgb(0 0 0 / 30%);
}
.debug pre {
  color: #ffffff;
  font-size: 18px;
  line-height: 30px;
  font-family: "Source Code Pro", monospace;
  font-weight: 300;
  white-space: pre-wrap;
}
</style>