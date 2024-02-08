<template>
    <div class="container-sm mt-4 border-t-orange-600 border-t-4 columns-sm max-w-sm mx-auto rounded-b-md overflow-hidden shadow-lg">
        <h4 class="text-center text-xl font-bold mt-2 underline underline-offset-8">{{ textContent[lang][0] }}</h4>
        <ul class="flex justify-around mt-4 pb-4"> 
            <li v-for="(item, index) in activeItems.slice(currentIndex, currentIndex + 5)" 
                class="w-1/5 bg-orange-200 border-2 text-center text-orange-900 border-b-orange-500"
                :key="index">
                {{ item.id }}
            </li>
        </ul>
    </div>
</template>

<script>
import { languageStore } from '@/store/store'
import { mapState } from 'pinia'
import axios from "../../api/axios";

export default {
    name: 'Currents-Turns-Component',    
    data() {
      return {
        textContent: {
            en: ['Currents Turns'],
            es: ['Turnos en atencion']
        },
        list: [],
        currentIndex: 0,
        activeItems: [],
        timer: null,
        trash: []
      }  
    },
    props: ['orderOfTurns', 'mine'],
    computed: {
        ...mapState(languageStore, ['lang'])
    },
    watch: {
        orderOfTurns: {
            immediate: true,
            handler(val){
                this.activeItems = val;
                this.updateActiveItems();
            }
        },
    },
    methods: {
        updateActiveItems() {
            let promiseChain = Promise.resolve();
            this.activeItems.forEach((item) => {
                promiseChain = promiseChain.then(() => {
                    return new Promise((resolve) => {
                        setTimeout(() => {
                            let index = this.activeItems.indexOf(item);
                            this.activeItems.splice(index, 1);
                            if(this.activeItems.map(({ id }) => id).indexOf(this.mine.id) === 7){

                            }
                            resolve();
                        }, item.timer);
                    });
                });
            });
        }
    },
    created() {
        console.log(this.$OneSignal)
    }
}
</script>