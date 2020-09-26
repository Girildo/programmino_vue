import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import it from 'vuetify/src/locale/it';

Vue.use(Vuetify);

export default new Vuetify({
    lang: {
      locales: { it },
      current: 'it',
    },
});
