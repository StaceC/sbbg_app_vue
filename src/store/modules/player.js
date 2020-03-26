const namespaced = true

const state = {
    mode: "Observing",
    player: undefined,
    callingJoin: false,
    joinError: undefined
}

const playerModes = {
    OBSERVING: 'observing',
    JOINING: 'joining',
    PLAYING: 'playing'
}


const getters = {
  getPlayerMode: state => {
    return state.mode;
  }
}

const mutations = {
  changePlayerMode: (state, payload) => {
    state.mode = payload;
  },
  setCallingJoin:(state, isCalling) => {
    state.callingJoin = isCalling;
    state.joinError = undefined;
  },
  setPlayer:(state, player) => {
    state.mode = "Joining"
    state.player = player;
    state.callingJoin = false;
    state.joinError = undefined;
  },
  setJoinError:(state, error) => {
    state.joinError = error;
    state.callingJoin = false;
  }
}

const actions = {
  setPlayerMode: ({commit}, mode) => {
    commit('changePlayerMode', mode)
  },
  joinGame: async ({commit}, player) => {
    // console.log(player);
    commit("setCallingJoin")
    try {
      const response = await fetch('http://localhost:8089/join', {
        //mode: 'no-cors',
        method: 'POST',
        body: JSON.stringify(player),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      })
      const data = await response.json()
      if(data.type === "Success") {
        console.log("Success")
        console.log(data)
        commit("setPlayer", player)
      } else {
        console.log("Failed")
        console.log(data)
        commit("setJoinError", data.detail)
        //this.message = data.detail
      }
    } catch (error) {
      console.error(error)
      commit("setJoinError", "Oops, this is embarassing")
    }
  },
  checkIsWaiting: ({commit}, joinedPlayers) => {    
    joinedPlayers.forEach(function (joinedPlayer) {
      if(state.player && joinedPlayer.name === state.player.name) {
        commit('changePlayerMode', playerModes.PLAYING)
      }
    })
  }
}

export default {
  namespaced,
  state,
  getters,
  mutations,
  actions
}
