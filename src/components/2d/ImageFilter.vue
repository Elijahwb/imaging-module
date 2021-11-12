<template>
  <div class="d-flex justify-content-around list-items">
    <p class="item first-item" :class="itemSelected" @click="selected('all')">All</p>
    <p class="item option-selected"  @click="selected('pano')">Pano</p>
    <p class="item" >Graph</p>
    <p class="item" :class="itemSelected" @click="selected('sensor')">IO Sensor</p>
    <p class="item" :class="itemSelected" @click="selected('camera')">IO Camera</p>
    <p class="item" :class="itemSelected" @click="selected('photo')">Photo</p>
    <p class="item last-item">Capture</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      active_item:false,
      imageType:'pano'
    }
  },
   methods:{
     selected(type){
       console.log({'OldType':this.imageType,type });
       if(this.imageType == type && this.active_item){
         this.active_item = false
         return;
       }else{
         this.imageType = type
         this.active_item = true
       }
     }
   },
   created(){
    this.imageType = 'pano'
    // this.selected(this.imageType)
   },
   computed:{
     itemSelected(){
       return this.active_item ? 'option-selected' :'option-unselected';
     }
   }
}
</script>

<style scoped>
.list-items{
  border-radius: 30px;
  height: 30px;
  background-color: white;
  margin-top: 10px;
  text-align: center;
}
.option-selected{
  display: inherit;
   color: white;
   background-color: var(--highlightOne);
   border-radius: 1px;
}

.option-unselected{
  display: inherit;
  color: var(--highlightOne);
  background-color: white;
  border-radius: 30px;
}
.item{
  height: 30px;
  text-align: center;
  padding:6px;
  margin-right: 2px;
  cursor: pointer;
}
.list-items:nth-child(2) {
    border-left:2px solid var(--highlightOne);
}
/* .list-items:first-child {
    border-left:2px solid transparent;
    padding-left: 2px;
}
.list-items:last-child {
    border-right:2px solid transparent;
    padding-right: 2px;
} */

.first-item.option-selected{
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
}

.last-item.option-selected{
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
}
</style>