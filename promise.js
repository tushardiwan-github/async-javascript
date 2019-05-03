const promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject(new Error('message'));
    },2000)
    
});


promise
    .then(result => console.log('Result',result))
    .catch(err => console.log('Error',err.message));