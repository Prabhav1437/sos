import { createApp } from 'vue';
import App from '/workspaces/sos/src/App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '/workspaces/sos/src/components/LandingPage.vue';
import Personal from '/workspaces/sos/src/components/PersonalInfoForm.vue';
import Medical from '/workspaces/sos/src/components/MedicalHistoryForm.vue';
import Insurance from '/workspaces/sos/src/components/InsuranceForm.vue';
import Dashboard from '/workspaces/sos/src/components/EmergencyDashboard.vue';

const routes = [
  { path: '/', component: LandingPage },
  { path: '/personal', component: Personal },
  { path: '/medical', component: Medical },
  { path: '/insurance', component: Insurance },
  { path: '/dashboard', component: Dashboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
