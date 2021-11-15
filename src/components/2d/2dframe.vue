<template>
  <section class="app-container">
    <Topbar />
    <section class="sections">
      <Sidecontent>
        <SideBar />
      </Sidecontent>
      <Contentsection>
        <ContentBody />
      </Contentsection>
    </section>
  </section>
</template>

<script>
import Topbar from "../global/Topbar.vue";
import Sidecontent from "../global/SideContent.vue";
import Contentsection from "../global/ContentContainer.vue";
import SideBar from "./2dSideBar.vue";
import ContentBody from "./2dContent.vue";

export default {
  components: {
    Topbar,
    Sidecontent,
    Contentsection,
    SideBar,
    ContentBody,
  },
};
</script>

<style scoped>
.sections {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  height: calc(100vh - var(--topBarHeight) - 50px);
}
.app-container {
  font-family: "Mohave";
  padding: 0 10px;
}
</style>