import { createRouter, createWebHistory } from 'vue-router'
import PersonalInfoForm from '../components/PersonalInfoForm.vue'
import MedicalHistoryForm from '../components/MedicalHistoryForm.vue'
import InsuranceForm from '../components/InsuranceForm.vue'
import Dashboard from '../components/EmergencyDashboard.vue' 

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
