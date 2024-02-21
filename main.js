function validateForm () {
  // your code here

  //1.- Me traigo los valores del formulario
  const name = $('#name').val();

  //2. obtengo las letras mayusculas

  const primera_name = name[0];


  //3. Valido el largo del nombre

  if (name.length < 3 || name.length > 8) {
    alert("Los nombres deben tener entre 3 y ocho caracteres");
  } else if(primera_name.toUpperCase() != primera_name){
    console.log("la primera tiene que se mayuscula")
  } else{
    alert("Todo correcto");
  }

}