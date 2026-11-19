const form = document.querySelector("#formInscripcion");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Formulario enviado sin recargar 🎉");
});
