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
                // this.startTurns(this.activeItems.slice(this.currentIndex, this.currentIndex + 5));
            }
        },
    },
    methods: {
        updateActiveItems() {
            let processedItems = [];
            let promiseChain = Promise.resolve();
            this.activeItems.forEach((item) => {
                promiseChain = promiseChain.then(() => {
                    return new Promise((resolve) => {
                        setTimeout(() => {
                            let index = this.activeItems.indexOf(item);
                            this.activeItems.splice(index, 1);
                            processedItems.push(item);
                            let remainingTurns = this.activeItems.filter(i => processedItems.every(el => el.id !== i.id));
                            if (remainingTurns.length > 0) {
                                this.$nextTick(() => {
                                    this.currentIndex = this.currentIndex + 1
                                });                            }
                            console.log(`turno: ${item.id} ya atendido` );
                            resolve();
                        }, item.timer);
                    });
                });
            });

        },
        processTurn(turn, idx) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    let index = this.activeItems.indexOf(turn);
                    let processedItems = [];
                    this.activeItems.splice(index, 1);
                    processedItems.push(turn);
                    let remainingTurns = this.activeItems.filter(i => processedItems.every(el => el.id !== i.id));
                    if (remainingTurns.length > 0) {
                        this.currentIndex = this.currentIndex + 1
                    }
                    console.log(`turno: ${turn.id} ya atendido` );
                    resolve();
                }, turn.timer);
            });
        },
        startTurns(turns) {
            let activePromises = [];

            turns.forEach((turn, index) => {
                if (activePromises.length < 5) {
                    activePromises.push(this.processTurn(turn, index));
                } else {
                    activePromises[0] = activePromises[0].then(() => this.processTurn(turn, index));
                }
            });

            return Promise.all(activePromises);
        }
    }


}
</script>