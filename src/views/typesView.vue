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
import TypeTag from '@/components/TypeTag.vue';

export default {
name: "typesView",
components: { TypeTag, TypesList }
}
</script>

<style>

</style>