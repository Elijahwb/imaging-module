<template>
  <EditingCard heading="Measurement">
      <div class="row">
        <div class="col-4">
        <Measurement1/>
</div>
<div class="col-4">
    <Measurement2/>
</div>
<div class="col-4">
<Measurement3/>
</div>
<div class="col-4">
    <Measurement4/>
</div>
<div class="col-4">
<Measurement5/>
</div>
   
      </div>
  </EditingCard>
</template>

<script>
import EditingCard from './EditingCard.vue'
import Measurement1 from '@/assets/icons/Measurement1.svg';
import Measurement2 from '@/assets/icons/Measurement2.svg';
import Measurement3 from '@/assets/icons/Measurement3.svg';
import Measurement4 from '@/assets/icons/Measurement4.svg';
import Measurement5 from '@/assets/icons/Measurement5.svg';

export default {
  name:'MeasurementEditing',
  components:{
      EditingCard,
    Measurement1,
    Measurement2,
    Measurement3,
    Measurement4,
    Measurement5
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