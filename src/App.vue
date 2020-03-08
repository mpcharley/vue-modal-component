<template>
  <div id="app">
    <button id="show-modal" @click="showModal = true">Show Modal</button>
    <modal v-if="showModal" @close="showModal = false"/>
  </div>
</template>

<script>
import modal from "./components/Modal";
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    modal
  },
  methods: {
    ...mapMutations(["setShowModal"])
  },
  computed: {
    ...mapGetters({ getShowModal: "showModal" }),

    showModal: {
      get() {
        return this.getShowModal;
      },
      set(x) {
        this.setShowModal(x);
        // this.$store.commit("setShowModal", x);
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
