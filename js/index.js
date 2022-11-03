window.onload=function(){

    let sendButton=document.getElementById("button");

    function send(){
        let name = document.getElementById("name").value;
        let phone =document.getElementById("phone").value;
        let demand = document.getElementById("demand").value;
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbykPZ0DwOPeO_SiSrihCiaXt7niQbMhdF8tK89ExPCF2En82JcKVXlhx5ye4TaVEGc/exec",
            data:{
                "name":name,
                "phone":phone,
                "demand":demand
            },
            success:function(response){
                if(response=="成功"){
                    alert("成功");
                }
            }
        });
    };

    sendButton.addEventListener('click',send);




};