function eyeClick() {
    let passwordInput = document.querySelectorAll('.password')
    let inputTypeIsPassword = passwordInput[0].type == "password"
    var x = document.getElementById("hide1")
    var y = document.getElementById("hide2")
    


    function showPassword() {
        passwordInput[0].setAttribute('type', 'text')
        passwordInput[1].setAttribute('type', 'text')
        x.style.visibility = "hidden";
        y.style.visibility = "visible";
        
    }
    
    function hidePassword() {
        passwordInput[0].setAttribute('type', "password")
        passwordInput[1].setAttribute('type', 'password')
        x.style.visibility = "visible";
        y.style.visibility = "hidden";
       
    }
    if (inputTypeIsPassword) {
        showPassword()

    } else {
        hidePassword()

    }
}

