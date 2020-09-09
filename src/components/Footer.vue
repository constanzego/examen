<template id="footer">
  
<div class="conteiner-fluid bg-dark">
<h1>{{msg}}</h1>
  <div class="row pt-5 pb-5">
    <div class="col-md-4">
      <p class="h1 text-white">    <img alt="Vue logo" src="../assets/logo.png" /></p>
    </div>
    <div class="col-md-4">
      <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis rutrum enim, eu porttitor mauris. Duis sit amet consectetur eros, sed accumsan quam.</p>
    </div>
    <div class="col-md-4">
    <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis rutrum enim, eu porttitor mauris. Duis sit amet consectetur eros, sed accumsan quam.</p>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "Footer",
  props: {
    msg: String
  }
};
</script>
<style>
  img{
    max-width: 45px;
  }
</style>