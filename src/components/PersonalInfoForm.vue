<template>
  <div class="card">
    <h2>Personal Information</h2>
    <form @submit.prevent="savePersonal">
      <input v-model="form.name" placeholder="Name" required />
      <input v-model="form.age" placeholder="Age" type="number" required />
      <input v-model="form.phone" placeholder="Phone" required />
      <input v-model="form.address" placeholder="Address" required />
      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script>
import { useProfileStore } from './stores/profile'
import { reactive } from 'vue'

export default {
  setup() {
    const store = useProfileStore()
    const form = reactive({ ...store.personal })

    const savePersonal = () => {
      store.setPersonal(form)
      alert('Personal Info Saved ✅')
    }

    return { form, savePersonal }
  }
}
</script>
