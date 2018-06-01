//Step 1
var addSix = createBase(6);

function createBase(baseNum) {
  function add(number) {
    return number + baseNum;
  }
  return add;
}
console.log(addSix(10));
console.log(addSix(21));

//Step 2 -------------------------------------------------------------
function getAjaxData(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("load", function() {
      if (this.status === 200) {
        resolve(JSON.parse(request.responseText));
      } else {
        reject("Something is probably wrong with the url");
      }
    });
    request.addEventListener("error", function() {
      reject("error loading request");
    });
    request.open("GET", url);
    request.send();
  });
}

const usersURL = "https://jsonplaceholder.typicode.com/users";
getAjaxData(usersURL)
  .then(data => {
    let users = data;
    for (var i = 0; i < users.length; i++) {
      // load the todos for this user
      const todosURL = `https://jsonplaceholder.typicode.com/users/${users[i].id}/todos`;

      // why is this line needed below?
      let index = i;
      console.log(index, i);
      
      getAjaxData(todosURL)
        .then(data => {
          console.log(index, i);
          users[index].todos = data;
        })
        .catch(err => {
          console.log("Error loading todos for user ", i, " :", err);
        });

      // if this is the last user, console.log all data
      if (index == users.length - 1) {
        console.log(users);
      }
    }
  })
  .catch(error => {
    console.log(error);
  });
