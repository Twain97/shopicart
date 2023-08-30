<template>
  <div>
    <h1>Home</h1><font-awesome-icon icon="fa-solid fa-user-secret" />

    <b>count = {{ count }}</b>
    <Button label="Check" icon="pi pi-check" class=" ml-9" @click="counter()"/>
  
    <div>
      <orbit-spinner
      :animation-duration="1200"
      :size="55"
      color="#ff1d5e"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { OrbitSpinner } from 'epic-spinners'
export default {
  components: {
    OrbitSpinner
  },
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