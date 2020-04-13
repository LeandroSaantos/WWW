const url = "https://covid19-brazil-api.now.sh/api/report/v1";

window.onlaod = function(){
    getUsers();
}

function getUsers(){
    let request = new XMLHttpRequest();
    request.open('GET', Estado);
    request.responseType = 'json';
    request.send();

    request.onload = function(){
        let.users = request.response;

        showUsers(users);
    }

}

function showUsers(users){
    for(let i=0; i< users.length; i++){

        //console.log(users[i]);

        let user = {
            Estado: user[i].Estado,
            Casos: user[i].Casos,
            Mortes: user[i].Mortes,
            
        }

        //console.log(user);
        createTableElement(user);
    }
}

function createTableElement(user){
    $("#user_table").append("<tr>");
        let object_keys = Object.keys(user);
        
        console.log(object_keys);


    $("#user_table").append("</tr>");
}