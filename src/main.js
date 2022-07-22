import "babel-polyfill";
import "classlist-polyfill";
import Vue from "vue";
import axios from "./router/axios";
import VueAxios from "vue-axios";
import App from "./App";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import animate from "animate.css";
import Avue from "@smallwei/avue";
import "@smallwei/avue/lib/index.css";
import AvueFormDesign from "@sscfaith/avue-form-design";
import "./permission"; // 权限
import "./error"; // 日志
import router from "./router/router";
import store from "./store";
import { loadStyle, downBlobFile } from "@/util/util";
import { validatenull } from "@/util/validate";
import * as urls from "@/config/env";
import { iconfontUrl, iconfontVersion } from "@/config/env";
import * as filters from "./filters"; // 全局filter
import "./styles/common.scss";
import basicContainer from "./components/basic-container/main";
// 字典数据组件
import DictResolver from '@/components/DictResolver'
// 字典标签组件
import DictTag from '@/components/DictTag'
//引入Echarts
import * as echarts from 'echarts'
// import { GlobeComponent } from 'echarts-gl/components';
// import { CanvasRenderer } from 'echarts/renderers';
// import jquery from 'jquery'
// echarts.use([GlobeComponent, CanvasRenderer])
//dataV引入
import dataV from '@jiaminghi/data-view'
// 引入全局css，可能跟原有的全局样式冲突。
// import './assets/scss/style.scss';
// 按需引入vue-awesome图标
import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/chart-bar.js';
import 'vue-awesome/icons/chart-area.js';
import 'vue-awesome/icons/chart-pie.js';
import 'vue-awesome/icons/chart-line.js';
import 'vue-awesome/icons/align-left.js';
// 全局注册 dataV相关。
Vue.component('icon', Icon);
Vue.use(dataV);
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
// 挂载常用全局方法，import 引入
Vue.prototype.validatenull = validatenull;
Vue.prototype.downBlobFile = downBlobFile;

DictResolver.install()

window.axios = axios;
Vue.use(VueAxios, axios);

Vue.use(ElementUI, {
  size: "small",
  menuType: "text"
});

Vue.use(Avue, {
  size: "small",
  menuType: "text"
});

Vue.use(router);

Vue.use(animate);

Vue.use(AvueFormDesign);

// 注册全局容器
Vue.component("basicContainer", basicContainer);
Vue.component('DictTag', DictTag)

// 加载相关url地址
Object.keys(urls).forEach(key => {
  Vue.prototype[key] = urls[key];
});

//加载过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

// 动态加载阿里云字体库
iconfontVersion.forEach(ele => {
  console.log(iconfontUrl.replace("$key", ele));
  loadStyle(iconfontUrl.replace("$key", ele));
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

//设置主题为 DB2

document.body.className = "theme-iview";
