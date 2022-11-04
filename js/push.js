console.log("執行 push");
const Demo = new Vue({
    el: '#app',
    data: {
      name: '',
      num: '',
      m1: '',
      m2: '',
      m3: '',
      m4: '',
      time: '',
        
      sending: false,
  
      apiUri: 'https://script.google.com/macros/s/AKfycbw27PiOS2HXFaHEMBvBNGqIPPJml8pzfoOu8Zc61YFIKxUUzyHKU6-qvZqSyBo1-eNN/exec'
    },
    methods: {
      sendData() {
        this.sending = true;
        console.log("send");
        let formdata = new FormData();
        formdata.append('name', this.name);
        formdata.append('num', this.num);
        formdata.append('m1', this.m1);
        formdata.append('m2', this.m2);
        formdata.append('m3', this.m3);
        formdata.append('m4', this.m4);
        formdata.append('time', this.time);
        console.log(formdata);
        const config = {
          method: 'POST',
          body: formdata,
          redirect: 'follow'
        };
  
        fetch(this.apiUri, config)
          .then(response => response.text())
          .then(result => {
            if(result === 'success') {
              this.sending = false;
            }
          })
          .catch(error => console.log('error', error));
  
      },
      submit() {
        console.log("submit");
        var is =document.getElementsByClassName("is");
            let objArr=[
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
        const flag=confirm("是否確認送出？ 葷食："+objArr[2]+" 葷食(加蛋)："+objArr[3]+" 素食："+objArr[4]+" 素食（加蛋）："+objArr[5]+" 取餐時間："+objArr[7]);
        if(flag){

            
            var x =Rec(flag);
            if(x){
                console.log("已送出");
                this.sendData();
            }
            
            
        } 
      }
    },
})

    function Rec(flag){
        var is =document.getElementsByClassName("is");
        var total=document.getElementById("total");
        var btn=document.getElementById("btn");
        var rec=document.getElementById("rec");
        var as=document.getElementsByClassName("as");
        var main=document.getElementById("main");
        var title=document.getElementById("title");
        let objArr=[
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
        if(document.getElementById("name").value.trim()=="" || document.getElementById("name").value.trim()==undefined){
            alert("名字不可為空");
            return false;
        }
        else if (is[0].value>5||is[1].value>5||is[2].value>5||is[3].value>5){
            alert("各餐點一次最多五份");
            return false;
        }
        else if (objArr[0].length>=10){
            alert("訂購姓名長度須小於10")
            return false;
        }
        else if(!new RegExp(/^09[0-9]{8}$/).test(objArr[1])||objArr[1].length!=10){
            alert("電話號碼輸入錯誤");
            return false;
        }
        else if(document.getElementById("sel").value.split("T")[1].split(":")[0]<11||document.getElementById("sel").value.split("T")[1].split(":")[0]>=13){
            console.log(document.getElementById("sel").value.split("T")[1].split(":")[0]);
            alert("取餐時間須介於11:00~13:00");
            return false;
        }
        else if(flag){
            btn.disabled=true;
            btn.innerText="不可再次提交";
            
            for(var i=0;i<as.length;i++){
                as[i].innerHTML=objArr[i];
            }
            rec.style.display="block";
            main.style.display="none";
            title.innerText="媽媽便當";

            return true;
         }

    }