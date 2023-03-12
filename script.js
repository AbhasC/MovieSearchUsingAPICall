function callfunc(e){
    e.preventDefault();
    console.log(e);
    let ip = e.target[0].value;
    console.log(ip);
    let sbel = document.querySelector(".results");
    sbel.innerHTML="";
    let newDiv = document.createElement("div");
    newDiv.className="res";
    let newDiv1 = document.createElement("div");
    newDiv1.className="restext";
    let title = document.createElement("span");
    let gist = document.createElement("span");
    let rated = document.createElement("span");
    let released = document.createElement("span");
    let runtime = document.createElement("span");
    let director = document.createElement("span");
    let language = document.createElement("span");
    let rating = document.createElement("span");
    let bor = document.createElement("span");
    let pic = document.createElement("img");
    newDiv.appendChild(pic);
    newDiv1.appendChild(title);
    newDiv1.appendChild(director);
    newDiv1.appendChild(runtime);
    newDiv1.appendChild(rating);
    newDiv1.appendChild(released);
    newDiv1.appendChild(language);
    newDiv1.appendChild(rated);
    newDiv1.appendChild(bor);
    newDiv1.appendChild(gist);
    sbel.appendChild(newDiv);
    sbel.appendChild(newDiv1);

    // let dnldbtn = document.createElement("a");
    // dnldbtn.setAttribute(href, "#");
    // dnldbtn.setAttribute(download);
    // newDiv.appendChild(dnldbtn);

    fetch(
        // "https://www.omdbapi.com?t="+ip+"&apikey=f318fcf"
          `https://www.omdbapi.com?t=${ip}&apikey=f318fcf`
    ,{
            method: 'GET'
        })
        .then((response) => {return response.json()})
        .then((resp) => {
            console.log(resp);
            bor.innerHTML = "The box office income: "+ resp.BoxOffice;
            pic.src = resp.Poster;
            title.innerHTML = "The movie title: "+ resp.Title;
            rated.innerHTML = "The movie is rated for: "+ resp.Rated;
            gist.innerHTML = "The movie plot: "+ resp.Plot;
            released.innerHTML = "The movie was released on: "+ resp.Released;
            director.innerHTML = "The movie's director: "+ resp.Director;
            language.innerHTML = "The movie's original language: "+ resp.Language;
            rating.innerHTML = "The movie's IMDB rating: "+ resp.imdbRating + "/10";
            runtime.innerHTML = "The movie's runtime: "+ resp.Runtime;
            // let y = 1000;
            // setInterval(() => {
            //     sspan.innerHTML += "<br>Autoscroll";
            //     window.scroll({
            //         top : y
            //     })
            //     y+=100;
            // },500);
    });
}
document.querySelector("form").addEventListener("submit",callfunc);