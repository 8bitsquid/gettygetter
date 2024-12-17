<script setup>

defineProps({
	searchString: String,
	placeholder: {
		type: String,
		default: "Query Getty Vocabularies LOD"
	}
})
</script>

<template>
	<el-input :placeholder="placeholder" :rows="5" type="textarea">
		 <!-- prefix search box with search icon -->
		<template #prefix>
			<el-icon><i-ep-search /></el-icon>
		</template>

		<!-- append "Search" button to input box -->
		<template #append>
			<el-button type="primary">Search</el-button>
		</template>
	</el-input>
</template>