<template>
  <div class="row">
    <div class="col side-bar">
      <GeneralEditing />
      <ViewPropertyEditing />
      <MeasurementEditing />
      <DrawingEditing />
      <ObjectEditing />
      <TreatmentEditing />
    </div>
  </div>
</template>

<script>
import GeneralEditing from "../GeneralEditing.vue";
import TreatmentEditing from "../TreatmentEditing.vue";
import ViewPropertyEditing from "../ViewPropertyEditing.vue";
import ObjectEditing from "../ObjectEditing.vue";
import MeasurementEditing from "../MeasurementEditing.vue";
import DrawingEditing from "../DrawingEditing.vue";
export default {
  name: "SideBar",
  components: {
    GeneralEditing,
    TreatmentEditing,
    ViewPropertyEditing,
    ObjectEditing,
    MeasurementEditing,
    DrawingEditing,
  },
};
</script>

<style  scoped>
.side-bar {
  max-width: 270px;
}
</style>>
