<template>
  <div class="d-flex justify-content-around list-items">
    <p class="item">All</p>
    <p class="item">Today</p>
    <p class="item">1 Week</p>
    <p class="item">1 Month</p>
    <p class="item">3 Month</p>
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