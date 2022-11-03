window.onload=function(){
    var is =document.getElementsByClassName("is");
    var total=document.getElementById("total");
    var btn=document.getElementById("btn");
    console.log(btn);
    
    btn.onclick=function(){
        var sum=0;
        for(var i=0;i<is.length;i++){
            sum+=(is[i].value)*70;
        }
        total.innerText=sum;
    };
};
