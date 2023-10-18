document.addEventListener("DOMContentLoaded", function () {
  const regBtn = document.getElementById("regBtn");
  const textboxNombre = document.getElementById("nombre");
  const textboxApellido = document.getElementById("apellido");
  const textboxEmail = document.getElementById("email");
  const textboxPassword1 = document.getElementById("password1");
  const textboxPassword2 = document.getElementById("password2");
  const checkbox = document.getElementById("terminos");

  regBtn.addEventListener("click", function showAlert() {
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

  textboxPassword2.addEventListener("change", function () {
    if (textboxPassword1.value !== textboxPassword2.value) {
      textboxPassword2.setCustomValidity("Las contraseñas no coinciden");
    }
  });
});

function validateForm() {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
}

document.getElementById("regBtn").addEventListener("click", validateForm());
