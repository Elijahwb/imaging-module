<template>
  <div class="d-flex justify-content-around list-items">
    <p class="item">All</p>
    <p class="item">Pano</p>
    <p class="item">Graph</p>
    <p class="item">IO Sensor</p>
    <p class="item">IO Camera</p>
    <p class="item">Photo</p>
    <p class="item">Capture</p>
  </div>
</template>

<script>
export default {

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
.item{
    text-align: center;
    padding:6px;
    color:var(--highlightOne);
    margin-right: 2px;
    
}
</style>