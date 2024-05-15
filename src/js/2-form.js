const formData = {
    email: "",
    message: "",
};

const feedback = "feedback-form-state";

const feedbackForm = document.querySelector(".feedback-form");
const emailInput = document.querySelector("input");
const textarea = document.querySelector("textarea");

getStorageData();

function onFormInput(event) {
    event.preventDefault();
    // formData[event.target.name] = event.target.value;
    formData.email = emailInput.value.trim();
    formData.message = textarea.value.trim();
    // console.log(formData);

    const jsonFormData = JSON.stringify(formData);
    // console.log(jsonFormData);
    localStorage.setItem(feedback, jsonFormData);
}

// console.log(_.throttle);

feedbackForm.addEventListener("input", onFormInput);

function onFormSubmit(event) {
    event.preventDefault();
    if (emailInput.value.trim() === "" || textarea.value.trim() === "") {
        alert("Fill please all fields"); 
    } else {
        console.log(formData);
    };
    localStorage.removeItem(feedback);
    // event.currentTarget.reset();
};

feedbackForm.addEventListener("submit", onFormSubmit)

function getStorageData() {
    const storageData = localStorage.getItem(feedback);
    if (storageData) {
        const objStorageData = JSON.parse(storageData);
        emailInput.value = objStorageData.email;
        textarea.value = objStorageData.message;
    };
};