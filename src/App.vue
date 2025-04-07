<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <button @click="toggleModal">Toggle Modal</button>
    <!-- Modal will be shown only when showModal is true -->
    <Modal v-if="showModal" :header="header" :text="text" theme="sale" @close="toggleModal"/>
    <input type="text" ref="name">
  </div>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    Modal
  },
  data(){
    return {
      title: 'Hello Vue!',
      header: 'Giveaway',
      text: 'This is a modal text example.',
      showModal: false
    }
  },
  methods: {
    toggleModal(){
      this.showModal = !this.showModal
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
