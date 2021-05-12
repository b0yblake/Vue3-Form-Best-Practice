<template>
  <div class="flex flex-row ">
    <section class="form-all border border-gray-400 rounded p-5 m-10 bg-white w-2/4">

      <!-- i18n -->
      <select v-model="locale">
        <option value="vi" selected>VI</option>
        <option value="en">ENG</option>
      </select>

      <RenderFuncEx :heading="'1'" />

      <div class="nes-container is-dark with-title">
        <p class="title">{{ $t('main_title') }}</p>
        <p>{{ $t('desc.text') }}</p>
        <p>{{ $t('desc.sub_text') }}</p>
        <p>{{ $t('desc.dynamic_variable', 2) }}</p>
      </div>

      <div class="nes-container with-title">
        <p class="title">All commons form</p>
        <section class="icon-list">
          <i class="nes-pokeball"></i>
          <i class="nes-pokeball"></i>
          <i class="nes-pokeball"></i>
          <i class="nes-pokeball"></i>
        </section>
        
        <form @submit.prevent="submitForm" autocomplete="off" ref="full_form">
          <fieldset>
          <legend></legend>
            <div class="form-wrap flex flex-col">

              <TextButton :title="'PressMe'" />

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

            </div>
          </fieldset>
        </form>
      </div>
    </section>
    <section class="log_board debug flex w-2/4 mt-10 p-5 rounded">
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

    <teleport to="#layer">

      <!-- Common dialog -->
      <BadgeDialog :dataDialog="form" v-model:active="activeDialog" v-show="activeDialog">
        
        <!-- Delete all data dialog -->
        <template #delDialog>
          <button class="nes-btn is-error" @click="onShowDelDialog">REMOVE ALL</button>
        </template>
      </BadgeDialog>

      <!-- Delelte dialog confirm -->
      <DelAllDialog v-show="activeDelDialog" @handle-confirm-del-data="onConfirm" @handle-badga-dialog="onConfirm2" />
    </teleport>
    
  </div>
</template>

<script>
import {
  ref,
  reactive,
  watchEffect,
} from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  name: "Form",
  data() {
    return {
      mocData: ['games', 'foods', 'code'],
      loves: ['Yes', 'No'],

    }
  },
  setup() {
    //i18n
    const { locale } = useI18n({
      inheritLocale: true,
      useScope: 'global'
    })

    const initialStateForm = {
      picker: null,
      address: null,
      desc: null,
      location: null,
      gender: null,
      favorite: null,
      love: null,
      browser: null,
    }
    
    const form = reactive({...initialStateForm});

    const activeDialog = ref(false);
    const activeDelDialog = ref(false);
    const full_form = ref(null);

    const onConfirm = (e) => {
      console.log('value del dialog: ', e);
      activeDelDialog.value = e;
      

    }

    const onConfirm2 = (e) => {
      console.log('value badge dialog: ', e);
      activeDialog.value = e;

      full_form.value.reset();

      const resetForm = Object.assign(form, initialStateForm);

      // form.picker = '';
      // form.address = '';
      // form.desc = 'Textarea ...';
      // form.location = '';
      // form.gender = '';
      // form.favorite = '';
      // form.love = '';
      // form.browser = '';
    }

    const submitForm = () => {
      activeDialog.value = true;
    }

    const onShowDelDialog = () => {
      activeDelDialog.value = true;
    }

    watchEffect(() => {
    })
    
    return {
      locale,
      form,
      submitForm,
      activeDialog,
      activeDelDialog,
      onShowDelDialog,
      full_form,
      onConfirm,
      onConfirm2,
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
.debug code {
  font-size: 14px;
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