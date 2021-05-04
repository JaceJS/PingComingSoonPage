const inputBox = document.querySelector(".email-input");
const notifyBtn = document.querySelector(".notify-btn");
const errorAlert = document.querySelector(".error-alert");

notifyBtn.addEventListener("click", e => {
    let inputData = inputBox.value;
    let result = true;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!inputData.match(regexEmail)) {
        result = false;
        inputBox.classList.add("active");
        errorAlert.classList.add("active")
    } else {
        inputBox.classList.remove("active");
        errorAlert.classList.remove("active")
    }
});
