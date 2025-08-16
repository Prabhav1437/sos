<template>
  <div class="card">
    <h2>Dashboard</h2>
    <p><strong>Name:</strong> {{ profile.personal.name }}</p>
    <p><strong>Age:</strong> {{ profile.personal.age }}</p>
    <p><strong>Phone:</strong> {{ profile.personal.phone }}</p>
    <p><strong>Address:</strong> {{ profile.personal.address }}</p>

    <hr />

    <p><strong>Conditions:</strong> {{ profile.medical.conditions }}</p>
    <p><strong>Allergies:</strong> {{ profile.medical.allergies }}</p>
    <p><strong>Medications:</strong> {{ profile.medical.medications }}</p>

    <hr />

    <p><strong>Insurance Provider:</strong> {{ profile.insurance.provider }}</p>
    <p><strong>Policy Number:</strong> {{ profile.insurance.policyNumber }}</p>
  </div>
</template>

<script>
import { useProfileStore } from '../stores/profile'

export default {
  setup() {
    const profile = useProfileStore()
    return { profile }
  }
}
</script>
