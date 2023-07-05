

function createForm (tp = 'indiv', cls = '.block-form', h2text= "Записатися на сеанс", uniqClass = 'test') {
    let form = document.createElement('form')
    form.setAttribute('id', 'myForm')
    form.classList.add(uniqClass)
    let block_form = document.querySelector(cls)
    block_form.append(form)

    
    function input (type = 'text', id = 'name', placeholder = "false", f = "false", g = "false") {
        let div = document.createElement('div')
        div.classList.add('input_group')
        let input = document.createElement('input')
        input.setAttribute('type', type)
        input.setAttribute('id', id)
        input.setAttribute('placeholder', placeholder)
        input.setAttribute('data-validate-field', f)
        input.setAttribute('data-validate-rules', g)
        
        input.setAttribute('required' , 'required')
        div.append(input)
        form.append(div)
    }

    let h2 = document.createElement('h2')
    h2.textContent = h2text
    h2.classList.add('form_h2')

    function btn () {
        let btn = document.createElement('button')
        btn.setAttribute('type', 'submit')
        btn.setAttribute('id', 'button')
        btn.classList.add('input_button')
        btn.textContent = 'Замовити консультацію'
        let box = document.createElement('div')
        box.append(btn)
        form.append(box)
    }

    form.append(h2)
    input (type = 'text', id = 'name', placeholder = "Ім'я",)
    input (type = 'email', id = 'email', placeholder = "Пошта")
    input (type = 'tel', id = 'phone', placeholder = "Телефон", "tel", "phone")

    var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("380 (99)-999-99-99");

im.mask(selector);

new JustValidate('#myForm', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 10
        },
        tel: {
            required: true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 10
            }
        },
        mail: {
            required: true,
            email: true
        }
    }

})

    btn ()

    let x = document.createElement('div')
    x.classList.add('form_x')
    form.append(x)
    x.textContent = '+'

    x.addEventListener('click', () => {
        form.remove()
        body.style.overflow = 'visible'
        let shadow = document.querySelector('.shadow')
        shadow.style.position = "relative"
    })

    const url='https://script.google.com/macros/s/AKfycbyehZSlgynnCJHBps0yTFRnBC_cE_-u9caQuq0TUyysfcW7Q4Ea4KO2JiTgcY9wlNf4/exec';
const myForm = document.querySelector('#myForm');
const myName = document.querySelector('#name');
const myEmail = document.querySelector('#email');
const myMessage = 'test'
const myPhone= document.querySelector('#phone')
// const consType =document.querySelector('input[name="consultation"]:checked');
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
            message: Date(),
            phone:myPhone.value,
            consType: tp

        }
        myForm.remove()
        addSendMail(myObj);
        window.location.href= 'thx.html'
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
}

let btn_createForm = document.querySelector('.general_btn')
btn_createForm.addEventListener('click', ()=> {
    let nul = document.querySelector('#myForm')
    

    if (nul == null) {
        
        createForm ('консультація','.block-form','ЗАМОВИТИ КОНСУЛЬТАЦІЮ', 'btn-1')
    } else {
        nul.remove()
        createForm ('консультація','.block-form','ЗАМОВИТИ КОНСУЛЬТАЦІЮ', 'btn-3')
    }
    window.location.href= '#myForm'
    body.style.overflow = 'hidden'

    let shadow = document.querySelector('.shadow')
    shadow.style.position = "absolute"
})

let indiv = document.querySelector('.btn_indiv')

indiv.addEventListener('click', () => {
    let nul = document.querySelector('#myForm')

    if (nul == null) {
        
        createForm ('Індивідуальна консультація', '.life_nol', 'ІНДИВІДУАЛЬНА КОНСУЛЬТАЦІЯ', 'btn-n')
    } else {
        nul.remove()
        createForm ('Індивідуальна консультація', '.life_nol', 'ІНДИВІДУАЛЬНА КОНСУЛЬТАЦІЯ', 'btn-n')
    }
    window.location.href= '#myForm'
    body.style.overflow = 'hidden'

    let shadow = document.querySelector('.shadow')
    shadow.style.position = "absolute"
})

let family = document.querySelector('.btn_family')

family.addEventListener('click', () => {
    let nul = document.querySelector('#myForm')

    if (nul == null) {
        
        createForm ('Сімейна консультація', '.life_nol', 'СІМЕЙНА КОНСУЛЬТАЦІЯ', 'btn-n')
    } else {
        nul.remove()
        createForm ('Сімейна консультація', '.life_nol', 'СІМЕЙНА КОНСУЛЬТАЦІЯ', 'btn-n')
    }
    window.location.href= '#myForm'
    body.style.overflow = 'hidden'

    let shadow = document.querySelector('.shadow')
    shadow.style.position = "absolute"
})

let group = document.querySelector('.btn_group')

group.addEventListener('click', () => {
    let nul = document.querySelector('#myForm')

    if (nul == null) {
        
        createForm ('Групова терапія', '.life_nol', 'ГРУПОВА ТЕРАПІЯ', 'btn-n')
    } else {
        nul.remove()
        createForm ('Групова терапія', '.life_nol', 'ГРУПОВА ТЕРАПІЯ', 'btn-n')
    }
    window.location.href= '#myForm'
    body.style.overflow = 'hidden'

    let shadow = document.querySelector('.shadow')
    shadow.style.position = "absolute"

})