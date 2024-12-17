/**
 * Composable for handlind pagination
 */

import { reactive } from "vue"

const state = reactive({
	itemsPerPage: 50,
	currentPage: 0,
	totalPages: 0
})

function setPage(page) {
	state.currentPage = page - 1
}

function prevPage(){
	if (state.currentPage > 0) {
		setPage(state.currentPage - 1)
	}
}

function nextPage() {
	if (state.currentPage < state.totalPages) {
		setPage(state.currentPage + 1)
	}
}
 
export { state, prevPage, nextPage, setPage }