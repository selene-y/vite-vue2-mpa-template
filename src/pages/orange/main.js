import App from './index.vue';
import { FastClick } from 'fastclick';
import Vue from 'vue';
import '@/assets/css/reset.css';
import '@/assets/css/base.less';
import '@/assets/common/common.js';

FastClick.attach(document.body);
FastClick.prototype.focus = function (targetElement) {
  targetElement.focus();
};
const myMixin = {
  components: { App },
};

const setup = mixins => {
  return new Vue({
    el: '#app',
    template: '<App/>',
    mixins: [...mixins]
  });
};

setup([myMixin]);
