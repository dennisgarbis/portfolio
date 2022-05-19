
$(document).ready(function () {
  $('#contactMe').validate({
    rules: {
      fname: {
        required: true,
        rangelength: [2, 15]
      },
      lname: {
        required: true,
        rangelength: [2, 15]
      },
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true,
        phoneUS: true
      }
    }, // end rules
    messages: {
      fname: {
        required: "Please type your first name.",
        rangelength: "Your first name isn't only 1 letter"
      },
      lname: {
        required: "Please type your last name.",
        rangelength: "Your last name is at least 2 letters long"
      },
      email: {
        required: "We need your e-mail address.",
        email: "Please provide a real e-mail address."
      },
      phone: {
        required: 'Please enter your phone number',
        phone: "that is not a real phone number"
      }
    }, // end messages
    errorPlacement: function (error, element) {
      if (element.is(":radio") || element.is(":checkbox")) {
        error.appendTo(element.parent());
      } else {
        error.insertAfter(element);
      }
    } // end errorPlacement
  }); // end validate()
}); // end ready