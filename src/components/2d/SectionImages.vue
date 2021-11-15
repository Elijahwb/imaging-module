<template>
<!-- <div class="studytemplate-container-holder"> -->
  <div class="studytemplate-container">
        <div class="container-heading">
           Photos
        </div>
        <div class="images-container">
            <img src="@/assets/xrays/5.jpeg" alt="" class="image-container">
        </div>
        <div class="image-list">
             <div class="menu-bar">
              <ImageFilter/>
              <TimestampFilter/>
            </div>
         <CroppedImages :images="cropped"/>
      </div>
  </div>
</template>

<script>
// import CroppedImages from '../global/CroppedImages.vue'
import ImageFilter from './ImageFilter.vue'
import TimestampFilter from './TimestampFilter.vue'
export default {
  name:'SectionImages',
  components:{
    // CroppedImages,
    ImageFilter,
    TimestampFilter,
  },
  data(){
    return {
      cropped: [
                "5.jpeg",
                "4.jpeg",
                "3.jpeg",
                "2.jpeg",
                "1.jpeg",
            ],
            paranomas: [
                "1.jpeg",
                "2.jpeg",
                "3.jpeg",
                "4.jpeg",
                "5.jpeg",
            ],
    }
  }
}
</script>

<style scoped>
.image-container {
    position: relative !important;
    height: 100%;
    width: 100%;
    margin-left: 5px;
    flex-basis: calc(32.5% - 0px);
    flex-shrink: 0;
    flex-grow: 0;
    object-fit: cover;
}
.images-container {
    width: 100%;
    height: calc(70% - 44px);
    display: flex;
    /* justify-content: space-between; */
    justify-content: center;
    flex-wrap: wrap;
    overflow-x: hidden;
    overflow-y: auto;
    row-gap: 15px;
    padding-right: 5px;
}
.container-heading span:hover {
    cursor: pointer;
    color: var(--highlight);
}
.container-heading {
    font-size: 15px;
    padding: 10px 10px 10px 10px;
    display: flex;
    justify-content: space-between;
}
.studytemplate-container.zoomed-in {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    /* left: 0; */
    z-index: 10;
    height: 100% !important;
    flex-basis: 100% !important;
}
.studytemplate-container {
    transition: all 400ms ease-in-out;
    transform-origin: center;
    height: 100%;
    /* border-right:.5px solid var(--appWhite); */
    border-bottom:.5px solid #dfdede42;
    flex-basis: calc(50% - 5px);
    flex-shrink: 0;
    flex-grow: 0;
    background: #000000;
}
.image-list{
   width: 100%;
   /* background-color: darkgray; */
   height: calc(30%);  
   display: flex;
}
.menu-bar{
    display: flex;
    justify-content: space-between;
}

</style>