async function makeThreeApiCalls(){
     const todoitem = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
   const response = await Promise.all(
    todoitem.map(async item => {
        const r = await fetch(`https://jsonplaceholder.typicode.com/todos/${item}`)
        .then(res => res.json())
        .then(json => console.log(json))
    
    }));}
    
makeThreeApiCalls();
