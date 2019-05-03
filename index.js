console.log('Before');

getUser(1,(user)=>{
    console.log('User',user);
        getRepositories(user.name,(repo)=>{
        console.log('Repo',repo);
    });
});

function getUser(id,callback){
setTimeout(()=>{
    console.log('Reading value from DB.....');
    callback({id:id,name:'Tushar'});
},2000);
}

function getRepositories(username,callback){
    setTimeout(function(){
        console.log('Fetching repo from github API....');
        callback (['repo1','repo2','repo3']);
    },2000);
}


console.log('After');