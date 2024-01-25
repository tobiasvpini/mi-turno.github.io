<script>
import CompanyDataComponent from './components/CompanyDataComponent.vue';
import Header from "./views/Header.vue";
import TurnsComponent from './components/turnsComponents/TurnsComponent.vue';
import GratitudeComponent from './components/GratitudeComponent.vue';
import './assets/styles.css'

export default {
    name: 'App',
    components: {
        HeaderComponent: Header,
        CompanyDataComponent,
        TurnsComponent,
        GratitudeComponent
    }
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

<style>
body,
html {
  padding: 0;
  margin: 0;
  overflow: hidden;
}
* {
  box-sizing: border-box;
}
</style>
