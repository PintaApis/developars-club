import axios from 'axios'
import mockData from '../fixtures/developers.json'

describe('Developars.club Home feed', function () {
	before(() => {
		return axios
			.delete('http://localhost:8080/developers?_cleanup=true')
			.catch((err) => err)
	})

	afterEach(() => {
		return axios
			.delete('http://localhost:8080/developers?_cleanup=true')
			.catch((err) => err)
	})

	beforeEach(() => {
		const developers = mockData.developers

		return developers.map((item) => {
			return axios
				.post('http://localhost:8080/developers', item, {
					headers: { 'Content-Type': 'application/json' },
				})
				.catch((err) => err)
		})
	})

	it('should show the home feed', function () {
		cy.visit('http://localhost:3000')
		cy.contains("h1[data-test='heading']", 'Developars.club')
	})

	it('shows a developer profile list', function () {
		cy.visit('http://localhost:3000')
		cy.get('[data-test="developer-profile-list"]').should('exist')
		cy.get('[data-test="developer-profile"]').should((items) => {
			expect(items).to.have.length(3)
			const names = [...items].map((item) => item.querySelector('h2').innerHTML)
			expect(names).to.deep.eq(['John Doe', 'Jane Doe', 'John Smith'])
		})
	})
})
