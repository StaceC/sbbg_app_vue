<template>
  <div class="holder">
    <div class="counter_message">{{message}}</div>
    <div v-if="gameState=='Ready'" class="counter_number ready">{{count}}</div>
    <div v-if="gameState=='Start'" class="counter_number start">GO</div>
    <div v-if="gameState=='Playing'" class="counter_number playing">{{round}}</div>

  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'game-counter',
    computed: {
      ...mapState('game', ['round', 'message', 'gameState', 'count'])
    },
  }
</script>

<style scoped>

  .holder {
    text-align: center;
  }

  .counter_message {
    height: 36px;
    line-height: 36px;
    font-size: 36px;
    margin: 20px 0;
  }

  .counter_number {
    box-sizing: border-box;
    font-size: 72px;
    width: 140px;
    height: 140px;
    line-height: 140px;
    margin: auto;
    color: white;
    border-radius: 70px;
  }

  .ready {
    background-color: #ff9800;
  }

  .start {
    background-color: #009435;
  }

  .playing {
    background-color: #009435;
  }

</style>
