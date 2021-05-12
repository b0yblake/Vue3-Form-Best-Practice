import { createI18n } from 'vue-i18n'
import messages from '@intlify/vite-plugin-vue-i18n/messages'

// feature of vite: import.meta.globEager
// feature of webpack: require.context
const modules = import.meta.globEager('./*.yaml');

const defaults = {
  defaultLanguage: 'vi',
  legacy: false,
  globalInjection: true,
}

const autoRegisteredTranslate = [];
for (const path in modules) {
  autoRegisteredTranslate[path.replace(/(\.\/|\.yaml)/g, "")] = modules[path].default;
  // autoRegisteredRoutes.push(modules[path].default)
}

export default createI18n({
  legacy: defaults.legacy,
  locale: defaults.defaultLanguage,
  globalInjection: defaults.globalInjection,
  messages: {
    ...autoRegisteredTranslate
  }
})