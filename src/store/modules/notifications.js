const namespaced = true

const state = {
  notifications: [],
  latest: undefined,
  dev: false
}

const getters = {
  getNotifications: state => {
    return state.notifications
  }
}

const mutations = {
  changeNotifications: (state, payload) => {
    state.notifications.push(payload)
  },
  setLatest: (state, payload) => {
    state.latest = payload
  }
}

const actions = {
  setNotifications: ({commit}, payload) => {
    commit('changeNotifications', payload)
  },
  setLatest: function({commit}, payload) {
    commit('setLatest', payload)
    var gameEvent = JSON.parse(payload);
    switch(gameEvent.type) {

      case "Player Joined":
        this.dispatch("player/checkIsWaiting", gameEvent.data, {root:true})
        break;
      case "Player Left":
        // TODO: Implement
        break;
      case "Played Round":
        this.dispatch("game/playedRound", gameEvent.data, {root:true})        
        break;
      case "Game Created":
        // TODO: Implement
        break;
      case "Game Started":
        this.dispatch("game/started", gameEvent.data, {root:true})
        break;
      case "Game Completed":
        this.dispatch("game/completed", gameEvent.data, {root:true})
        break;
      case "Game Ready":
        break;
      case "Game Waiting":
        break;
      case "Countdown Started":
        this.dispatch("game/countdownStarted", gameEvent.data, {root:true})
        break;
      case "Counting Down":
        this.dispatch("game/countdown", gameEvent.data, {root:true})
        break;
      case "Game Reset":
        break;
    }
  }
}

export default {
  namespaced,
  state,
  getters,
  mutations,
  actions
}
