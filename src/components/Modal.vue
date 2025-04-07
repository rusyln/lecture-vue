<template>
    <div class="backdrop" @click="closeModal">
      <div class="modal" :class="{sale: theme === 'sale'}">
        <h1>{{ header }}</h1>
        <p>{{ text }}</p>
        <button @click="$emit('close')">Close</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['header', 'text', 'theme'],methods: {
    closeModal(){
        this.$emit('close');
    }
  }
  }
  </script>
  
  <style>
  .modal {
    width: 400px;
    padding: 20px;
    margin: 200px auto;
    background: white;
    border-radius: 10px;
  }
  .backdrop {
    top: 0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
  }
  .modal h1,
  .modal p {
    color: blueviolet;
  }
  .modal.sale {
    background: coral;
    color: white;
  }
  .modal.sale h1 {
    color: white;
  }
  </style>
  