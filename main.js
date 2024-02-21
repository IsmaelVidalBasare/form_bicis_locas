function validateForm () {
  // your code here

  //1.- Me traigo los valores del formulario
  const name = $('#name').val();

  //2. Valido el largo del nombre

  if (name.length < 3 || name.length > 8) {
    alert("Los nombres deben tener entre 3 y ocho caracteres");
}
else{
    alert("Todo correcto");
}
}