<template>
    <div class="app">
      <div class="title">
        <p>CNN.com - RSS Channel - App International Edition</p>
      </div>
      
        <Card v-bind:card="card" />
    </div>
</template>

<script>
import Card from './components/Card';
import axios from 'axios';

export default {
  name: 'app',
  components: {
    Card
  },
  data(){
    return {
      card:'',
    }
  }
}
</script>

<style>

  body {
    background-color: black;
  }

  .title {
    font-family: "I TC Avant Garde Pro";
    color: #484848;
  }

  .title::after{
    content: "";
    display: block;
    width: 10%;
    margin-left: 50px;
    border-bottom: solid yellow 1px;
  }
  p{
    color: white;
  }
</style>
