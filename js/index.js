window.onload=function(){
    
    var is =document.getElementsByClassName("is");
    var total=document.getElementById("total");
    var btn=document.getElementById("btn");
    var rec=document.getElementById("rec");
    var as=document.getElementsByClassName("as");
    var main=document.getElementById("main");
    var title=document.getElementById("title");
    var currentTime;
    console.log();
    for(var i=0;i<is.length;i++){
        is[i].onclick=function(){
            calSum();
        }
    }
    setInterval(function(){
        currentTime= new Date().toString().split(" ")[4];
        calSum();
        ct.innerText=currentTime;
        if(currentTime.split(":")[0]>=10 && currentTime.split(":")[0]<=13){
            btn.disabled=true;
            btn.innerText="非訂餐期間";
        }
        else{
            btn.disabled=false;
            btn.innerText="送出";
        }
    }, 1000);
    
    btn.onclick=function(){
        if(document.getElementById("name").value==""){
            alert("名字不可為空");
        }
        else if(document.getElementById("sel").value.split("T")[1].split(":")[0]<11||document.getElementById("sel").value.split("T")[1].split(":")[0]>13){
            alert("取餐時間須介於11:00~13:00");
        }
        else{
            var objArr=[
                document.getElementById("name").value,
                document.getElementById("num").value,
                is[0].value,
                is[2].value,
                is[1].value,
                is[3].value,
                total.innerText,
                document.getElementById("sel").value.split("T")[1],
                document.getElementById("sel").value.split("T")[0],
            ]
            
            var flag=confirm("是否確認送出？ 葷食："+objArr[2]+" 葷食(加蛋)："+objArr[3]+" 素食："+objArr[4]+" 素食（加蛋）："+objArr[5]+" 取餐時間："+objArr[7]);
            if(flag){
                btn.disabled=true;
                btn.innerText="不可再次提交";
                
                for(var i=0;i<as.length;i++){
                    as[i].innerHTML=objArr[i];
                }
                rec.style.display="block";
                main.style.display="none";
                title.innerText="訂單明細";
             }
        }
        
    };


    function calSum(){
                var sum=0;
                for(var j=0;j<is.length;j++){
                    if(j<=1){
                        sum+=(is[j].value)*70;
                    }
                    else{
                        sum+=(is[j].value)*80;
                    }
                    console.log(sum);
                    total.innerText=sum;
                }
            }
        };
