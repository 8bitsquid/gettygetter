<script setup>
import { ref } from 'vue'

defineEmits(['RunSearch'])

const searchString = ref('')
</script>

<template>
	<el-input 
		placeholder="Search the Getty AAT" 
		v-model="searchString" 
		@keydown.enter="$emit('RunSearch', searchString)"
		clearable
		class="search-input"
		data-test="search_input"
	>
		 <!-- prefix search box with search icon -->
		<template #prefix>
			<el-icon :size="30"><i-ep-search /></el-icon>
		</template>
		<!-- append "Search" button to input box -->
		<template #append>
			<el-button 
				type="primary" 
				@click="$emit('RunSearch', searchString)" 
				data-test="search_button"
				class="search-button"
			>
				Search
			</el-button>
		</template>
	</el-input>
</template>

<style lang="scss">
.search-input {
	input {
		height: 3rem;
		font-size: 1.5rem;
	}
}


</style>

