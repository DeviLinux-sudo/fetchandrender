async function makeThreeApiCalls(){
   const [postResponse, userResponse ]  = await Promise.all([
    fetch('https://jsonplaceholder.typicode.com/posts'),
    fetch('https://jsonplaceholder.typicode.com/users')
   ]);

   if (!postResponse.ok && userResponse.ok) {
    const message = `An error has occured: ${postResponse.status || userResponse.status}`;
    throw new Error(message);
  }
   
   const post = await postResponse.json();
   const users = await userResponse.json();
   return [post,users];
}

makeThreeApiCalls().then(([post,users]) => {
    console.log(post);
    console.log(users);
}).catch(error => {
error.message;
});