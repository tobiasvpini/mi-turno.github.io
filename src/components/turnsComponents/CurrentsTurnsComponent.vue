<template>
    <div class="container-sm mt-4 border-t-orange-600 border-t-4 columns-sm max-w-sm mx-auto rounded-b-md overflow-hidden shadow-lg">
        <h4 class="text-center text-xl font-bold mt-2 underline underline-offset-8">{{ textContent[lang][0] }}</h4>
        <ul class="flex justify-around mt-4 pb-4">
            <li v-for="(item, index) in activeItems" 
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
        timer: null

      }  
    },
    props: ['orderOfTurns'],
    watch: {
        orderOfTurns: {
            handler(val){
                this.list = val
                this.activeItems = this.filteredList.slice(0, 5);
            }
        },
        timers: {
            handler(){
                this.startTimers()
            }
        }
    },
    computed: {
        ...mapState(languageStore, ['lang']),
        filteredList() {
            return this.list.slice(this.currentIndex, this.currentIndex + 5);
        }
    },
    methods: {
        startTimers() {
            this.timers = Array.from({ length: 5 }, (_, i) => {
                const index = this.currentItem + i;
                return new Promise(resolve =>
                    setTimeout(() => {
                        resolve({ item: this.filteredList[index], index });
                    }, this.filteredList[index] ? this.filteredList[index].timer : 0)
                );
            });

            Promise.all(this.timers).then(results => {
                results.forEach(({ item, index }) => {
                    this.activeItems.splice(index, 1);
                    if (index < this.filteredList.length - 1) {
                        this.activeItems.push(this.filteredList[index + 1]);
                    }
                });
                this.currentItem += 5;
                if (this.currentItem >= this.filteredList.length) {
                    this.currentItem = 0;
                }
                this.startTimers();
            });
        }
    }

}
</script>