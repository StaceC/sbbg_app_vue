<template>
  <div id="player-table">
    <p v-if="board.length < 1" class="empty-table">
      No players
    </p>
    <table v-else class="leader_board">
      <thead>
        <tr>
          <th>Player</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="other in this.board"
          :key="other.name"
          :class="{'player': player && player.name == other.name}"
        >
          <td>{{ other.name }}</td>
          <td>{{ other.score }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'player-table',
    computed: {
      ...mapState('game', ['board', 'gameState']),
      ...mapState('player', ['player'])
    },
  }
</script>

<style scoped>

  h2 {
    text-align: center;
  }

  button {
    margin: 0 0.5rem 0 0;
  }

  th, td{
    text-align: center;
  }

  .empty-table {
    text-align: center;
  }

  .leader_board {
    width: 50%;
    margin: auto;
  }

  .player {
    background-color: #009435;
    color: white;
  }

</style>
