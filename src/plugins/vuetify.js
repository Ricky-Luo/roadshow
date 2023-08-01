import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import zhHans from 'vuetify/lib/locale/zh-Hans';

Vue.use(Vuetify);

export default new Vuetify({
    lang: {
      locales: { zhHans },
      current: 'zhHans',
    },
    icons: {
      iconfont: 'md',
    },
});
