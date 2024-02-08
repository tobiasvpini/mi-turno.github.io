<template>
  <div class="h-screen relative">
    <div v-if="isVisible" :class="isVisible ? 'bg-black h-screen w-full opacity-40 absolute z-0': ''"></div>
    <AddToHomeScreen 
      v-if="isVisible"
      :isVisible="isVisible"
      v-model:isVisible="isVisible"
    />
    <HomeView />
  </div>
</template>

<script>
import HomeView from './views/HomeView.vue';
import AddToHomeScreen from './components/AddToHomeScreen.vue';

export default {
    name: 'App',
    data() {
      return {
        isVisible: true    
      }
    },
    components: {
        HomeView,
        AddToHomeScreen
    },
    // created() {
    //   if (Notification.permission === 'granted') {
    //     this.$OneSignal.User.PushSubscription.optIn();
    //   } else if (Notification.permission !== 'denied') {
    //     this.$OneSignal.Notifications.requestPermission().then(permission => {
    //       if (permission) {
    //         this.$OneSignal.User.PushSubscription.optIn();
    //       }
    //     });
    //   }
    // }
}
</script>

<style>
body,
html {
  padding: 0;
  margin: 0;
}
* {
  box-sizing: border-box;
}
</style>
