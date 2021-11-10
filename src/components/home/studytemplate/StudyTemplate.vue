<template>
    <div class="studytemplate-container">
        <div class="container-heading">Panorama</div>
        <div class="images-container">
            <div class="image-container">
                <img src="@/assets/xrays/2.jpeg" alt="">
                <div class="date-overlay">2021-11-10</div>
            </div>
            <div class="image-container">
                <img src="@/assets/xrays/2.jpeg" alt="">
                <div class="date-overlay">2021-11-10</div>
            </div>
            <div class="image-container">
                <img src="@/assets/xrays/2.jpeg" alt="">
                <div class="date-overlay">2021-11-10</div>
            </div>
            <div class="image-container">
                <img src="@/assets/xrays/2.jpeg" alt="">
                <div class="date-overlay">2021-11-10</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.date-overlay {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 30px;
    background: rgba(0,0,0,.3);
    display: flex;
    align-items: center;
    justify-content: center;
}
.image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.image-container {
    position: relative !important;
    height: 50%;
    flex-basis: calc(50% - 5px);
    flex-shrink: 0;
    flex-grow: 0;
}
.images-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    overflow-x: hidden;
    row-gap: 10px;
}
.container-heading {
    font-size: 15px;
}
.studytemplate-container {
    height: calc(50% - 10px);
    border-right:.5px solid var(--appWhite);
    flex-basis: calc(50% - 5px);
    flex-shrink: 0;
    flex-grow: 0;
}
</style>