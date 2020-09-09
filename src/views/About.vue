<template>
  <div class="About">

    <Navbar msg="" />
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>About</h1>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Footer msg="" />

  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";

import HelloWorld from "@/components/HelloWorld.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "About",
  components: {
    Navbar,
    HelloWorld,
    Footer,

  }
};
</script>
