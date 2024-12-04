const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_image');

const form = document.querySelector('.form');
const input = document.querySelector('.input_search');
const btnVolt = document.querySelector('.btn-volt');
const btnProx = document.querySelector('.btn-prox');
const btnShiny = document.querySelector('.btn-shiny');
const btnGeracao = document.querySelector('.btn-geracao')


let numPoke = 1;
let imagem = "";
let shiny = false;
let geracao = "8";

// Busca pelos pokemons ----------------------------------------
const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status === 200) {
        const data = await APIResponse.json();
        return data;
    }
}

// Renderiza os pokemons ---------------------------------------
const renderPokemon = async (pokemon) => {
    pokemonName.innerHTML = "Buscando..."
    pokemonNumber.innerHTML = "???"

    const data = await fetchPokemon(pokemon);

    const puxaSprite = () => {
        pokemonImage.style.display = 'block';
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
    }

    const missingNo = () => {
        pokemonNumber.innerHTML = "???"
        pokemonName.innerHTML = "MissingNO."
        pokemonImage.src = "../images/missigno.png"
    }

    switch (geracao) {
        // Gen 8 ---------------------------------------------
        case "8":
            if (data.id <= 905 && shiny === true) {
                puxaSprite();

                pokemonImage.src = data['sprites']['other']['showdown']['front_shiny'];

                input.value = "";

                imagem = data['sprites']['other']['showdown']['front_default'];

                numPoke = data.id;

            } else if (data.id <= 905 && shiny === false) {
                puxaSprite();

                pokemonImage.src = data['sprites']['other']['showdown']['front_default'];

                input.value = "";

                imagem = data['sprites']['other']['showdown']['front_default'];

                numPoke = data.id;

            } else {
                missingNo();
            }
            break;
        // Gen 7 ---------------------------------------------
        case "7":
            if (data.id <= 807 && shiny === true) {
                puxaSprite();

                pokemonImage.src = data['sprites']['versions']['generation-vii']['ultra-sun-ultra-moon']['front_shiny'];

                input.value = "";

                imagem = data['sprites']['versions']['generation-vii']['ultra-sun-ultra-moon']['front_default'];

                numPoke = data.id;
            } else if (data.id <= 807 && shiny === false) {
                puxaSprite();

                pokemonImage.src = data['sprites']['versions']['generation-vii']['ultra-sun-ultra-moon']['front_default'];

                input.value = "";

                imagem = data['sprites']['versions']['generation-vii']['ultra-sun-ultra-moon']['front_default'];

                numPoke = data.id;
            } else {
                missingNo();
            }
            break;
        // Gen 6 ------------------------------------------------
        case "6":
            if (data.id <= 721 && shiny === true) {
                puxaSprite();
                pokemonImage.src = data['sprites']['versions']['generation-vi']['x-y']['front_shiny'];

                input.value = "";

                imagem = data['sprites']['versions']['generation-vi']['x-y']['front_default'];

                numPoke = data.id;
            } else if (data.id <= 721 && shiny === false) {
                puxaSprite();
                pokemonImage.src = data['sprites']['versions']['generation-vi']['x-y']['front_default'];

                input.value = "";

                imagem = data['sprites']['versions']['generation-vi']['x-y']['front_default'];

                numPoke = data.id;
            } else {
                missingNo();
            }
            break;
        // Gen 5 ---------------------------------------
        case "5":
            if (data.id <= 649 && shiny === true) {
                puxaSprite();

                pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_shiny'];

                input.value = "";

                imagem = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];

                numPoke = data.id;
            } else if (data.id <= 649 && shiny === false) {
                puxaSprite();
                pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];

                input.value = "";

                imagem = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];

                numPoke = data.id;
            } else {
                missingNo();
            }
            break
        // Gen 4 -------------------------------------
        case "4":
            if (data.id <= 493 && shiny === true) {
                puxaSprite();
                pokemonImage.src = data['sprites']['versions']['generation-iv']['platinum']['front_shiny'];

                input.value = "";

                imagem = data['sprites']['versions']['generation-iv']['platinum']['front_default'];

                numPoke = data.id;
            } else if (data.id <= 493 && shiny === false) {
                puxaSprite();
                pokemonImage.src = data['sprites']['versions']['generation-iv']['platinum']['front_default'];

                input.value = "";

                imagem = data['sprites']['versions']['generation-iv']['platinum']['front_default'];

                numPoke = data.id;
            } else {
                missingNo();
            }
            break;
        // Gen 3 --------------------------------------------
        case "3":
            if (data.id <= 385 && shiny === true) {
                puxaSprite();
                pokemonImage.src = data['sprites']['versions']['generation-iii']['emerald']['front_shiny'];

                input.value = "";

                imagem = data['sprites']['versions']['generation-iii']['emerald']['front_default'];

                numPoke = data.id;
            } else if (data.id <= 385 && shiny === false) {
                puxaSprite();
                pokemonImage.src = data['sprites']['versions']['generation-iii']['emerald']['front_default'];

                input.value = "";

                imagem = data['sprites']['versions']['generation-iii']['emerald']['front_default'];

                numPoke = data.id;
            } else {
                missingNo();
            }
            break;
        // Gen 2 ---------------------------------------------
        case "2":
            if (data.id <= 251 && shiny === true) {
                puxaSprite();
                pokemonImage.src = data['sprites']['versions']['generation-ii']['crystal']['front_shiny'];

                input.value = "";

                imagem = data['sprites']['versions']['generation-ii']['crystal']['front_default'];

                numPoke = data.id;
            } else if (data.id <= 251 && shiny === false) {
                puxaSprite();
                pokemonImage.src = data['sprites']['versions']['generation-ii']['crystal']['front_default'];

                input.value = "";

                imagem = data['sprites']['versions']['generation-ii']['crystal']['front_default'];

                numPoke = data.id;
            } else {
                missingNo();
            }
            break;
        // Gen 1 ---------------------------------------------
        case "1":
            if (data.id < 152) {
                puxaSprite();
                pokemonImage.src = data['sprites']['versions']['generation-i']['red-blue']['front_default'];

                input.value = "";

                imagem = data['sprites']['versions']['generation-i']['red-blue']['front_default'];

                numPoke = data.id;
            } else {
                missingNo();
            }
            break
    }


}

