<template>
  <EditingCard heading="Drawing">
    <div class="row">
      <div class="col-4">
        <Drawing1 class="edit-menu-icon" />
      </div>
      <div class="col-4">
        <Drawing2 class="edit-menu-icon" />
      </div>
      <div class="col-4">
        <Drawing3 class="edit-menu-icon" />
      </div>
      <div class="col-4">
        <Drawing4 class="edit-menu-icon" />
      </div>
    </div>
  </EditingCard>
</template>

<script lang='ts'>
import EditingCard from "./EditingCard.vue";
import Drawing1 from "@/assets/icons/Drawing1.svg";
import Drawing2 from "@/assets/icons/Drawing2.svg";
import Drawing3 from "@/assets/icons/Drawing3.svg";
import Drawing4 from "@/assets/icons/Drawing4.svg";
export default {
  name: "DrawingEditing",
  components: {
    EditingCard,
    Drawing1,
    Drawing2,
    Drawing3,
    Drawing4,
  },
  methods: {
    onClicked(): void {
      console.log("Yeah clicked");
    },
  },
};
</script>

<style scoped>
</style>