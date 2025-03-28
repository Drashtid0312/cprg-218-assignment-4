function fetchJoke(category)
{
    fetch(`https://v2.jokeapi.dev/joke/${category}?safe-mode`)
    .then(response => response.json())
    .then(data => {

    const jokeTitle = document.getElementById("joketitle");
    const jokeText = document.getElementById("joketext")

    if (data.type == "twopart")
    {
        jokeText.innerHTML = `${data.setup} ... ${data.delivery}`;
    }
    else
    {
        jokeText.innerHTML = data.joke;
    }

    
    })    
}

