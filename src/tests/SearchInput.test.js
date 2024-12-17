import { test, expect } from "vitest"
import { mount } from "@vue/test-utils"
import SearchInput from "../search/components/SearchInput.vue"
import { MockSearchTerms } from '../mocks/data/search'

test(`should have an input box to enter search terms`, async () => {
	const wrapper = mount(SearchInput)

	const inputBox = wrapper.get('[data-test="search_input"]')
	await inputBox.setValue(MockSearchTerms)
	
	expect(inputBox.element.value).toBe(MockSearchTerms)
})

test(`emit event and search terms when mouse clicked on search button`, async () => {
	const wrapper = mount(SearchInput)

	await wrapper.get('[data-test="search_input"]').setValue(MockSearchTerms)
	await wrapper.get('[data-test="search_button"]').trigger('click')
	
	expect(wrapper.emitted()).toHaveProperty('RunSearch')
	expect(wrapper.emitted().RunSearch[0][0]).toBe(MockSearchTerms)
})

test(`emit event and search terms when pressing enter key`, async () => {
	const wrapper = mount(SearchInput)

	const inputBox = wrapper.get('[data-test="search_input"]')
	await inputBox.setValue(MockSearchTerms)
	await inputBox.trigger('focus')
	await inputBox.trigger('keydown', { key: 'enter' })

	expect(wrapper.emitted()).toHaveProperty('RunSearch')
	expect(wrapper.emitted('RunSearch')[0][0]).toBe(MockSearchTerms)
})