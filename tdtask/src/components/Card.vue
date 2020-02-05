<template>
    <div class="card">
        <div v-for="(value, key) in card" :key="key">
           <p> {{ key }} : {{ value }} </p>
           <p>Title</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'card',
    // imges: [{
    //     img: 'https://semantic-ui.com/images/avatar2/large/matthew.png'
    //     }],
  data() {
    return {
      card: '',
    };
  },
  created: function() {
    axios
      .get("https://api.rss2json.com/v1/api.json?rss_url=http://rss.cnn.com/rss/edition.rss")
      .then(res => {
        this.post = res.data.items[1];
        console.log(this.post);
      })
  }

}
</script>

<style scoped>
    .card {
        color: white;
    }
</style>

