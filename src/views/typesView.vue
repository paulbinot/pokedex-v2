<template>
    <Suspense>
    <template #default>
        <TypesList></TypesList>
    </template>
    <template #fallback>
        <p>Chargement ...</p>
    </template>
</Suspense>

</template>

<script>
import TypesList from '@/components/TypesList.vue';

export default {
name: "typesView",
components: { TypesList }
}
</script>

<style>

</style>