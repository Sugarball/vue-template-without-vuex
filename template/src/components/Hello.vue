<template>
  <div class="hello">
    <a v-on:click="sayHello">
      <h1>{{ msg }}</h1>
    </a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  },
  methods : {
      sayHello: function () {
        console.log('hello', this.$http)
        // this.$http(
        //   {
        //     url: 'https://zjsy.sliver-square.com/zjsy-2.0/api/common/activity/listMyEnroll', 
        //     method: 'POST'
        //   }
        // ).then(function (response) {
        //   console.log(response);
        // }, function (response) {
        //   console.log(response);
        // });
      }
  }
}
</script>
