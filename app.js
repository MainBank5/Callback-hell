/*xhr.open('GET' , '/movies.json');

xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        console.log(JSON.parse(this.responseText))
    }
}

xhr.send()*/

console.log('Hello from global')




function getData (endPoints, cb){

    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', endPoints);
    
    xhr.onreadystatechange = function () {
    if (this.readyState == 4 &&this.status == 200){
        //console.log(JSON.parse(this.responseText))
        cb(JSON.parse(this.responseText))
    }
}

setTimeout( ()=> {
   xhr.send() 
}, Math.floor(Math.random()* 3000) + 1000)


}

getData('/movies.json', (data) => {
    console.log(data);
    getData('/actors.json', (data) => {
        console.log(data);
        getData('/directors.json', (data) => {
            console.log(data)
        })
    })
});

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

getUser.then((user) => {
    console.log(user)
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


/*promise.all([recordVideoOne, 
recordVideoTwo, 
recordVideoThree]).then((messages) => {
    console.log(messages)
})

//as soon as the first one gets executed the message is returned 
promise.race([recordVideoOne, 
recordVideoTwo, 
recordVideoThree]).then((message) => {
    console.log(message)
})*/

