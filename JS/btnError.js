;(function (){
    const textarea = document.querySelector(".form-control")
    const email = document.querySelector('.email')
    const btn = document.querySelector(".confirmation")
    
    btn.addEventListener("click", function(){

        const isTextAreaEmpty = textarea.value.trim().length === 0 || textarea.value.indexOf("@") === -1 || textarea.value.indexOf(".") === -1
        if(isTextAreaEmpty){
            const msgError = document.createElement("div")
            const imgError = document.createElement("div")

            msgError.classList.add("confirmationError")
            msgError.textContent = "Please provide a valid email"
            email.after(msgError)
            
            textarea.classList.add("invalid")

            imgError.classList.add("imgError")
            email.after(imgError)

        } else {
            document.querySelector(".confirmationError").remove()
            document.querySelector(".imgError").remove()
            textarea.classList.remove("invalid")
            setTimeout(() => {
                alert("This is only a test, your e-mail will not be saved.")
            }, 1000);
        }
    })
})()
