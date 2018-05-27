const message = document.querySelector(".message");
const ulList = document.querySelector(".ul-list");
const searchKeyword = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-btn");
const radioBtnAll = document.querySelector("#radio-all");
const radioBtnExcellent = document.querySelector("#radio-excellent");
const radioBtnVgood = document.querySelector("#radio-vgood");
const radioBtnGood = document.querySelector("#radio-good");

//Function call to Start the app (for accessdata)
showMovieData();

// Function for retrieving data
function showMovieData() {
    getAjaxData(
      "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
    )
      .then(data => {
        handleData(data);
      })
      .catch(error => {
        message.innerHTML = error;
      });
  }
// function for getting data with given URL
function getAjaxData(url) {
  return new Promise((resolve, reject) => {
    // Create new ajax call with the js function called XMLHttpRequest
    const request = new XMLHttpRequest();
    request.addEventListener("load", function() {
      // This in here is our callback function
      // Check our server responsecode, 200 means ok, success: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
      if (this.status === 200) {
        resolve(JSON.parse(request.responseText));
      } else {
        reject("Something is probably wrong with the url");
      }
    });
    request.addEventListener("error", function() {
      reject("Server error, Failed to load");
    });
    // initializes a request with an http method
    request.open("GET", url);
    // Sends the request
    request.send();
  });
}

//Function for handle data and Listen for button click to filter movies
function handleData(moviesData) {
  if (moviesData.length > 0) {
    message.innerHTML = "Total Number of Movies " + moviesData.length;
    moviesData.forEach(addTagForMovie); // Adding Tag for each movie based on rating
    let avgRating;
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.rating;

    searchButton.addEventListener("click", function() {
      filterMovies(moviesData)
      .then(movies => {
        avgRating = Math.round(
          // Calculating average rating
          movies.reduce(reducer, 0) / movies.length
        );
        message.innerHTML =
          "Average Rating of total " +
          movies.length +
          " Filtered movies is " +
          avgRating;

        movies.forEach(movie => {
          const liItem = document.createElement("li");
          ulList.appendChild(liItem);
          liItem.innerHTML = movie.title;
        });
      })
      .catch((error)=>{
        message.innerHTML = error;
      });
    });
  }
}
//Function to filter movies then resolve the success and reject the failure case
//Parameters moviesData, [] - array
//return Promise
function filterMovies(moviesData) {
  return new Promise((resolve, reject) => {
    let searchFor, searchMovieTag;

    ulList.innerHTML = "";
    searchFor = searchKeyword.value;
    searchKeyword.value = "";
    searchMovieTag = "";
    if (radioBtnExcellent.checked) {
      searchMovieTag = "Excellent";
    } else if (radioBtnVgood.checked) {
      searchMovieTag = "Very Good";
    } else if (radioBtnGood.checked) {
      searchMovieTag = "Good";
    }
    const filteredMovies = moviesData.filter(movie => {
      if (searchMovieTag === "") {
        return movie.title.includes(searchFor);
      } else {
        return movie.title.includes(searchFor) && movie.tag === searchMovieTag;
      }
    });

    if (filteredMovies.length > 0) {
      resolve(filteredMovies);
    } else {
      reject("No Results Found, Are you looking for something else");
    }
  });
}
//Function for adding Tags for each movie based on their Rating
function addTagForMovie(movie) {
  let tagName = "";
  if (movie.rating >= 8.5) {
    tagName = "Excellent";
  } else if (movie.rating >= 8) {
    tagName = "Very Good";
  } else {
    tagName = "Good";
  }
  movie.tag = tagName;
  return movie;
}
