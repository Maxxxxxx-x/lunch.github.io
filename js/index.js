window.onload=function(){
    var is =document.getElementsByClassName("is");
    var total=document.getElementById("total");
    var btn=document.getElementById("btn");

    
    btn.onclick=function(){
        var sum=0;
        for(var i=0;i<is.length;i++){
            sum+=(is[i].value)*70;
        }
        total.innerText=sum;

        var obj={
            "name":document.getElementById("name").value,
            "number":document.getElementById("num").value,
            "time":document.getElementById("sel").value,
            "meal":is[0].value,
            "fruit":is[1].value,
            "total":total.innerText,
        };
    };

    
};
