<template>
  <div>
    <img class="logo" src="./assets/logo.png">
    <a v-link="{ path: '/hello' }">hello</a>
    <router-view class="view" transition="test" transition-mode="out-in" keep-alive>
    </router-view>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
html{
  height: 100%;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  #app {
    margin-top: -100px;
    max-width: 600px;
    font-family: Helvetica, sans-serif;
    text-align: center;
  }
  .logo {
    width: 100px;
    height: 100px
  }
}
</style>
