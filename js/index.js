window.onload=function(){
    var is =document.getElementsByClassName("is");
    var total=document.getElementById("total");
    var btn=document.getElementById("btn");
    var rec=document.getElementById("rec");
    var as=document.getElementsByClassName("as");
    var main=document.getElementById("main");
    var title=document.getElementById("title");
    
    for(var i=0;i<is.length;i++){
        is[i].onclick=function(){
            var sum=0;
            for(var j=0;j<is.length;j++){
                sum+=(is[j].value)*70;
                total.innerText=sum;
            }
        }
    }
    btn.onclick=function(){
        
        
        var flag=confirm("是否確認送出？");
        if(flag){
            
            btn.disabled=true;
            btn.innerText="不可再次提交";
            var objArr=[
                document.getElementById("name").value,
                document.getElementById("num").value,
                is[0].value,
                is[1].value,
                total.innerText,
                document.getElementById("sel").value.split("T")[1],
                document.getElementById("sel").value.split("T")[0],
            ]
            
            for(var i=0;i<as.length;i++){
                as[i].innerHTML=objArr[i];
            }
            rec.style.display="block";
            main.style.display="none";
            title.innerText="訂單明細";
         }

        
    };


    
};
