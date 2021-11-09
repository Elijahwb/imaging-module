import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const state = {};

const getters = {};

const mutations = {};

const actions = {};

export default new Vuex.Store({
    plugins: [createPersistedState()], 
    state,
    actions,
    mutations,
    getters,
});