import Vue from "vue";
import Vuex from "vuex";

//import moment from 'moment';
//import _ from 'lodash';

Vue.use(Vuex);

const state = {
  m: false
};
const getters = {
  showModal: state => {
    return state.m;
  }
};
const mutations = {
  setShowModal: (state, payload) => {
    state.m = payload;
  }
};
const actions = {};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
