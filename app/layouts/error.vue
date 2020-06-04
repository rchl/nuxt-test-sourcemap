<template>
    <div>
                {{ error.message }}
    </div>
</template>

<script>
export default {
    name: 'NuxtError',
    props: {
        /** @type {import('vue').PropOptions<import('@nuxt/types').NuxtError>} */
        error: {
            type: Object,
            default: null,
        },
    },
};
</script>
