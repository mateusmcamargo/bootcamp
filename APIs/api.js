// get  data from the pokemon API using the fetch method
async function fetchData() {
    const pokemonName     = document.getElementById('inputPokemonName').value;
    const pokemonDisplay  = document.getElementById('divPokemonDisplay');
    pokemonDisplay.innerHTML = "";
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error('Could not fetch resource');
        }

        const data = await response.json();

        const ul = document.createElement('ul');
        pokemonDisplay.appendChild(ul);

        let dataArray = [
            ['ID: ',     data.id], 
            ['NOME: ',   data.name],
            ['ALTURA: ', data.height],
            ['PESO: ',   data.weight],
            ['TIPO: ',   data.types[0].type.name]
        ];
        
        for (let i = 0; i < dataArray.length; i ++) {
            let li = document.createElement('li');
            li.textContent = dataArray[i][0] + dataArray[i][1];
            ul.appendChild(li);
        }
    }

    catch(error) {
        console.error(error);
    }

}