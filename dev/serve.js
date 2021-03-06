import Vue from 'vue';
import {Slider,Switch,Row,Col,Button,Input,Message,MessageBox} from 'element-ui'
Vue.use(Slider)
Vue.use(Switch)
Vue.use(Row)
Vue.use(Col)
Vue.use(Button)
Vue.use(Input)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
import 'element-ui/lib/theme-chalk/index.css';
import Dev from './serve.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Dev),
}).$mount('#app');
