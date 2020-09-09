<template>
  <div class="home">
    
    <Navbar msg="" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Footer msg="" />

  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    HelloWorld,
    Footer,

  }
};
</script>
