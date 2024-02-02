<template>
    <div class="border-t-orange-600 border-t-4 container-sm columns-sm max-w-sm mx-auto rounded-b-md overflow-hidden shadow-lg  mt-2">
        <SvgLogoComponent class="w-full mt-4" width="50" height="60"/>
        <div class="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg">
            <div class="border-b px-4 pb-6">
                <div class="text-center my-4 text-xs flex">
                    <div class="py-2">
                        <ul class="flex flex-col text-gray-700 dark:text-gray-300">
                            <li class="flex justify-between p-2">
                                <div class="flex justify-center items-center w-7 h-7  mr-2">
                                    <LocationIconComponentVue />
                                </div>
                                <span class="w-full border-b-black-200 border-b-2">
                                    C/ de Sant Vicent Màrtir, 22, Ciutat Vella, 46002 València
                                </span>
                            </li>
                            <li class="flex justify-between p-2">
                                <div class="flex justify-center items-center w-7 h-7  mr-2">
                                    <PhoneIconComponent />
                                </div>
                                <span class="flex justify-start w-full border-b-black-200 border-b-2">
                                    960 32 32 28
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SvgLogoComponent from '../components/svg/SvgLogoComponent.vue'
import PhoneIconComponent from './svg/PhoneIconComponent.vue';
import LocationIconComponentVue from './svg/LocationIconComponent.vue';

export default {
    name: 'Company-Data',
    components: {
        SvgLogoComponent,
        PhoneIconComponent,
        LocationIconComponentVue
    }
}
</script>
