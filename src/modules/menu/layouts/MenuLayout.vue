<template>
    <NavbarComponent />

    <div class="d-flex">
        <div class="col-4">
            <EmpresaComponent />
        </div>
        <div class="col">
            <router-view></router-view>
        </div>
    </div>

</template>

<script>

import {defineAsyncComponent} from 'vue';

export default {
    components:{
    NavbarComponent: defineAsyncComponent(() => import("../components/NavbarComponent.vue")),
    EmpresaComponent: defineAsyncComponent(() => import("../components/EmpresaComponent.vue")),
    
}
}
</script>

