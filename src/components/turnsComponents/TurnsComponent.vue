<template>
    <MyTurnComponent :mine="mine"/>
    <CurrentsTurnsComponent :orderOfTurns="orderOfTurns" :mine="mine"/>
</template>

<script>
import MyTurnComponent from './MyTurnComponent.vue';
import CurrentsTurnsComponent from './CurrentsTurnsComponent.vue';
import { startSimulation } from '@/simulador-turnos/simulator';

export default{
    name: 'Turns-Component',
    data(){
        return {
            turns: {},
            mine: '',
            orderOfTurns: []
        }
    },
    components: {
        MyTurnComponent,
        CurrentsTurnsComponent
    },
    watch: {
        turns: {
            handler(val){
                this.mine = val.mine;
                this.orderOfTurns = val.order          
            },
            deep: true
        }
    },
    created() {
        this.turns = startSimulation();
    }  
}
</script>