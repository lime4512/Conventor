const ApiKey = 'd178825f29659a9ed7a31647'

async function wellData() {
	const response = await fetch(
		`https://v6.exchangerate-api.com/v6/${ApiKey}/latest/USD`
	)
	const data = await response.json()
	document.querySelector('.RUB-T').innerHTML = Math.round(
		data.conversion_rates.RUB
	)
	document.querySelector('.CZK-T').innerHTML = Math.round(
		data.conversion_rates.CZK
	)
	document.querySelector('.EUR-T').innerHTML = Math.round(
		data.conversion_rates.EUR
	)
}

wellData()

const giveInput = document.querySelector('.Give')
const receiveInput = document.querySelector('.Receive')

const giveSelect = document.querySelector('.Give-name')
const receiveSelect = document.querySelector('.Receive-name')

async function fetchData() {
	const response = await fetch(
		`https://v6.exchangerate-api.com/v6/${ApiKey}/latest/${giveSelect.value}`
	)
	const data = await response.json()
	if (receiveSelect.value == 'USD') {
		receiveInput.value = (giveInput.value * data.conversion_rates.USD).toFixed(
			2
		)
	} else if (receiveSelect.value == 'RUB') {
		console.log(data.conversion_rates.RUB)
		receiveInput.value = (giveInput.value * data.conversion_rates.RUB).toFixed(
			2
		)
	} else if (receiveSelect.value == 'EUR') {
		receiveInput.value = (giveInput.value * data.conversion_rates.EUR).toFixed(
			2
		)
	}
}

giveInput.addEventListener('blur', function () {
	fetchData()
})

//Сделать разного цвета курс валют, оптимизировать код, добавить парочку новых валют, добавить кнопку быстрого свапа валют
