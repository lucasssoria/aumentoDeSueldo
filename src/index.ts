import "./styles.css";
// incio
// se le pide al usuario que ingrese su sueldo
// se guarda el dato
// accion del button
// se valida el sueldo
// condiciones en base al aumento que se aplique
// operaciones para los distintos aumentos
// se muestra el mensaje si recibe aumento con su total o el caso contrario
// fin

let sueldo = document.getElementById("sueldo");

btnSend.addEventListener("click", () => {
  let sueldoActual = Number(sueldo.value);

  if (0 < sueldo.value && sueldo.value <= 15000) {
    let aumento20: number = (20 / 100) * sueldoActual + sueldoActual;
    console.log(
      "Usted recibira un aumento. Su sueldo proximo sera: $" + aumento20
    );
  } else if (15001 < sueldo.value && sueldo.value <= 20000) {
    let aumento10: number = (10 / 100) * sueldoActual + sueldoActual;
    console.log(
      "Usted recibira un aumento. Su sueldo poroximo sera: $" + aumento10
    );
  } else if (20001 < sueldo.value && sueldo.value <= 25000) {
    let aumento5: number = (5 / 100) * sueldoActual + sueldoActual;
    console.log(
      "Usted recibira un aumento. Su sueldo proximo sera: $" + aumento5
    );
  } else {
    console.log("No hay aumento.");
  }
});
