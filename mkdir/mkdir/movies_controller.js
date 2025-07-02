import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = [ "input", "display" ]

  connect() {
    // console.log("this is my movie controller");
  }
  
  api(event) {
    event.preventDefault();
    this.displayTarget.innerHTML = "" // it will refresh the list after a new search
    // console.log(this.inputTarget.value);
    // lets construct our url
    const url = `http://www.omdbapi.com/?s=${this.inputTarget.value}&apikey=adf1f2d7`
    // lets make a call to our API
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        // console.log(data)
        data.Search.forEach((movie) => {
          console.log(movie)
          const card = `<li class="col">
                        <img src="${movie.Poster}" alt="${movie.Title}" class="img-fluid">
                        </li>`
          this.displayTarget.insertAdjacentHTML("beforeend", card);
        })
      })
  }
}
