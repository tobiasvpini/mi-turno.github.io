<template>
    <div class="flex justify-between h-12 container-sm bg-gradient-to-r from-orange-300 to-orange-100">
        <LanguageComponent />
        <h3 class="flex place-content-end pt-2 pr-4 italic font-mono text-lg tracking-wide text-orange-900 font-semibold">{{ textContent[lang][0] }}</h3>
    </div>
</template>

<script>
import LanguageComponent from '@/components/LanguageComponent.vue';
import { languageStore } from '@/store/store'
import { mapState } from 'pinia'
    
export default {
    name: 'Header-View',
    components: {
        LanguageComponent
    },
    data() {
      return {
        textContent: {
            en: ['Is it my turn?'],
            es: ['¿Ya es mi turno?']
        }
      }  
    },
    computed: {
        ...mapState(languageStore, ['lang'])
    },
}
</script>