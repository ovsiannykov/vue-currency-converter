<template>
  <div class="main-block">
    <h1 class="h1">Currency App</h1>
    <div id="nav">
      <router-link to="/">Rates</router-link> |
      <router-link to="/converter">Сonverter</router-link>
    </div>
    <router-view/>
    </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main-block {
    margin-top: 80px;
  }

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #0d6efd;
    }
  }
}
</style>
