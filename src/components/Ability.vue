<template>
	<div class="ability">
		<RouterLink :to="ability.url">
			{{ ability.name }}
		</RouterLink>
	</div>
</template>
<script>
export default {
	name: "Ability",
	props: {
		ability: {
			type: Object,
			required: true
		}
	},
}
</script>