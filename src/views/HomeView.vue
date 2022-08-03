<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/img/logo.png">
    <h1>Hola Mundo</h1>
    <button type="button" @click="goToMenu" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>

  </div>
</template>
<script>
export default {
    methods:{
        goToMenu(){
            this.$router.push({name:'menu'})
        }
    }
}
</script>