// Form --------------------------------------------------
form.addEventListener('submit', (event) => {
    event.preventDefault();

    renderPokemon(input.value.toLowerCase());
});

// Botão voltar -------------------------------------------------
btnVolt.addEventListener('click', async () => {
    if (numPoke > 1) {
        numPoke -= 1;
        renderPokemon(numPoke);
    }
});

// Botão próximo ------------------------------------------------
btnProx.addEventListener('click', async () => {


    const proxPoke = () => {
        numPoke += 1;
        renderPokemon(numPoke);
    }

    switch (geracao) {

        case "8":
            if (numPoke < 905) {
                proxPoke();
            }
            break;
        case "7":
            if (numPoke < 807) {
                proxPoke();
            }
            break;
        case "6":
            if (numPoke < 721) {
                proxPoke();
            }
            break;
        case "5":
            if (numPoke < 649) {
                proxPoke();
            }
            break;
        case "4":
            if (numPoke < 493) {
                proxPoke();
            }
            break;
        case "3":
            if (numPoke < 385) {
                proxPoke();
            }
            break;
        case "2":
            if (numPoke < 251) {
                proxPoke();
            }
            break;
        case "1":
            if (numPoke < 151) {
                proxPoke();
            }
            break;
    }
});

// Botão dos Shinys ----------------------------------------
btnShiny.addEventListener('click', async (pokemon) => {

    const mudaCorBotaoVermelho = () => {
        pokemonImage.src = imagem
        shiny = false;
        btnShiny.style.color = "red";
        return shiny;
    }

    const mudaCorBotaoVerde = () => {
        shiny = true;
        btnShiny.style.color = "green";
        return shiny;
    }

    switch (geracao) {
        case "8":
            if (pokemonImage.src !== imagem) {
                mudaCorBotaoVermelho();
            }
            else {
                const imgShiny = await fetchPokemon(numPoke);
                if (imgShiny) {
                    pokemonImage.src = imgShiny['sprites']['other']['showdown']['front_shiny'];
                    mudaCorBotaoVerde();
                }
            }
            break;
        case "7":
            if (pokemonImage.src !== imagem) {
                mudaCorBotaoVermelho();
            }
            else {
                const imgShiny = await fetchPokemon(numPoke);
                if (imgShiny) {
                    pokemonImage.src = imgShiny['sprites']['versions']['generation-vii']['ultra-sun-ultra-moon']['front_shiny'];
                    mudaCorBotaoVerde();
                }
            }
            break;
        case "6":
            if (pokemonImage.src !== imagem) {
                mudaCorBotaoVermelho();
            }
            else {
                const imgShiny = await fetchPokemon(numPoke);
                if (imgShiny) {
                    pokemonImage.src = imgShiny['sprites']['versions']['generation-vi']['x-y']['front_shiny'];
                    mudaCorBotaoVerde();
                }
            }
            break;
        case "5":
            if (pokemonImage.src !== imagem) {
                mudaCorBotaoVermelho();
            }
            else {
                const imgShiny = await fetchPokemon(numPoke);
                if (imgShiny) {
                    pokemonImage.src = imgShiny['sprites']['versions']['generation-v']['black-white']['animated']['front_shiny'];
                    mudaCorBotaoVerde();
                }
            }
            break
        case "4":
            if (pokemonImage.src !== imagem) {
                mudaCorBotaoVermelho();
            }
            else {
                const imgShiny = await fetchPokemon(numPoke);
                if (imgShiny) {
                    pokemonImage.src = imgShiny['sprites']['versions']['generation-iv']['platinum']['front_shiny'];
                    mudaCorBotaoVerde();
                }
            }
            break
        case "3":
            if (pokemonImage.src !== imagem) {
                mudaCorBotaoVermelho();
            }
            else {
                const imgShiny = await fetchPokemon(numPoke);
                if (imgShiny) {
                    pokemonImage.src = imgShiny['sprites']['versions']['generation-iii']['emerald']['front_shiny'];
                    mudaCorBotaoVerde();
                }
            }
            break
        case "2":
            if (pokemonImage.src !== imagem) {
                mudaCorBotaoVermelho();
            }
            else {
                const imgShiny = await fetchPokemon(numPoke);
                if (imgShiny) {
                    pokemonImage.src = imgShiny['sprites']['versions']['generation-ii']['crystal']['front_shiny'];
                    mudaCorBotaoVerde();
                }
            }
            break;
    }
})

// Mudar Geração --------------------------------------------
btnGeracao.addEventListener('click', () => {
    const selectbox = document.getElementById('geracao');

    geracao = selectbox.value;
    renderPokemon(numPoke);

    return geracao;
})

renderPokemon(numPoke);