$("#submit-form").click(() => {
  swal({
    title: "Gracias por enviar el fomurlario",
    text: "Esperamos poder responderte pronto",
    icon: "success",
  });
  event.preventDefault();
})