<template>
    <div class="flex p-2 mt-1">
        <SpainFlagComponent class="mr-2"/>
        <UsaFlagComponent />
    </div>
</template>

<script>
import SpainFlagComponent from '@/components/svg/SpainFlagComponent.vue';
import UsaFlagComponent from '@/components/svg/UsaFlagComponent.vue';

export default {
    name: 'Language-Component',
    components: {
        SpainFlagComponent,
        UsaFlagComponent
    }
}
</script>