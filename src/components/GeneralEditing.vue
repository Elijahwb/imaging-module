<template>
  <EditingCard heading="General">
      <div class="row">
        <div class="col-4">
          <SearchIcon/>
        </div>
       <div class="col-4">
          <MenuIcon/>
       </div>
       <div class="col-4">
          <General3/>
       </div>
       <div class="col-4">
          <General4/>
       </div>
       <div class="col-4">
          <General5/>
       </div>
      </div>
  </EditingCard>
</template>

<script>
import EditingCard from './EditingCard.vue'
import SearchIcon from '@/assets/icons/General1.svg';
import MenuIcon from '@/assets/icons/General2.svg';
import General3 from '@/assets/icons/General3.svg';
import General4 from '@/assets/icons/General4.svg';
import General5 from '@/assets/icons/General5.svg';

export default {
  name:'GeneralEditing',
  components:{
      EditingCard,
    SearchIcon,
    MenuIcon,
    General3,
    General4,
    General5
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