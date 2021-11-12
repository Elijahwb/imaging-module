<template>
  <EditingCard heading="Viewer Property">
      <div class="row">
        <!-- <CustomRange/> -->
          <Slider><LightIcon></LightIcon></Slider>
          <Slider><BrightnessIcon/></Slider>
          <Slider><MeasurementIcon/></Slider>
          <!-- <div class="grid-container"> -->
          <div class="col-6">
              <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckSharpen">
  <label class="form-check-label" for="flexCheckSharpen">
    Sharpen
  </label>
          </div>
          </div>
           <div class="col-6">
              <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckInvert">
  <label class="form-check-label" for="flexCheckInvert">
    Invert
  </label>
          </div>
          </div>
          <!-- </div> -->
          <!-- <div class="grid-container"> -->
           <div class="col-6">
              <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckUnsharp">
  <label class="form-check-label" for="flexCheckUnsharp">
    Unsharp
  </label>
          </div>
          </div>

           <div class="col-6">
              <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDenoise">
  <label class="form-check-label" for="flexCheckDenoise">
    Denoise
  </label>
          </div>
          </div>
          <!-- </div> -->
      </div>
  </EditingCard>
</template>

<script>
import EditingCard from './EditingCard.vue'
import Slider from './global/RangeSlider.vue'
import LightIcon from '@/assets/icons/Viewerproperty1.svg';
import BrightnessIcon from '@/assets/icons/Viewerproperty2.svg';
import MeasurementIcon from '@/assets/icons/Viewerproperty3.svg';
// import CustomRange from './global/CustomRange.vue'
export default {
  name:'ViewPropertyEditing',
  components:{
      EditingCard,
      Slider,
      LightIcon,
      BrightnessIcon,
      MeasurementIcon,
      // CustomRange
  }
}
</script>

<style scoped>
.item1 { grid-area: icon; }
.item2 { grid-area: slider; }
.grid-container{
    display: grid;
    /* grid-gap: 10px; */
    grid-template-columns: auto auto;
    padding: 8px 8px;
}
.row-item{
    grid-row: 1 / span 1;
}
/* The container */
/* .container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
} */
/* Hide the browser's default checkbox */
/* .container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
} */

/* Create a custom checkbox */
/* .checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
} */
/* On mouse-over, add a grey background color */
/* .container:hover input ~ .checkmark {
  background-color: #ccc;
} */

/* When the checkbox is checked, add a blue background */
/* .container input:checked ~ .checkmark {
  background-color: #2196F3;
} */

/* Create the checkmark/indicator (hidden when not checked) */
/* .checkmark:after {
  content: "";
  position: absolute;
  display: none;
} */

/* Show the checkmark when checked */
/* .container input:checked ~ .checkmark:after {
  display: block;
} */

/* Style the checkmark/indicator */
/* .container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
} */
</style>