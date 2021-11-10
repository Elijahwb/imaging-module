<template>
  <EditingCard heading="General">
    <!-- <div class="grid-container"> -->
      <i class="fa fa-search" aria-hidden="true"></i>
      <i class="fa fa-hand-rock-o fa-7x" aria-hidden="false"></i>
      <i class="fa fa-meetup fa-lg" aria-hidden="true"></i>
      <span style="font-size: 48px; color: Mediumslateblue;">
         <i class="fas fa-camera fa-10x"></i>
      </span>
      <span style="font-size: 3rem;">
         <i class="fa fa-camera"></i>
      </span>
    <!-- </div> -->
  </EditingCard>
</template>

<script>
import EditingCard from './EditingCard.vue'
// import ImagingIcon from './ImagingIcon.vue'
export default {
  name:'GeneralEditing',
  components:{
      EditingCard,
    //   ImagingIcon
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