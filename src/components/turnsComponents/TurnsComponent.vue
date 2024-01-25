<template>
    <MyTurnComponent />
    <CurrentsTurnsComponent />
</template>

<script>
import MyTurnComponent from './MyTurnComponent.vue';
import CurrentsTurnsComponent from './CurrentsTurnsComponent.vue';

export default{
    name: 'Turns-Component',
    components: {
        MyTurnComponent,
        CurrentsTurnsComponent
    }
}
</script>