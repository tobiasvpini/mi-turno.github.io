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
    created() {
      if (Notification.permission === 'granted') {
        this.$OneSignal.User.PushSubscription.optIn();
      } else if (Notification.permission !== 'denied') {
        this.$OneSignal.Notifications.requestPermission().then(permission => {
          if (permission) {
            this.$OneSignal.User.PushSubscription.optIn();
          }
        });
      }
    }
}
</script>

<template>
  <div class="h-screen">
    <AddToHomeScreen v-if="isVisible" :class="isVisible ? 'w-full border-2 border-x-0 border-black text-center p-2 leading-7 absolute bottom-0 z-50 bg-white' : ''" :isVisible="isVisible"/>
    <HomeView />
  </div>
</template>

<style>
body,
html {
  padding: 0;
  margin: 0;
  /* overflow: hidden; */
}
* {
  box-sizing: border-box;
}
</style>
