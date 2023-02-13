// Funcionalidad 1
$(".form-control").blur(function () {
  if (!$(this).val()) {
    $(this).addClass("error");
  } else {
    $(this).removeClass("error");
    $(this).addClass("correcto");
  }
})

// Funcionalidad 2 y 3
// Click y sweet alert
$("#submit-form").click(() => {
  var name = $("#name").val();
  var email = $("#email").val();
  var subject = $("#subject").val();
  var message = $("#message").val();

  var fill = '';

  if (name == '' || subject == '' || email == '' || message == '') {
    if (name == '') {
      fill += "Nombre "
    }
    if (subject == '') {
      fill += "Apellido "
    }
    if (email == '') {
      fill += "E-Mail "
    }
    if (message == '') {
      fill += "Teléfono "
    }
    swal({
      title: "Ooops, no se ha llenado el formulario",
      text: "Favor llenar lo siguente: " + fill,
      icon: "warning",
    });
    event.preventDefault();

  } else {
    swal({
      title: "Formulario enviado",
      icon: "success",
    });
    event.preventDefault();
  }
})


// Funcionalidad 4 5 y 6
// Hover, CSS y callback
$(".card-pic").hover(function () {
  $(this).css({
    "transform": "scale(1.05)",
    "transition": "transform .2s"
  })
}, function () {
  $(this).css({
    "transform": "scale(1.0)",
    "transition": "transform .2s"
  })
});

// TODO: Tooltip