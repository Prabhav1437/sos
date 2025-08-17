import { createRouter, createWebHistory } from 'vue-router'
import PersonalInfoForm from '../PersonalInfoForm.vue'
import MedicalHistoryForm from '../MedicalHistoryForm.vue'
import InsuranceForm from '../InsuranceForm.vue'
import Dashboard from '../EmergencyDashboard.vue' 

const routes = [
  { path: '/', redirect: '/personal' },
  { path: '/personal', component: PersonalInfoForm },
  { path: '/medical', component: MedicalHistoryForm },
  { path: '/insurance', component: InsuranceForm },
  { path: '/dashboard', component: Dashboard }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
