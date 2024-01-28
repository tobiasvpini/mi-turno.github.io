<template>
    <div class="container-sm mt-4 border-t-orange-600 border-t-4 columns-sm max-w-sm mx-auto rounded-b-md overflow-hidden shadow-lg">
        <p class=" ml-2 p-0.5 flex justify-between">
            <span class="text-sm">{{ textContent[lang][0] }}</span>     
            <span class=" font-bold text-sm text-right mr-2">{{ this.myTurn.turnId }}</span>
        </p>
        <p class=" ml-2 p-0.5 flex justify-between">
            <span class="text-sm">{{ textContent[lang][1] }}</span>     
            <span class=" font-bold text-sm text-right mr-2">{{ this.myTurn.dateTime }}</span>
        </p>

    </div>
</template>

<script>
import moment from 'moment';
import { languageStore } from '@/store/store'
import { mapState } from 'pinia'

export default {
    name: 'My-Turn',
    data() {
        return {
            myTurn: {},
            textContent: {
                'es': [
                    'Mi turno:',
                    'Llegada al comercio:'
                ],
                'en': [
                    'My turn:', 
                    'Arrival at the shop:'
                ]
            }
        }
    },
    props: ['mine'],
    watch: {
        mine: {
            handler(val){
                this.myTurn.turnId = val.id
            }
        }
    },
    computed: {
        ...mapState(languageStore, ['lang'])
    },
    created() {
        this.myTurn.dateTime = moment().format('YYYY-MM-DD HH:mm');
    }
}
</script>