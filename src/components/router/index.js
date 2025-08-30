import { createRouter, createWebHistory } from 'vue-router'
import PersonalInfoForm from '../PersonalInfoForm.vue'
import MedicalHistoryForm from '../MedicalHistoryForm.vue'
import InsuranceForm from '../InsuranceForm.vue'
import EmergencyDashboard from '../EmergencyDashboard.vue'

const routes = [
  { path: '/', component: PersonalInfoForm },
  { path: '/medical', component: MedicalHistoryForm },
  { path: '/insurance', component: InsuranceForm },
  { path: '/dashboard', component: EmergencyDashboard }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router