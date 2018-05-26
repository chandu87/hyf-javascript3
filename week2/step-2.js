const message = document.querySelector(".message");
const ulList = document.querySelector(".ul-list");
const searchKeyword = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-btn");

//Function call to Start the app (for accessdata)
showMovieData();
searchButton.addEventListener("click", function(){
    console.log(searchKeyword.value, "button clicked");
    searchKeyword.value = ""; 
})

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

//Function for handle data
function handleData(moviesData) {
  if (moviesData.length > 0) {
    message.innerHTML = "Total Number of Movies " + moviesData.length;
    console.log("Total Number of Movies " + moviesData.length);

    moviesData.forEach(addTagForMovie); // Adding Tag for each movie based on rating
    console.log(moviesData);
    moviesData.forEach((movie)=>{
        const liItem = document.createElement("li");
        ulList.appendChild(liItem);
        liItem.innerHTML = movie.title;
    });
 
  }
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
