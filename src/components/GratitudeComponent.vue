<template>
    <p class="glassmorphism text-center container-sm mt-4 p-4 columns-sm max-w-sm mx-auto rounded-b-md overflow-hidden tracking-tight text-gray-500 md:text-lg font-sans">
        {{ textContent[lang][0] }}
        <br> <strong>{{ textContent[lang][1] }}</strong>
    </p>
</template>

<script>
import { languageStore } from '@/store/store'
import { mapState } from 'pinia'

export default {
    name: 'Gratitude-Component',
    data() {
        return {
            textContent: {
                'es': [
                    'Muchas gracias por elegir "Mi Turno", usando esta pagina contribuye con el medio ambiente reduciendo considerablemente el uso de papel.', 
                    'En breve le atenderemos!'
                ],
                'en': [
                    'Thank you very much for choosing "Mi Turno", by using this site you contribute to the environment by considerably reducing the use of paper.', 
                    'We look forward to hearing from you!'
                ]
            }
        }
    },
    computed: {
        ...mapState(languageStore, ['lang'])
    }
}
</script>