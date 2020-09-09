<template>
<div id="app">
  <div id="nav">
  <h1>{{ msg }}</h1>
  <template>
<b-navbar toggleable type="dark" variant="dark">
  <b-navbar-brand href="/"><img id="img" alt="Vue logo" src="../assets/logo.png" /></b-navbar-brand>
  

  <b-navbar-toggle target="navbar-toggle-collapse">
    <template v-slot:default="{ expanded }">
      <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
      <b-icon v-else icon="chevron-bar-down"></b-icon>
    </template>
  </b-navbar-toggle>

  <b-collapse id="navbar-toggle-collapse" is-nav>
    <b-navbar-nav class="ml-auto">
      <b-nav-item href="/"> Home </b-nav-item>
      <b-nav-item href="/About">About</b-nav-item>
      <b-nav-item href="/login" disabled>Login</b-nav-item>
    </b-navbar-nav>
  </b-collapse>
</b-navbar>
</template>

  </div>
  <router-view />
</div>
</template>

<script>
export default {
      name: 'Navbar',
      props: {
          title: String
      }
  }
</script>
<style>
h3 {
      margin: 40px 0 0;
  }
  ul {
      list-style-type: none;
      padding: 0;
  }
  li {
      display: inline-block;
      margin: 0 10px;
  }
  a {
      color: #42b983;
  } 
  #img{
    max-width: 45px;
  }
</style>