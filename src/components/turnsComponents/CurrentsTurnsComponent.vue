<template>
    <div class="container-sm mt-4 border-t-orange-600 border-t-4 columns-sm max-w-sm mx-auto rounded-b-md overflow-hidden shadow-lg">
        <h4 class="text-center text-xl font-bold mt-2 underline underline-offset-8">{{ textContent[lang][0] }}</h4>
        <ul class="flex justify-around mt-4 pb-4">
            <li class="w-1/5 bg-orange-200 border-2 text-center text-orange-900 border-b-orange-500 ">A001</li>
            <li class="w-1/5 bg-orange-200 border-2 text-center text-orange-900 border-b-orange-500 ">A002</li>
            <li class="w-1/5 bg-orange-200 border-2 text-center text-orange-900 border-b-orange-500 ">A003</li>
            <li class="w-1/5 bg-orange-200 border-2 text-center text-orange-900 border-b-orange-500 ">A004</li>
            <li class="w-1/5 bg-orange-200 border-2 text-center text-orange-900 border-b-orange-500 ">A005</li>
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
        }
      }  
    },
    computed: {
        ...mapState(languageStore, ['lang'])
    },
}
</script>