
const url='https://script.google.com/macros/s/AKfycbyehZSlgynnCJHBps0yTFRnBC_cE_-u9caQuq0TUyysfcW7Q4Ea4KO2JiTgcY9wlNf4/exec';
const myForm = document.querySelector('#myForm');
const myName = document.querySelector('#name');
const myEmail = document.querySelector('#email');
const myMessage = document.querySelector('#message');
const myPhone= document.querySelector('#phone')
const consType =document.querySelector('input[name="consultation"]:checked');
const subBtn = document.querySelector('#button')

myForm.addEventListener('submit', submitter);
function submitter(e){
    console.log('submitted');
    e.preventDefault();
    subBtn.disabled = true;
    let message='';
    if(myName.value.length<5){
        myName.style.borderColor='red'
        message+= `<br> Name needs to be 5 characters`
    }
    if(myEmail.value.length<5){
        myEmail.style.borderColor='red'
        message+= `<br> Email is missing`
    }
    if(message){
        const div=document.createElement('div');
        div.innerHTML=message;
        div.style.color = 'red';
        myForm.append(div);
        setTimeout(()=> {
            div.remove();
            myName.style.borderColor='';
            myEmail.style.borderColor=''
        },5000);
        subBtn.disabled = false;
    }else{
        const myObj = {
            name:myName.value,
            email:myEmail.value,
            message:myMessage.value,
            phone:myPhone.value,
            consType:consType.value

        }
        myForm.style.display = 'none'
        addSendMail(myObj);
    }

}
function addSendMail(data) {
    console.log(data);
    fetch(url,{
        method:'POST',
        body:JSON.stringify(data)
    }).then(res=>res.json()).then(json=>{
        console.log(json)
    })
}

function addSendMailGET(data) {
    const url1 = url + '?id=100';
    fetch(url1).then(res=>res.json()).then(json=>{
        console.log(json)
    })
}