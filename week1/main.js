// ------------------- Step : 1 ------------------------------
let numbers = [1, 2, 3, 4];
// let newNumbers = [];
// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 2 !== 0) {
//         newNumbers[i] = numbers[i] * 2;
//     }
// }
let newNumbers = numbers
  .filter(number => number % 2 !== 0)
  .map(number => number * 2);
console.log("The doubled numbers are", newNumbers); // [2, 6]

// -------------------Step : 2 ---------------------------------
const message = document.querySelector(".message");

//Function call to Start the app (for accessdata)
showMovieData();

// function for getting data with given URL
function getAjaxData(url, successCallback, failureCallback) {
  // Create new ajax call with the js function called XMLHttpRequest
  const request = new XMLHttpRequest();
  request.addEventListener("load", function() {
    // This in here is our callback function
    // Check our server responsecode, 200 means ok, success: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
    if (this.status === 200) {
      successCallback(JSON.parse(request.responseText));
    } else {
      failureCallback("Something is probably wrong with the url");
    }
  });
  request.addEventListener("error", function() {
    failureCallback("Server error, Failed to load");
  });
  // initializes a request with an http method
  request.open("GET", url);
  // Sends the request
  request.send();
}

// Function for retrieving data
function showMovieData() {
  getAjaxData(
    "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json",
    handleData,
    displayError
  );
}

//Function for handle data
function handleData(moviesData) {
  if (moviesData.length > 0) {
    message.innerHTML = "Total Number of Movies " + moviesData.length;
    console.log("Total Number of Movies " + moviesData.length);

    moviesData.map(addTagForMovie); // Adding Tag for each movie based on rating

    console.log("Average rating is : " + calculateAvgRating()); // Average Rating
    console.log("Good Movies : " + totalMoviesByTag("Good")); // Good movies
    console.log("Average Movies : " + totalMoviesByTag("Average")); //Average movies
    console.log("Bad Movies : " + totalMoviesByTag("Bad")); // Bad movies
    console.log(
      "Movies containing given keywords : " + moviesWithKeywords(moviesData)
    );
    console.log(
      "Movies Released between 1980 and 1989 are : " +
        NumberOfMoviesWithYears(1980, 1989)
    );

    function NumberOfMoviesWithYears(startYear, endYear) {
      //Function for calculating Number of movies realeased between 2 years
      return moviesData.filter(
        movie => movie.year >= startYear && movie.year <= endYear
      ).length;
    }

    function calculateAvgRating() {
      //Function for Calculating Average rating of movies
      let ratingArray = [];
      moviesData.forEach(movie => ratingArray.push(movie.rating));
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      return Math.round(ratingArray.reduce(reducer) / ratingArray.length);
    }

    function totalMoviesByTag(tagName) {
      //Function for finding total movies by Tag name
      return moviesData.filter(movie => movie.tag === tagName).length;
    }
  } else {
    message.innerHTML = "Movie data is empty";
  }
}

//Function for adding Tags for each movie based on their Rating
function addTagForMovie(movie) {
  let tagName = "";
  if (movie.rating >= 7) {
    tagName = "Good";
  } else if (movie.rating >= 4 && movie.rating < 7) {
    tagName = "Average";
  } else {
    tagName = "Bad";
  }
  movie.tag = tagName;
  return movie;
}
//Function for finding whether the movie title contains given keywords
function moviesWithKeywords(moviesData) {
  let moviesIncludeKeywords = 0;
  const arrayKeywords = ["The", "dog", "who", "is", "not", "a", "man"];

  moviesData.forEach(movie => {
    const movieSplitted = movie.title.split(" ");
    let result = movieSplitted.some(movieString =>
      arrayKeywords.includes(movieString)
    );
    if (result) {
      moviesIncludeKeywords++;
    }
  });
  return moviesIncludeKeywords;
}

//Fucntion for displaying Error
function displayError(error) {
  message.innerHTML = error;
}
