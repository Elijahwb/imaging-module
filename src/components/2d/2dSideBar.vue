<template>
<div class="row">
  <div class="side-bar">
      <GeneralEditing/>
      <ViewPropertyEditing/>
      <EditingCard heading="Measurement">
        Kasujja Muhammed
        Kasujja Muhammed
        Kasujja Muhammed
      </EditingCard>
      <EditingCard heading="Drawing">
        Kasujja Muhammed
      </EditingCard>
      <EditingCard heading="Object">
        Kasujja Muhammed
        Kasujja Muhammed
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
  name:'SideBar',
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
