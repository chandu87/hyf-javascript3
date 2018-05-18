
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
const ulList = document.querySelector(".ul-list");
const message = document.querySelector(".message");

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
    displayData,
    displayError
  );
}

function displayData(data) {
  if (data.length > 0) {
    message.innerHTML = "Total Number of Movies " + data.length;
    let goodMovie, avgMovie, badMovie;
    goodMovie = 0;
    avgMovie = 0;
    badMovie = 0; 
    data.map((element)=>{
        const ratingInt = Math.round(element.rating);
        if(ratingInt >= 7){
            element.tag = "Good";
            goodMovie++;
        }else if(ratingInt >= 4 && ratingInt <=6){
            element.tag = "Average";
            avgMovie++;
        }else{
            element.tag = "Bad";
            badMovie++;
        }
        return element;
    });
    let ratingArray = [];
    data.forEach(element => ratingArray.push(element.rating));
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    console.log("Average rating is : "+ Math.round(ratingArray.reduce(reducer) / ratingArray.length));  
    console.log("Good Movies : "+goodMovie);
    console.log("Average Movies : "+avgMovie);
    console.log("Bad Movies : "+badMovie);
//    console.log(data.filter(movie=>movie.tag === "Good").length);
    let moviesIncludeKeywords = 0;
    
     data.forEach(movie=>{  
      const arrayKeywords = ["The", "dog", "who", "is", "not", "a", "man"];
      let movieSplitted = movie.title.split(" ");
      let result = movieSplitted.some(movieWord => arrayKeywords.includes(movieWord));
      if(result){
        moviesIncludeKeywords++;
      }
    });
    console.log(moviesIncludeKeywords);

  }else {
    message.innerHTML = "Movie data is empty";
  }
}
function displayError(error) {
  message.innerHTML = error;
}
