<template>
    <section class="app-container">
        <Topbar />
        <section class="sections">
            <Sidecontent>
                patients list
            </Sidecontent>
            <Contentsection>
                Panorama
            </Contentsection>
        </section>
    </section>
</template>

<script>
import Topbar from "../global/Topbar.vue";
import Sidecontent from "../global/SideContent.vue";
import Contentsection from "../global/ContentContainer.vue";

export default {
    components: {
        Topbar,
        Sidecontent,
        Contentsection,
    }
}
</script>

<style scoped>
.sections {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    height: calc(100vh - var(--topBarHeight) - 10px);
}
.app-container {
    font-family: "Mohave";
    padding: 0 10px;
}
</style>