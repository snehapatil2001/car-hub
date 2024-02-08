export async function fetchCars() {
	const headers = {
		'X-RapidAPI-Key': '68ca7db2a4msh3f518b58bbb6c51p121669jsn7f6bd0b2f4f7',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

	const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
		method: 'GET',
		headers: headers,
	})

	const result = await response.json();

	return result;
}