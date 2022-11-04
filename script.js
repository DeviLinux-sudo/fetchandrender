function makeThreeApiCalls(){
    fetch("https://jsonplaceholder.typicode.com/posts").then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
    }).catch(error => {
        console.log(error);
    });
    fetch("https://jsonplaceholder.typicode.com/todos").then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
    }).catch(error => {
        console.log(error);
    });
    fetch("https://jsonplaceholder.typicode.com/users").then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
    }).catch(error => {
        console.log(error);
    });
}

makeThreeApiCalls();