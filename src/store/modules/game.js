const namespaced = true

const state = {
  round: 0,
  message: "Waiting for more players to join...",
  board: [],
  winner: undefined,
  gameState: "Waiting",
  count: 0
}

const mutations = {
  setRound: (state, number) => {
    state.round = number
  },
  setMessage: (state, message) => {
    state.message = message
  },
  setBoard: (state, board) => {
    state.board = board
  },
  setWinner: (state, winner) => {
    state.winner = winner
  },
  setGameState: (state, gameState) => {
    state.gameState = gameState
  },
  setCount: (state, count) => {
    state.count = count
  }
}

const actions = {
  countdownStarted: ({commit}, count) => {
    commit('setGameState', 'Ready')
    commit('setCount', count)
    commit('setMessage', "Next game starting in")
  },
  countdown: ({commit}, count) => {
    commit('setCount', count)
  },
  started: ({commit}) => {
    commit('setGameState', 'Start')
    commit('setMessage', "")
  },
  playedRound: ({commit}, roundData) => {
    commit('setBoard', roundData.leader_board)
    commit('setRound', roundData.round)
    commit('setMessage', "Round")
    commit('setGameState', 'Playing')
  },
  completed: ({commit}, winner) => {
    commit('setWinner', winner)
    commit('setGameState', 'Playing')
  }
}

export default {
  namespaced,
  state,
  mutations,
  actions
}
