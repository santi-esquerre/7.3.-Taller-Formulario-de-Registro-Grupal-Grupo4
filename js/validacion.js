const regBtn = document.getElementById("regBtn");

regBtn.addEventListener("click", function showAlert() {
  const textboxNombre = document.getElementById("nombre");
  const textboxApellido = document.getElementById("apellido");
  const textboxEmail = document.getElementById("email");
  const textboxPassword1 = document.getElementById("password1");
  const textboxPassword2 = document.getElementById("password2");
  const checkbox = document.getElementById("terminos");

  if (
    textboxNombre.value == "" ||
    textboxEmail.value == "" ||
    textboxApellido.value == "" ||
    textboxPassword1.value.toString().length < 6 ||
    textboxPassword2.value.toString().length < 6 ||
    textboxPassword1.value !== textboxPassword2.value ||
    checkbox.checked == false
  ) {
    document.getElementById("alert-danger").classList.add("show");
    setTimeout(function () {
      document.getElementById("alert-danger").classList.remove("show");
    }, 3000);
  } else {
    document.getElementById("alert-success").classList.add("show");
    setTimeout(function () {
      document.getElementById("alert-success").classList.remove("show");
    }, 3000);
  }
  textboxNombre.value = "";
  textboxApellido.value = "";
  textboxEmail.value = "";
  textboxPassword1.value = "";
  textboxPassword2.value = "";
  checkbox.checked = false;
});
