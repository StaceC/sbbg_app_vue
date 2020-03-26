<template>
  <div id="player-form">
    <form @submit.prevent="handleSubmit">
      <div class="feedback">
        <p v-if="joinError" class="error-message">
          {{joinError}}❗
        </p>
        <p v-if="error" class="error-message">
          Please fill out all required fields❗
        </p>
        <p v-if="success" class="success-message">
          Player successfully joined game ✅
        </p>
      </div>
      <div class="row">
        <div class="column_1">
          <label>Player name</label>
          <input
            ref="first"
            type="text"
            :class="{'has-error': submitting && invalidName }"
            v-model="player.name"
            @focus="clearStatus"
            @keypress="clearStatus"
          />
        </div>
        <div class="column_2">
          <label>First</label>
          <input
            type="number"
            min=1
            max=10
            :class="{'has-error': submitting && invalidFirstChoice }"
            v-model.number="player.first"
            @focus="clearStatus"
          />
        </div>
        <div class="column_2">
          <label>Second</label>
          <input
            type="number"
            min=1
            max=10
            :class="{'has-error': submitting && invalidSecondChoice }"
            v-model.number="player.second"
            @focus="clearStatus"
          />
        </div>
      </div>

      <button class="join_button">Join Game</button>
    </form>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'player-form',
    data() {
      return {
        submitting: false,
        error: false,
        success: false,
        player: {
          name: '',
          first: '',
          second: '',
        },
        api: {
          error: {
            nameTaken: false
          }
        }
      }
    },
    methods: {
      handleSubmit() {
        this.submitting = true;
        this.clearStatus();

        if (this.invalidName || this.invalidFirstChoice || this.invalidSecondCoice) {
          this.error = true;
          // this.submitting = false;
          return;
        }

        this.$store.dispatch("player/joinGame", this.player)

        //this.$emit('add:player', this.player);
        // We now need to wait for the app to respond
        //
        // this.$refs.first.focus();
        // this.player = {
        //   name: '',
        //   first: '',
        //   second: '',
        // }
        // this.error = false;
        // this.success = true;
        // this.submitting = false;
      },
      showApiError() {
        this.error= true;
      },
      clearStatus() {
        this.success = false;
        this.error = false;
        this.apiError = false;
      },

    },
    computed: {
      invalidName() {
        return this.player.name === '';
      },

      invalidFirstChoice() {
        return this.player.first === '';
      },

      invalidSecondChoice() {
        return this.player.second === '';
      },

      ...mapState('player', ['joinError'])
    },
  }
</script>

<style scoped>
  form {
    margin-bottom: 2rem;
  }

  .feedback {
    height: 36px;
    line-height: 36px;
    text-align: center;

    p {
      margin: 0;
    }
  }

  .row {
    width: 50%;
    margin: auto;
  }

  .column_1 {
    width: 60%;
    float: left;

  }

  .column_2 {
    width: 15%;
    float: left;
    margin: 0 0 0 5%;
  }

  .join_button {
    width: 50%;
    margin: auto;
    display: block;
  }

  [class*='-message'] {
    font-weight: 500;
  }

  .error-message {
    color: #d33c40;
  }

  .success-message {
    color: #32a95d;
  }
</style>
