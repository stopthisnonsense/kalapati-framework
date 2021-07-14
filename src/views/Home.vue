<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <GameBoard />
  </div>
</template>

<script>
// @ is an alias to /src
import GameBoard from '@/components/Game.vue'

export default {
  name: 'Home',
  components: {
    GameBoard
  }
}
</script>
