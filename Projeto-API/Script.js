const url = " http://apis.io/api/apis";

getApi()

function getApi(){
    var arrayFinal = []
    $(document).ready(function(){
        $("button").click(function(){
            jQuery.get(url, function(data, status){
                array = data.data
                arrayFinal = array
                console.log(array)
                for(var i = 0; i < array.length; i++){
                    
                    $("#main").append("<tr> <th>" + array[i].name + "</th> <th>" + array[i].createdAt + "</th> <th> "+ array[i].baseURL + "</th> </tr>");
                    //$("#main").append("<img src='"+ array[i].image +"'/>")     
    
                }
        
            });
        });
    });
    return arrayFinal
}




