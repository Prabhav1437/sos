<template>
  <div class="card">
    <h2>Medical History</h2>
    <form @submit.prevent="saveMedical">
      <textarea v-model="form.conditions" placeholder="Conditions"></textarea>
      <textarea v-model="form.allergies" placeholder="Allergies"></textarea>
      <textarea v-model="form.medications" placeholder="Medications"></textarea>
      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script>
import { useProfileStore } from '../stores/profile' 
import { reactive } from 'vue'

export default {
  setup() { 
    const store = useProfileStore()
    const form = reactive({ ...store.medical })

    const saveMedical = () => {
      store.setMedical(form)
      alert('Medical Info Saved ✅')
    }

    return { form, saveMedical }
  }
}
</script>
