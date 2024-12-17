<script setup>
/**
 * Intended to be a reusable component for results list of different
 * Getty Vocab SPARQL endpoints.
 * 
 * Currently pretty featureless, as time ran short.
 */
import { computed, ref } from 'vue'


const { list } = defineProps({
	list: Array,
	formatter: Function
})

const isEmpty = ref(true)
const colHeaders = computed(() => {
	if (!!list?.length && !isEmpty.value) {
		isEmpty.value = true
		return []
	}
	return list?.head?.vars
})

/**
 * Filtered results simply return the `bindings` array from the SPARQL results.
 * However, this is where pagination could be implemented with the help of the 
 * unused `core/composables/pagination` composable.
 * 
 * The Element Plus table complement is feature rich, but proved to be overly complex
 * for implementation. Many of their components are powerful, but the implementation makes 
 * it tricky to control.
 */
const filteredList = computed(() => {
	
	if (list?.results?.bindings) {
		return list.results.bindings
		// Need to `import {state} from 'composables/pagination'` to implement
		// const startIndex = (state.currentPage * state.itemsPerPage) + state.currentPage
		// const endIndex = startIndex + state.itemsPerPage + 1
		// return list.results.bindings.slice(startIndex, endIndex)
	}

	return []
})

/**
 * Return the value of 
 * @param row 
 * @param col 
 */
function formatter(row, col){
	return row[col.label]?.value || ''
}

</script>

<template>
	<el-table :data="filteredList">
		<el-table-column 
			v-for="(col, index) in colHeaders"
			:key="index"
			:prop="col"
			:label="col"
			:formatter="formatter"
		></el-table-column>
	</el-table>
</template>