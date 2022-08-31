function welcome() {
    const inputs = document.getElementsByClassName("form-control") 

    const values = [...inputs].map((input) => {
        return input.value
    })
    
    const checkUndefined = values.filter(function (value) {
        return value;
    })

    if(checkUndefined.length === inputs.length){
        window.open("./");
    }
    
    } 