<template>
    <button @click="handleClick">
        <svg width="20" height="20" viewBox="0 0 512 342" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path fill="#FFDA44" d="M0 .331h512v341.337H0z"/><path d="M0 .331h512v113.775H0zm0 227.551h512v113.775H0z" fill="#D80027"/></g></svg>
    </button>
</template>

<script>
import { languageStore } from '@/store/store'
import { mapActions } from 'pinia'

export default {
    name: 'Spain-Flag-Component',
    methods: {
        ...mapActions(languageStore, ['CHANGE_LANG']),
        handleClick() {
            this.CHANGE_LANG({ lang: 'es'})
        }
    }
}
</script>