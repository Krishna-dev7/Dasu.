// Form validation using jquery
const myForm = document.querySelector('form')
const username = document.querySelector('#uname')
const password = document.querySelector('#password')
const mobile = document.querySelector('#Mobile')
const email = document.querySelector('#email')
$("span[class=hide]").hide()


// function to validate form elements
const valForm = () => {
    let returnVal = false;
    if(valUsername() &&  valPass() && valEmail() && valPhone()){
        return returnVal = true;
    }
    return returnVal;
}


$(myForm).submit(valForm);
$(username).blur(valUsername);
$(email).blur(valEmail);
// $(password).input(valPass);
$(mobile).focus(valPhone);


function setErr(id, msg){
    $(id).show().text(msg);
    $(id).siblings('input').addClass('err');
}

function clearErr(id){
    $(id).hide().text('');
    $(id).siblings().removeClass('err');
}

function valUsername(){
    let value = username.value
    let id = '#name-span'
    let res = false;
    let reg = /[^a-zA-Z' ']/ig;
    if(reg.test(value)){
        setErr(id, "only alphabets are required");
    } else if(value.trim().length < 8) {
        setErr(id, "Atleast 8 character required");
    } else {
        clearErr(id);
        res = true;
    }
    return res;
}

function valPass(){
    let value = password.value.trim();
    let id = '#pass-span'
    let res = false;
    let reg = /((?=.*[a-z]{1,})(?=.*[A-Z]{1,})(?=.*[0-9]{1,})(?=.*[&*%$@#]{1,}))/g;
    if(value.length == 0){
        setErr(id, "Password cannot be empty");
    } else if (! (reg.test(value))){
        setErr(id, "Must contain one lower, one special character, one digit and upper case characters");
    } else {
        clearErr(id);
        res = true;
    }
    return res;
}

function valEmail(){
    let value = email.value.trim();
    let id = '#email-span';
    let res = false;
    let reg = /[a-zA-Z]+[0-9]+@[a-zA-Z]+\.[a-z]{2,4}/ig;

    if(reg.test(value) == false){
        setErr(id, "Invalid username");
    } else {
        clearErr(id);
        res = true;
    }
    return res;
}

function valPhone(){
    let value = (mobile.value.trim());
    let id = '#mob-span';
    let reg = /[^0-9]/g;
    let res = false;
    if(reg.test(value)){
        setErr(id, "Enter only numbers");
    } else if(value.length != 10){
        setErr(id, "Mobile number must be 10 digit")
    } else {
        clearErr(id);
        res = true;
    }
    return res;
}


// responsive navbar 
const menu = document.getElementById('menu-icon');
const menusChild = menu.children;
$(menu).click((e)=> {
    $('#side-bar').addClass('show');
})

$('#side-bar li').click((e)=> {
    $('#side-bar').removeClass('show');
})

$('#side-bar i').click(()=> {
    $('#side-bar').removeClass('show');
})


// searching features using ajax and json
const gridDiv = document.querySelector('.grid-item')
const searchbar = document.getElementById('search');
searchbar.addEventListener('keyup', ()=> {
    let searchvalue = searchbar.value.trim();
    let filteredItems = products.filter((item) => {
        return item["title"].includes(searchvalue);
    });
    displayItem(filteredItems);
})

function displayItem(item){
    const obtain =  [...item.map((el)=> {
        return `
            <div class="items">
            <img src=${el["img"]} alt=${el["title"]}>
                <div class="item-section">
                    <p>Price: <span>${el["price"]}</span></p>
                    <button class="buttons"><a href="#book">Buy Now</a><i class="ri-arrow-right-up-line"></i></button>
                </div>
            </div>
        `
    })];
    obtain.forEach((item)=>{
        gridDiv.innerHTML = item;
    })
}




// all datas
const products = [
    {
        "title":"earphone",
        "price":"2000",
        "img": "https://i.pinimg.com/736x/ef/08/4c/ef084c177e9f03c9d74a3ca0f581860d.jpg"
    },
    {
        "title":"apple-airpods",
        "price":"2000",
        "img": "https://i.pinimg.com/236x/74/b6/ee/74b6eed071734153678b15dad25b9630.jpg"
    },
    {
        "title":"premium-headset",
        "price":"2000",
        "img": "https://i.pinimg.com/564x/51/4a/da/514ada181bac7c59c985d2bb2bdf353c.jpg"
    },
    {
        "title":"premium-headset",
        "price":"2000",
        "img": "https://i.pinimg.com/564x/51/4a/da/514ada181bac7c59c985d2bb2bdf353c.jpg"
    },
    {
        "title":"apple-iphone",
        "price":"2000",
        "img": "https://i.pinimg.com/236x/78/cd/44/78cd44d7b4449975c1cce7e5c421630e.jpg"
    },
    {
        "title":"premium-iphone",
        "price":"2000",
        "img": "https://i.pinimg.com/564x/7b/37/56/7b37561c29874a1924f069af633a55f8.jpg"
    },
    {
        "title":"macbook-air",
        "price":"2000",
        "img": "https://i.pinimg.com/564x/38/65/94/386594135756b1c8572b20991e9dd963.jpg"
    },
    {
        "title":"macbook-air",
        "price":"2000",
        "img": "https://i.pinimg.com/564x/7f/22/d9/7f22d9ce90b67bbbed5a67ab28e230f1.jpg"
    },
]