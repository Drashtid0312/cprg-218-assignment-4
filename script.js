function fetchJoke(category)
{
    fetch(`https://v2.jokeapi.dev/joke/${category}?safe-mode`)
    .then(response => response.json())
    .then(data => {

    const jokeTitle = document.getElementById("joketitle");
    const jokeText = document.getElementById("joketext")

    //Joke Text

    if (data.type == "twopart")
    {
        jokeText.innerHTML = `${data.setup} ... ${data.delivery}`;
    }
    else
    {
        jokeText.innerHTML = data.joke;
    }

    //Joke Title

    if (category == "Any")
    {
        jokeTitle.innerHTML = "Joke Of The Day";
    }
    else if (category == "Pun")
    {
        jokeTitle.innerHTML = "A Random Pun";
    }
    else
    {
        jokeTitle.innerHTML = `A Random ${category} Joke`;
    }
    })    
}

