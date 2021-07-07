<template lang="pug">
	div
		input(preloader="тескт" @input="$emit('input', $event.target.value)")

</template>

<script>
export default {
	name: 'AppInput',
	model: {
		prop: 'value',
		event: 'input'
	}
};
</script>

<style scoped>
/* ads */
</style>
