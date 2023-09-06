/*xhr.open('GET' , '/movies.json');

xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        console.log(JSON.parse(this.responseText))
    }
}

xhr.send()*/






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

console.log('Hello from global')