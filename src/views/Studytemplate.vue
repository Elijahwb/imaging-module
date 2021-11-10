<template>
    <Frame>
        <div class="study-template-container">
            <StudyTemplate />
            <StudyTemplate />
            <StudyTemplate />
            <StudyTemplate />
        </div>
    </Frame>
</template>

<script>
import Frame from "@/components/home/Homeframe.vue";
import StudyTemplate from "@/components/home/studytemplate/StudyTemplate.vue";
export default {
    components: {
        Frame,
        StudyTemplate
    },
    data(){
        return {
            paranomas: [
                {
                    name: "1.jpeg",
                    type: "Panaromo"
                },
                {
                    name: "2.jpeg",
                    type: "IO Camera"
                },
                {
                    name: "3.jpeg",
                    type: "CT"
                },
                {
                    name: "4.jpeg",
                    type: "IO Sensor"
                },
                {
                    name: "5.jpeg",
                    type: "CT"
                },
            ],
            paranomas2: [
                {
                    name: "6.jpeg",
                    type: "Panaromo"
                },
                {
                    name: "7.jpeg",
                    type: "IO Camera"
                },
                {
                    name: "8.jpeg",
                    type: "CT"
                },
                {
                    name: "9.jpeg",
                    type: "IO Sensor"
                },
                {
                    name: "10.jpeg",
                    type: "CT"
                },
            ],
            paranomas3: [
                {
                    name: "10.jpeg",
                    type: "Panaromo"
                },
                {
                    name: "3.jpeg",
                    type: "IO Camera"
                },
                {
                    name: "5.jpeg",
                    type: "CT"
                },
                {
                    name: "7.jpeg",
                    type: "IO Sensor"
                },
                {
                    name: "6.jpeg",
                    type: "CT"
                },
            ],
        }
    },
}
</script>

<style scoped>
.study-template-container::-webkit-scrollbar {
    width: 5px;
    scrollbar-color: var(--thumbBG) var(--scrollbarBG);
}
.study-template-container::-webkit-scrollbar-track {
    background: transparent;
}
.study-template-container::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 2px;
    border: 3px solid var(--highlight);
}
.study-template-container {
    height: calc(100% - 60px);
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    row-gap: 10px;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>