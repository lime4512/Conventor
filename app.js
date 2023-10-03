const ApiKey = 'd178825f29659a9ed7a31647'

const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
const text = document.querySelector('.text')

async function fetchData() {
	const response = await fetch(
		`https://v6.exchangerate-api.com/v6/${ApiKey}/latest/RUB`
	)
	const data = await response.json()
	text.textContent = `${(
		Number(input.value) * data.conversion_rates.USD
	).toFixed(2)} долларов`
}

btn.addEventListener('click', function () {
	fetchData()
})
