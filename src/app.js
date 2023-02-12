$(".form-control").blur(function () {
  if (!$(this).val()) { //Si el campo no esta vacio
    $(this).addClass("error");
  } else {
    $(this).removeClass("error");
    $(this).addClass("correcto");
  }
})

// Sweet alert, form enviado
$("#submit-form").click(() => {
  swal({
    title: "Gracias por enviar el fomurlario",
    text: "Esperamos poder responderte pronto",
    icon: "success",
  });
  event.preventDefault();
})









