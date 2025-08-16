<template>
  <div class="card">
    <h2>Insurance Information</h2>
    <form @submit.prevent="saveInsurance">
      <input v-model="form.provider" placeholder="Insurance Provider" />
      <input v-model="form.policyNumber" placeholder="Policy Number" />
      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script>
import { useProfileStore } from '../stores/profile'
import { reactive } from 'vue'

export default{
  setup() {
    const store = useProfileStore()
    const form = reactive({ ...store.insurance })

    const saveInsurance = () => {
      store.setInsurance(form)
      alert('Insurance Info Saved ✅')
    }

    return { form, saveInsurance }
  }
}
</script>
 