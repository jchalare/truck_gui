<template>

    <ListarCompania />
     <router-view> </router-view>

</template>

<script>

import { defineAsyncComponent } from 'vue';

export default {
    components: {
        ListarCompania: defineAsyncComponent(() => import("../components/ListarCompania.vue")),
    }
}
</script>

