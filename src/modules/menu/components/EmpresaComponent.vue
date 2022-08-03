<template>
<div class="empresa-container">
    <div class="px-2 pt-2">
        <input type="text" class="form-control" placeholder="Nombre empresa">
    </div>
    <div class="scroll-area">
        <h2 v-for="item in 100" :key="item"> Empresa</h2>
    </div>
</div>
</template>

<style lang="scss" scoped>

input{
    height: 25px;
}

.empresa-container{
    border-right: 1px solid #2c3e50;
    height: calc(100vh - 56px);
}

.scroll-area{
    height: calc(100vh - 115px);
    overflow: scroll;
}

</style>

