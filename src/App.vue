<template>
  <div class="h-screen relative">
    <div v-if="isVisible" :class="isVisible ? 'bg-black h-screen w-full opacity-40 absolute z-0': ''"></div>
    <AddToHomeScreen 
      v-if="isVisible" 
      :class="isVisible ? `
        w-64 
        border-2 
        border-orange-100 
        text-sm 
        font-extralight 
        bg-orange-200 
        rounded-r-full 
        drop-shadow-xl
        transition-shadow
        p-4
        text-center
        container
        z-50
        absolute 
        top-1/2 
        right-0
        mt-32
        -translate-x-1/2 
        -translate-y-1/2
      ` : ''" 
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
