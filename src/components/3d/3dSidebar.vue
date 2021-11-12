<template>
<div class="row">
  <div class="col side-bar">
      <GeneralEditing/>
      <ViewPropertyEditing/>
      <EditingCard heading="Measurement">
       Measurement 1
       Measurement 2
       Measurement 3
      </EditingCard>
      <EditingCard heading="Drawing">
        Drawing 1
        Drawing 2
        Drawing 3
      </EditingCard>
      <EditingCard heading="Object">
        Object 1
        Object 2
      </EditingCard>
      <TreatmentEditing />
  </div>
  </div>
</template>

<script>
import EditingCard from '../EditingCard.vue'
import  GeneralEditing from '../GeneralEditing.vue'
import TreatmentEditing from '../TreatmentEditing.vue'
import ViewPropertyEditing from '../ViewPropertyEditing.vue'
export default {
  name:'3dSideBar',
  components:{
      EditingCard,
      GeneralEditing,
      TreatmentEditing,
      ViewPropertyEditing
  }
}
</script>

<style  scoped>
.side-bar{
  max-width: 270px;
}
</style>>
