<template>
  <div class="grid-container">
    <label class="item1"><slot></slot></label>
    <input type="range" min="0" max="100" step="1" :value="value" class="item2">
   </div>
</template>

<script>
export default {
 name:'RangeSlider',
 props:{
     label:String,
     value:{default:0}
 }
}
</script>

<style scoped>
.item1 { grid-area: icon; }
.item2 { grid-area: slider; }
.grid-container{
    display: grid;
    grid-template-areas:'icon slider slider';
    padding: 8px 8px;
}
input[type='range']::-webkit-slider-thumb {
  width: 6px;
  -webkit-appearance: none;
  height: 12px;
  background: black;
  border-radius: 2px;
}
</style>