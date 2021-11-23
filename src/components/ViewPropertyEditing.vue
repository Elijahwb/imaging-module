<template>
  <EditingCard heading="Viewer Property">
    <div class="row">
      <Slider :value="8"><LightIcon></LightIcon></Slider>
      <Slider :value="15"><BrightnessIcon /></Slider>
      <Slider :value="5"><MeasurementIcon /></Slider>
      <div class="col-6">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckSharpen"
          />
          <label class="form-check-label" for="flexCheckSharpen">
            Sharpen
          </label>
        </div>
      </div>
      <div class="col-6">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckInvert"
          />
          <label class="form-check-label" for="flexCheckInvert"> Invert </label>
        </div>
      </div>
      <div class="col-6">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckUnsharp"
          />
          <label class="form-check-label" for="flexCheckUnsharp">
            Unsharp
          </label>
        </div>
      </div>
      <div class="col-6">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDenoise"
          />
          <label class="form-check-label" for="flexCheckDenoise">
            Denoise
          </label>
        </div>
      </div>
    </div>
  </EditingCard>
</template>

<script lang='ts'>
import EditingCard from "./EditingCard.vue";
import Slider from "./global/Ranger.vue";
import LightIcon from "@/assets/icons/Viewerproperty1.svg";
import BrightnessIcon from "@/assets/icons/Viewerproperty2.svg";
import MeasurementIcon from "@/assets/icons/Viewerproperty3.svg";
// import CustomRange from './global/CustomRange.vue'
export default {
  name: "ViewPropertyEditing",
  components: {
    EditingCard,
    Slider,
    LightIcon,
    BrightnessIcon,
    MeasurementIcon,
    // CustomRange
  },
};
</script>