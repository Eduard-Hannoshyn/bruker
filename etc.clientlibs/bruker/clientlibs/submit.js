const contactUsForm = document.getElementById('contact-us-form')

function getData(form) {
    const formData = new FormData(form);
    console.log(Object.fromEntries(formData));
}

contactUsForm.addEventListener("submit", function (e) {
    e.preventDefault();
    getData(e.target);
    e.target.reset();
});


