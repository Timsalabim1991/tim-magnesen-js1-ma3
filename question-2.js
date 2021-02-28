const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultsContainer = document.querySelector(".results");

async function getApi() {
    // fetch

    const response = await fetch(url);

    const results = await response.json();

    const facts = results.results;

    resultsContainer.innerHTML = "";

    for (let i = 0; i < facts.length; i++) {
		console.log(facts[i].name);
		
		if (i === 8) {
            break;
        }

	    for (let i = 0; i < facts.length; i++) {
			console.log(facts[i].name);

        if (i === 8) {
            break;
        }
	}
		resultsContainer.innerHTML += `<div class="result">${facts[i].name}</div>`;
		
		resultsContainer.innerHTML += `<div class="result">${facts[i].rating}</div>`;
    }
}

getApi();
