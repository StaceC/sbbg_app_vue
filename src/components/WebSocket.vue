<template>
  <div v-if="dev">
    <h1>Received events:</h1>
    <ul>
      {{latest}}
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'WebSocket',
  computed: {
    ...mapState('notifications', ['latest', 'dev'])
    // latest () {
    //   return this.$store.getters['notifications/getNotifications']
    // }
  },
  created: function() {
    this.connect();
  },
  methods: {
    connect () {
      this.$webSocketsConnect();
    },
    disconnect () {
      this.$webSocketsDisconnect();
    },
    send () {
      let d = new Date() + ' hello';
      this.$webSocketsSend(d);
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
