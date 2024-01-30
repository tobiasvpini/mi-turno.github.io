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
                                    <svg class="text-orange-900 mr-1" fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                                        <path class=""
                                            d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                                    </svg>
                                </div>
                                <span class="w-full border-b-black-200 border-b-2">
                                    C/ de Sant Vicent Màrtir, 22, Ciutat Vella, 46002 València
                                </span>
                            </li>
                            <li class="flex justify-between p-2">
                                <div class="flex justify-center items-center w-7 h-7  mr-2">
                                    <svg class="text-orange-900 mr-1" width="20" height="20" viewBox="0 0 24 24" id="meteor-icon-kit__regular-phone" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.3412 23.2014C18.7722 23.8759 14.806 24.2135 7.2899 16.6974C-0.226665 9.18086 0.112213 5.21549 0.784628 3.64636C0.950648 3.25894 1.27078 2.93511 1.52748 2.70569C1.81256 2.45092 2.15544 2.19612 2.50313 1.95866C3.20076 1.48221 3.99576 1.02292 4.57053 0.705277C5.51863 0.181316 6.67596 0.531202 7.21325 1.42668L9.51348 5.2604C9.98566 6.04736 9.86165 7.05467 9.21271 7.70361L8.48051 8.43581C8.85875 9.18827 9.74004 10.6623 11.5325 12.4548C13.325 14.2473 14.7991 15.1286 15.5516 15.5068L16.2838 14.7746C16.9327 14.1257 17.94 14.0017 18.727 14.4739L22.5602 16.7738C23.4561 17.3114 23.8058 18.4693 23.2812 19.4175C22.9632 19.9921 22.5038 20.7866 22.0273 21.4838C21.7898 21.8313 21.5351 22.1739 21.2805 22.4589C21.0512 22.7155 20.7278 23.0353 20.3412 23.2014ZM19.5445 21.367C19.5423 21.3678 19.5411 21.368 19.5411 21.368C19.5398 21.3659 19.6224 21.3129 19.7892 21.1262C19.9631 20.9315 20.1631 20.667 20.376 20.3554C20.7929 19.7454 21.2097 19.0289 21.5147 18.4789L17.698 16.1889L16.9193 16.9675C16.3891 17.4977 15.5427 17.7275 14.7711 17.352C13.8642 16.9108 12.1552 15.9059 10.1183 13.869C8.08142 11.8321 7.07656 10.1232 6.63532 9.2163C6.25988 8.44463 6.48967 7.59822 7.01983 7.06806L7.7985 6.28939L5.50818 2.4722C4.95806 2.77693 4.24125 3.19353 3.6311 3.61024C3.31937 3.82314 3.05482 4.02302 2.8602 4.19695C2.6739 4.36345 2.62103 4.4459 2.61892 4.44462C2.61892 4.44462 2.61905 4.44341 2.61987 4.44138C2.43497 4.88033 1.41297 7.99207 8.70411 15.2832C15.9977 22.5768 19.1086 21.5513 19.5445 21.367Z" fill="rgb(124 45 18)"/></svg>
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

export default {
    name: 'Company-Data',
    components: {
        SvgLogoComponent
    }
}
</script>
