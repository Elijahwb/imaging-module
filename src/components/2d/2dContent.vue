<template>
  <div class="row">
      <!-- <div class="col-12 editing-container"> -->
        <div class="col-12 editing-container">
          <div class="row">
            <div class="col-6 current-image">
            Images 1
         </div>
      <div class="col-6 current-image">
         Images 2
      </div>
          </div>
        </div>
        <!-- <div class="col-6 ">
          Image Right
        </div> -->
         <!-- Editing
      </div> -->
      <div class="col-6 image-list">
         Images List - 1
      </div>
      <div class="col-6 image-list">
         Images List - 2
      </div>
  </div>
</template>

<script>
export default {
  name:'2dContentBody'
}
</script>

<style scoped>
.editing-container{
  height: calc(100vh - var(--topBarHeight) - 400px);
  width: calc(100vw - 330px);
  border: solid 1px;
  margin-bottom: 8px;
}
.image-list{
  height: 300px;
  border: solid 1px;
}
.current-image{
  border: solid 1px;
  height: 50vh;
}
</style>