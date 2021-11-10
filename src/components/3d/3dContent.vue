<template>
  <div class="row">
      <!-- <div class="col-12 editing-container"> -->
        <div class="col-12 editing-container">
            3D Image
        </div>
      <div class="col-6 image-list">
         Images List
      </div>
      <div class="col-6 image-list">
         Images List
      </div>
  </div>
</template>

<script>
export default {
  name:'3dContentBody'
}
</script>

<style scoped>
.editing-container{
  height: calc(100vh - var(--topBarHeight) - 345px);
  width: calc(100vw - 330px);
  border: solid 1px;
  margin-bottom: 8px;
  text-align: center;
}
.image-list{
  height: 300px;
  border: solid 1px;
}
</style>