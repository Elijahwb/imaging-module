<template>
  <div class="d-flex justify-content-around list-items">
    <p class="item first-item option-selected" @click="selected('all')">All</p>
    <p class="item" :class="itemSelected" @click="selected('today')">Today</p>
    <p class="item" :class="itemSelected" @click="selected('one_week')">1 Week</p>
    <p class="item" :class="itemSelected" @click="selected('one_month')">1 Month</p>
    <p class="item last-item" :class="itemSelected" @click="selected('three_month')">3 Month</p>
  </div>
</template>

<script>
export default {
   data(){
    return {
      active_item:false,
      imageType:'all'
    }
  },
   methods:{
     selected(type){
       if(this.imageType == type){
         this.active_item = !this.active_item
       }
     }
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
  cursor: pointer;
}
.item{
  height: 30px;
    text-align: center;
    padding:6px;
    color:var(--highlightOne);
    margin-right: 2px;
    
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
.first-item.option-selected{
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
}

.last-item.option-selected{
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
}
</style>