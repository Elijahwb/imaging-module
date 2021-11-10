<template>
    <section class="app-container">
        <Topbar />
        <section class="sections">
            <Sidecontent>
                <div class="container">
                    <SideBar3d/>
                </div>
            </Sidecontent>
            <Contentsection>
                <div class="container">
                    3D Content comming soon..
                </div>
            </Contentsection>
        </section>
    </section>
</template>

<script>
import Topbar from "../global/Topbar.vue";
import Sidecontent from "../global/SideContent.vue";
import Contentsection from "../global/ContentContainer.vue";
import SideBar3d from "./3dSidebar.vue" 

export default {
    components: {
        Topbar,
        Sidecontent,
        Contentsection,
        SideBar3d
    }
}
</script>

<style scoped>
.container {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
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