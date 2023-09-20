const xhr = new XMLHttpRequest();

xhr.open('GET' , '/movies.json');

xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        console.log(JSON.parse(this.responseText))
    }
}

xhr.send()

console.log('Hello from global')




function getData (endPoints){

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        
        xhr.open('GET', endPoints);
        
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                //reject if status isnt 200
                if(this.status == 200) {
                    resolve(JSON.parse(this.responseText))
                }  else {
                    reject('Something went wrong')
                }
            }
        }
        setTimeout( ()=> {
            xhr.send() 
        }, Math.floor(Math.random()* 3000) + 1000)  
    }) 
}



/*getData('/movies.json').then((movies) => {
    console.log(movies);
    return getData('/actors.json')
}).then((actors) => {
  console.log(actors);
  return getData('/directors.json')
}).then((direct) => console.log(direct)).catch((error) => console.log(error))*/

const moviesPromise = getData('/movies.json');
const actorsPromise = getData('/actors.json');
const directorsPromise = getData('/directors.json');

//advantange of using .all is you can even add an unrelated promise 
const dummyPromise = new Promise((resolve, reject) => {
    resolve('It accepts additional promises')
})
//they'll be displayed in the specific order they were passed in the .all
Promise.all([moviesPromise, actorsPromise, directorsPromise, dummyPromise])
.then((data) => console.log(data))



//solution 1 - callback hell
/*getData('/movies.json', (data) => {
    console.log(data);
    getData('/actors.json', (data) => {
        console.log(data);
        getData('/directors.json', (data) => {
            console.log(data)
        })
    })
});*/

/*getData('/actors.json');
getData('/directors.json');*/

function me (name, cb) {
    console.log('hello ' + name)
    cb( 'Brocode')
}

function two (fname) {
    console.log('Karuga' + fname)
}

me(' Eliud',  two)/*function two () {
    console.log('Karuga')*/ //(fname) => {console.log('Karuga)}

//promise 

const promise = new Promise((resolve, reject) => {
    //async function/task
    setTimeout(()=>{
        console.log('Async task complete'); 
        resolve()
    }, 2000)
})

promise.then(() => {
    console.log('Promise was consumed')
})

const getUser = new Promise((resolve, reject) => {
    //async function/task
    setTimeout(()=>{
        let error = false

        if (!error) {
          resolve({ name: "Karuga", age: 30})  
        }
        else {
            reject("There is a big big Error")
        }
    }, 2000)
})

//promise chaining
getUser.then((user) => {
    console.log(user)
    return user.name
}).then((name) => {
    console.log(name)
}).catch((fallback) => {
    console.warn(fallback)
})

/*.finally(() => {
    console.log("with finally the code runs regardless of resolve or rejected status")
})*/

let p = new Promise ((resolve, reject) => {
    let a = 1 + 1
    if (a === 2) {
        resolve('Promise sucess')
    } else {
        reject('Failed Promise')
    }
})

p.then((message) => {
    console.log('This is in the then ' + message)
}).catch((message) => {
    console.log("this is the catch " + message)
})

//you can run mutiple promises as one 
const recordVideoOne = new Promise ((resolve, reject) => {
    resolve("Video One was Recorded")
});
const recordVideoTwo = new Promise ((resolve, reject) => {
    resolve("Video two was Recorded")
});
const recordVideoThree = new Promise ((resolve, reject) => {
    resolve("Video three was Recorded")
});


Promise.all([recordVideoOne, 
recordVideoTwo, 
recordVideoThree]).then((messages) => {
    console.log(messages)
})

//as soon as the first one gets executed the message is returned 
Promise.race([recordVideoOne, 
recordVideoTwo, 
recordVideoThree]).then((message) => {
    console.log(message)
})

const typicode = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=6');

    const data = await response.json();

    return data
}

typicode().then((data) => console.log(data));

const getTodo = async () => {
    const response = await fetch('./todo.json');

    if (response.status !== 200) {
        throw new Error('Cannot fetch the data')
    }
    //console.log(response); - gives you the status
    const data = await response.json();
    //console.log(data) gets you the actual data in the api 
    console.log(data);
}

getTodo()