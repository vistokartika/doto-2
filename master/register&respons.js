function registerData(event) {
    let username = document.getElementById("username")
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let region = document.getElementById("region")
    let dob = new Date(document.getElementById("dob").value)
    let ageCheck = new Date()
    let errornotif = document.getElementById("errornotif")

    if(username.value.length <5 || username.value.length >10){
        errornotif.innerHTML = "* Username must be between 5 - 10 character"
        event.preventDefault()
    }
    else if(email.value.indexOf("@") <1 || email.value.indexOf(".") <1){
        errornotif.innerHTML = "* Email is not valid"
        event.preventDefault()
    }
    else if(!isNaN(password.value)){
        errornotif.innerHTML = "* Password need to have at least one letter"
        event.preventDefault()
    }
    else if(password.value.length <7 || password.value.length >20){
        errornotif.innerHTML = "* Password must be between 7 - 20 character"
        event.preventDefault()
    }
    else if(!region.value){
        errornotif.innerHTML = "* You must set your Region"
        event.preventDefault()
    }
    else if(!document.getElementById("dob").value){
        errornotif.innerHTML = "* You must fill your Date of Birth"
        event.preventDefault()
    }
    else if(ageCheck.getFullYear() - dob.getFullYear() < 18){
        errornotif.innerHTML = "* You must be at least 18 years old to register"
        event.preventDefault()
    }
    else{
        alert("Congratulations your account has been registered")
    }
}

function responsive() {
    var navrespon1 = document.getElementById("navrespon1")
    if(navrespon1.className === "nav"){
        navrespon1.className += " responsive"
    }
    else{
        navrespon1.className = "nav"
    }
    var navrespon2 = document.getElementById("navrespon2")
    if(navrespon2.className === "nav-merchandise"){
        navrespon2.className += " responsive"
    }
    else{
        navrespon2.className = "nav-merchandise"
    }
    var navrespon3 = document.getElementById("navrespon3")
    if(navrespon3.className === "regisnav"){
        navrespon3.className += " responsive"
    }
    else{
        navrespon3.className = "regisnav"
    }
    var navrespon4 = document.getElementById("navrespon4")
    if(navrespon4.className === "nav"){
        navrespon4.className += " responsive"
    }
    else{
        navrespon4.className = "nav"
    }
}

function heroesResponsive() {
    var navrespon1 = document.getElementById("nav-active")
    if(navrespon1.className === "nav"){
        navrespon1.className += " responsive"
    }
    else{
        navrespon1.className = "nav"
    }
    var navrespon2 = document.getElementById("navrespon2")
    if(navrespon2.className === "nav-merchandise"){
        navrespon2.className += " responsive"
    }
    else{
        navrespon2.className = "nav-merchandise"
    }
    var navrespon3 = document.getElementById("navrespon3")
    if(navrespon3.className === "regisnav"){
        navrespon3.className += " responsive"
    }
    else{
        navrespon3.className = "regisnav"
    }
    var navrespon4 = document.getElementById("navrespon4")
    if(navrespon4.className === "nav"){
        navrespon4.className += " responsive"
    }
    else{
        navrespon4.className = "nav"
    }
}

function gameplayResponsive() {
    var navrespon1 = document.getElementById("navrespon1")
    if(navrespon1.className === "nav"){
        navrespon1.className += " responsive"
    }
    else{
        navrespon1.className = "nav"
    }
    var navrespon2 = document.getElementById("navrespon2")
    if(navrespon2.className === "nav-merchandise"){
        navrespon2.className += " responsive"
    }
    else{
        navrespon2.className = "nav-merchandise"
    }
    var navrespon3 = document.getElementById("navrespon3")
    if(navrespon3.className === "regisnav"){
        navrespon3.className += " responsive"
    }
    else{
        navrespon3.className = "regisnav"
    }
    var navrespon4 = document.getElementById("nav-active")
    if(navrespon4.className === "nav"){
        navrespon4.className += " responsive"
    }
    else{
        navrespon4.className = "nav"
    }
}

function merchandiseResponsive() {
    var navrespon1 = document.getElementById("navrespon1")
    if(navrespon1.className === "nav"){
        navrespon1.className += " responsive"
    }
    else{
        navrespon1.className = "nav"
    }
    var navrespon2 = document.getElementById("nav-active")
    if(navrespon2.className === "nav-merchandise"){
        navrespon2.className += " responsive"
    }
    else{
        navrespon2.className = "nav-merchandise"
    }
    var navrespon3 = document.getElementById("navrespon3")
    if(navrespon3.className === "regisnav"){
        navrespon3.className += " responsive"
    }
    else{
        navrespon3.className = "regisnav"
    }
    var navrespon4 = document.getElementById("navrespon4")
    if(navrespon4.className === "nav"){
        navrespon4.className += " responsive"
    }
    else{
        navrespon4.className = "nav"
    }
}