<template>
    <Homeframe />
</template>

<script>
import Homeframe from "@/components/home/Homeframe.vue";

export default {
    name: "Home",
    components: {
        Homeframe,
    },
    mounted() {
        console.log('This is the current route');
        console.log(this.$router.currentRoute.query);
    },
}
</script>