<template>
    <section class="app-container">
        <Topbar />
        <section class="sections">
            <Sidecontent>
                <div class="heading">
                    <div>Patients</div>
                    <div class="add-patient">
                        <i class="fa fa-user-plus"></i>
                    </div>
                </div>

                <div class="search-patients-container">
                    <input type="text" placeholder="Search ID or Name">
                    <i class="fa fa-search"></i>
                </div>

                <div class="filters-container">
                    <div class="filter-items">
                        <div class="filter-item">ID</div>
                        <div class="filter-item">Name</div>
                        <div class="filter-item">Date</div>
                    </div>
                    <div class="filter-actions">
                        <i class="fas fa-undo-alt"></i>
                    </div>
                </div>

                <div class="patients-container">
                    <div class="patients-heading">
                        Recently Opened
                    </div>
                    <div class="patients-list">
                        <Patientcard v-for="patient, index in patients" :key="index" :isActive="index == 0 ? 'true' : 'false' " :name="'Patient ' + index+1" :id=" 'DS00' + index + 1 " age="24" :gender=" index % 2 == 0 ? 'M' : 'F'  " dateCreated="09/11/2021" />
                    </div>
                </div>
            </Sidecontent>
            <Contentsection>
                <Submenu />
                <slot />
            </Contentsection>
        </section>
    </section>
</template>

<script>
import Topbar from "../global/Topbar.vue";
import Sidecontent from "../global/SideContent.vue";
import Contentsection from "../global/ContentContainer.vue";
import Patientcard from "./PatientCard.vue";
import Submenu from "./Submenu.vue";

export default {
    components: {
        Topbar,
        Sidecontent,
        Contentsection,
        Patientcard,
        Submenu,
    },
    data(){
        return {
            patients: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],
        }
    },
}
</script>

<style scoped>
.patients-list {
    height: calc(100% - 40px);
    overflow-y: auto;
    scrollbar-color: var(--thumbBG) var(--scrollbarBG);
}
.patients-list::-webkit-scrollbar {
    width: 2px;
    scrollbar-color: var(--thumbBG) var(--scrollbarBG);
}
.patients-list::-webkit-scrollbar-track {
    background: transparent;
}
.patients-list::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 2px;
    border: 3px solid var(--highlight);
}
.patients-heading {
    margin-bottom: 10px;
}
.patients-container {
    margin-top: 20px;
    background: var(--componentHighlight);
    height: calc(100% - 150px);
    border-radius: 8px;
    padding: 10px;
    overflow-y: hidden;
}

/* Start of filter patients section style*/
.filter-actions i:hover {
    cursor: pointer;
}
.filter-actions i {
    background: var(--appWhite);
    height: 25px;
    width: 25px;
    border-radius: 50%;
    color: var(--mainBg);
    display: flex;
    align-items: center;
    justify-content: center;
}
.filter-item:hover {
    cursor: pointer;
}
.filter-item {
    background: var(--componentHighlight);
    border-radius: 10px;
    width: 50px;
    text-align: center;
    margin-right: 8px;
    padding: 2px 5px;
}
.filter-items {
    display: inherit;
}
.filters-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
}
/* End of filter patients section style*/

/* Start of search patients section style*/
.search-patients-container i:hover {
    cursor: pointer;
}
.search-patients-container i {
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    padding-right: 5px;
    color: var(--highlight);
}
.search-patients-container input {
    height: 88% !important;
    width: calc(100% - 60px);
    padding: 0 10px;
    margin: 0 0 0 5px;
    background: transparent;
    /* border: 1px solid crimson; */
    border: none;
    outline: none;
    caret-color: var(--appWhite);
    color: var(--appWhite);
}
.search-patients-container {
    width: 100%;
    background: var(--componentHighlight);
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 15px;
    margin-top: 15px;
    border: 1px solid var(--highlight);
}
/* End of search patients section style*/

.add-patient:hover {
    cursor: pointer;
}
.heading {
    display: flex;
    justify-content: space-between;
}
.sections {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    height: calc(100vh - var(--topBarHeight) - 50px);
}
.app-container {
    font-family: "Mohave";
    padding: 0 10px;
    font-size: var(--normalFontSize);
}
</style>