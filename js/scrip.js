const d = document,
  $form = d.querySelector(".form_btn"),
  $valid = d.querySelector(".none"),
  $buttons = d.querySelectorAll("button"),
  $propina = d.getElementById("tip_person"),
  $total = d.getElementById("total_person"),
  $reset = d.getElementById("restablecer"),
  $validacion = d.querySelector(".validacion");

let precio, porcentaje, people;

d.addEventListener("keyup", (e) => {
  if (e.target === $form.precio) {
    precio = parseFloat(e.target.value);
  }
  if (e.target === $form.porcentaje) {
    porcentaje = parseFloat(e.target.value);
  }
  if (e.target === $form.people) {
    people = parseInt(e.target.value);
    if(people === 0){
        $validacion.classList.remove("none")
    }else{
        $validacion.classList.add("none") 
    }
  }

  let resultado = (precio + (precio * porcentaje) / 100) / people,
    propinas = (precio * porcentaje) / 100 / people;
  if (!isNaN(resultado) && !isNaN(propinas)) {
    $propina.textContent = Math.round(propinas);
    $total.textContent = Math.round(resultado);
  }
});

d.addEventListener("submit", (e) => {
  e.preventDefault();
});

d.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.matches(".porcentajes button")) {
    porcentaje = parseFloat(e.target.value);
    $form.porcentaje.value = porcentaje;

    let resultado = (precio + (precio * porcentaje) / 100) / people,
      propinas = (precio * porcentaje) / 100 / people;

      if (!isNaN(resultado) && !isNaN(propinas)) {
      $propina.textContent = Math.round(propinas);
      $total.textContent = Math.round(resultado);
    }
  }
  if (e.target === $reset) {
    location.reload();
  }
});
