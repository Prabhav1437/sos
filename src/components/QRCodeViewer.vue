<template>
  <div>
    <h2>Your Emergency QR Code</h2>
    <qrcode-vue :value="qrData" :size="200" />
    <button @click="printQR">Print QR Code</button>
  </div>
</template>

<script>   
import QRCodeVue from 'qrcode.vue'
import { computed } from 'vue'
import { useProfileStore } from './stores/profile'

export default {
  components: { QRCodeVue },
  setup() {
    const profile = useProfileStore()
    const qrData = computed(() => JSON.stringify(profile.$state))
    function printQR() {
      window.print()
    }
    return { qrData, printQR }
  }
}
</script>
