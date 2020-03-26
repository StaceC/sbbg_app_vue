<template>
  <div id="app" class="small-container">
    <h1>Simple Browser Based Game</h1>
    <div class="message">{{playerModeMsg}}</div>
    <player-form v-if="!player"/>
    <counter/>
    <podium />
    <player-table :players="players"/>
    <WebSocket/>
  </div>
</template>

<script>
import PlayerTable from '@/components/PlayerTable.vue'
import PlayerForm from '@/components/PlayerForm.vue'
import WebSocket from './components/WebSocket.vue'
import Counter from './components/Counter.vue'
import Podium from './components/Podium.vue'
import { mapState } from 'vuex';

export default {
  name: 'app',
  components: {
    PlayerTable,
    PlayerForm,
    WebSocket,
    Counter,
    Podium,
  },
  beforeCreated: function() {
    this.message = this.welcomeMsg
  },
  data() {
    return {
      players: [],
      message: "",
      welcomeMsg: "Hi. Pick a name and two numbers to join the game!"
    }
  },
  computed: {
    ...mapState('player', ['player', 'mode']),
    playerModeMsg() {
      if(this.mode === 'Observing') {
        return 'Pick a name and two numbers to join';
      } else if(this.mode === 'Joining') {
        return 'Awesome, you will join the next game';
      } else {
        return 'You are in the game';
      }
    }
  }
}
</script>

<style>

  h1 {
    text-align: center;
  }

  button {
    background: #009435;
    border: 1px solid #009435;
  }

  .small-container {
    max-width: 680px;
  }

  .message {
    width: 50%;
    margin: auto;
    text-align: center;
    height: 42px;
    line-height: 42px;
    font-weight: bold;
    background-color: #009435;
    color: white;
    border-radius: 4px;
  }

</style>
