<template>

<h1>{{ title }}</h1>
<Modal :header="header" :text="text" theme="sale"/>
<input type="text" ref="name">
<button @click="handClick()">Me Click</button>
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
     header:'giveaway',
      text:'text'
   }
 },
 methods: {
   handClick(){
     
     console.log('Hello'+ name)
     this.$refs.textbox.clasList.add('active')
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
