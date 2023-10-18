document.addEventListener("DOMContentLoaded", function () {
  const password1 = document.getElementById("password1");
  const password2 = document.getElementById("password2");
  const regBtn = document.getElementById("regBtn");
  const terminos = document.getElementById("terminos");

  function verificar() {
    if (password1.value !== password2.value) {
      password2.setCustomValidity("Las contraseñas no coinciden");
    } else {
      password2.setCustomValidity("");
    }

    if (!document.getElementById("terminos").checked) {
      var validateText = document.createElement("div");
      validateText.innerHTML = `<div class="invalid-feedback d-block">
                          Debe aceptar los términos y condiciones del servicio.
                        </div>`;
      document.getElementById("terminosDiv").appendChild(validateText);
      document
        .getElementById("terminosDiv")
        .querySelector(`#terminosBtn`)
        .classList.add("text-danger");
    } else {
      document
        .getElementById("terminosDiv")
        .querySelector(".invalid-feedback")
        .remove();
      document
        .getElementById("terminosDiv")
        .querySelector(`#terminosBtn`)
        .classList.remove("text-danger");
    }
  }
  password1.addEventListener("input", verificar);
  password2.addEventListener("input", verificar);

  regBtn.addEventListener("click", verificar);

  terminos.addEventListener("change", verificar);
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

let string = "aguante el manya";
for (var i = 0; i < 100; i++) {
  console.log(string);
  string += "a";
}
