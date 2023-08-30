<template>
  <div>
    <h1>Home</h1><font-awesome-icon icon="fa-solid fa-user-secret" />

    <b>count = {{ count }}</b>

    <button @click="counter()" class="ml-14 border-4 rounded-md border-blue-400">Counter</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState({
      count: "count"
    })
  },
  methods: {
    counter(){
      this.$store.dispatch('increase', 2)
    }
  }
}
</script>

<style>

</style>