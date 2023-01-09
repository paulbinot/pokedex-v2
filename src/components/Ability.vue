<template>
	<div class="ability">
		<Separator></Separator>
			<h3 class="ability_name">/ {{ ability.name }}</h3>
			<p class="ability_description">{{ ability.text }}</p>
	</div>
</template>
<script>
import Separator from './Separator.vue';

export default {
    name: "Ability",
    props: {
        ability: {
            type: Object,
            required: true
        }
    },
    components: { Separator }
}
</script>

<style scoped>
.ability_name {
	font-size: 1.1rem;
	color: yellow;
	padding-bottom: 1rem;
}

.ability_description {
	font-size: 0.85rem;
	color: lightgrey;
}
</style>