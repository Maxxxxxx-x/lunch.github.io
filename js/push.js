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
        this.sendData();
      }
    },
})