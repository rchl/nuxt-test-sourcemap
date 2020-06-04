<template>
    <div>
        <h1 class="text-center">
            <!-- This page should be crashing {{ crash.foo }} -->
            xxx
        </h1>
    </div>
</template>

<script>
export default {
    asyncData() {
        crashme();
    },
};
</script>
