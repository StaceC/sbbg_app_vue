import Vue from 'vue'
import Vuex from 'vuex'

// Modules.
import notifications from './modules/notifications'
import player from './modules/player'
import game from './modules/game'

// Use Vuex.
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    notifications,
    player,
    game
  }
})
