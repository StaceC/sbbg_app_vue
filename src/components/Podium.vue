<template>
  <div v-if="winner && gameState!='Playing'" class="podium">
    <div class="first">
      <div v-if="winner && player && winner.name==player.name" class="player">You won the game!</div>
      <div v-else class="other">{{winner.name}} won the game!</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'podium',
  computed: {
    ...mapState('game', ['winner', 'gameState']),
    ...mapState('player', ['player']),
  },
}
</script>

<style scoped>

  .podium {
    width: 50%;
    margin: 20px auto;
  }

  .first {
    border-radius: 4px;
    text-align: center;
    height: 36px;
    line-height: 36px;
    background-color: #ffeb3b;
    color: black;
    font-size: 24px;
    weight: bold;
  }

  .player {

  }

  .other {

  }

</style>
