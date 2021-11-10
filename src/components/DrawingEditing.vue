<template>
  <EditingCard heading="Drawing">
    <!-- <div class="grid-container"> -->
      <div class="row">
        <div class="col-4">
        <Drawing1/>
</div>
<div class="col-4">
<Drawing2/>
</div>
<div class="col-4">
<Drawing3/>
</div>
   <div class="col-4">
     <Drawing4/>
   </div>
      </div>
      
    <!-- </div> -->
  </EditingCard>
</template>

<script>
import EditingCard from './EditingCard.vue'
import Drawing1 from '@/assets/icons/Drawing1.svg';
import Drawing2 from '@/assets/icons/Drawing2.svg';
import Drawing3 from '@/assets/icons/Drawing3.svg';
import Drawing4 from '@/assets/icons/Drawing4.svg';
export default {
  name:'DrawingEditing',
  components:{
      EditingCard,
       Drawing1,
    Drawing2,
    Drawing3,
    Drawing4,
  },
  methods:{
      onClicked(){
          console.log('Yeah clicked');
      }
  }
}
</script>

<style scoped>
.fa-camera{
    color: green;
}
.grid-container{
    display: grid;
    /* grid-gap: 10px; */
    grid-template-columns: auto auto auto auto auto;
    padding: 8px 8px;
}
</style>