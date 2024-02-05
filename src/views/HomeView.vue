<script>
import CompanyDataComponent from '../components/CompanyDataComponent.vue';
import Header from "./Header.vue";
import TurnsComponent from '../components/turnsComponents/TurnsComponent.vue';
import GratitudeComponent from '../components/GratitudeComponent.vue';
import '../assets/styles.css'

export default {
    name: 'App',
    components: {
        HeaderComponent: Header,
        CompanyDataComponent,
        TurnsComponent,
        GratitudeComponent
    },
    // beforeCreate() {
    //   this.$OneSignal.User.PushSubscription.optIn();
    // }
}
</script>

<template>
  <div class="h-screen">
    <HeaderComponent />
    <CompanyDataComponent />
    <TurnsComponent />
    <GratitudeComponent />
  </div>
</template>