<template>
  <EditingCard heading="Object">
    <div class="row">
      <div class="col-4">
        <Object1 />
      </div>
      <div class="col-4">
        <Object2 />
      </div>
      <div class="col-4">
        <Object3 />
      </div>
      <div class="col-4">
        <Object4 />
      </div>
    </div>
  </EditingCard>
</template>

<script>
import EditingCard from "./EditingCard.vue";
import Object1 from "@/assets/icons/Object1.svg";
import Object2 from "@/assets/icons/Object2.svg";
import Object3 from "@/assets/icons/Object3.svg";
import Object4 from "@/assets/icons/Object4.svg";
export default {
  name: "ObjectEditing",
  components: {
    EditingCard,
    Object1,
    Object2,
    Object3,
    Object4,
  },
  methods: {
    onClicked() {
      console.log("Yeah clicked");
    },
  },
};
</script>
