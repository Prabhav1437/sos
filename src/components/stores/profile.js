import { defineStore } from 'pinia'

export const useProfileStore = defineStore('profile', {
  state: () => ({
    personal: {
      name: '',      
      age: '',
      phone: '',
      address: ''
    },
    medical: {
      conditions: '',
      allergies: '',
      medications: ''
    },
    insurance: {
      provider: '',
      policyNumber: ''
    }
  }),
  actions: {
    setPersonal(data) {
      this.personal = data
    },
    setMedical(data) {
      this.medical = data
    },
    setInsurance(data) {
      this.insurance = data
    }
  }
})
