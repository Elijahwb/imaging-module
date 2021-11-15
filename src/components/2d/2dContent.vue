<template>
  <div class="layout-template-container">
     <SectionImages/>
     <SectionVideos/>
  </div>
</template>

<script>

import SectionImages from './SectionImages.vue'
import SectionVideos from './SectionVideos.vue'
export default {
  name:'ContentBody2D',
  components:{
    SectionImages,
    SectionVideos
  },
}
</script>

<style scoped>
.layout-template-container {
    position: relative;
    height: calc(100%);
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    row-gap: 10px;
    justify-content: space-between;
    flex-wrap: wrap;
    /* background: var(--mainBg); */
}
</style>