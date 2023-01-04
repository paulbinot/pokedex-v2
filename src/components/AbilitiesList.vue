<template>
    <div>
        <Ability v-for="ability of abilities" :key="ability.slot" :ability="ability.ability"/>
    </div>
</template>
<script>
import Ability from '@/components/Ability.vue';

export default {
    name: "AbilitiesList",
    components: { Ability },
    props: {
        abilities: {
            type: Array,
            required: true
        }
    }
}
</script>