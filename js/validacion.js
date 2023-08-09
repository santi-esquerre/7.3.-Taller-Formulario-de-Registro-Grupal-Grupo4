const regBtn = document.getElementById("regBtn");

const textboxNombre = document.getElementById("nombre");

const textboxApellido = document.getElementById("apellido");

const textboxEmail = document.getElementById("email");

const textboxPassword1 = document.getElementById("password1");

const textboxPassword2 = document.getElementById("password2");

if (
  textboxNombre.value == "" ||
  textboxEmail.value == "" ||
  textboxApellido.value == "" ||
  textboxPassword1.value.toString().length < 6 ||
  textboxPassword2.value.toString().length < 6 ||
  textboxPassword1.value !== textboxPassword2.value
) {
  regBtn.addEventListener("click", showAlertError());
} else {
  regBtn.addEventListener("click", showAlertSuccess());
}
function showAlertSuccess() {
  document.getElementById("alert-sucess").classList.add("show");
}

function showAlertError() {
  document.getElementById("alert-danger").classList.add("show");
}
