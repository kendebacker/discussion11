function toggleEmail(){
    if(document.querySelector("#emailDiv").style.display === "block"){
        document.querySelector("#emailDiv").style.display = "none"
    }else{
        document.querySelector("#emailDiv").style.display = "block"
    }
}


function copyText(){
    if(document.querySelector("#sameAddress").checked){
        document.querySelector("#home").value = document.querySelector("#bill").value
        document.querySelector("#bill").disabled = true
    }else{
        document.querySelector("#bill").disabled = false
    }
}


function checkComplete(){}





function set1(){
    document.querySelector("#check").addEventListener("click", toggleEmail)
}

function set2(){
    document.querySelector("#sameAddress").addEventListener("click", copyText)
}

function set3(){
    // https://stackoverflow.com/questions/4010356/form-validation-get-all-input-type-text-and-validate
    document.querySelector("input[type=text]").disabled = true
    document.querySelectorAll("input").addEventListener("click", checkComplete)
}

