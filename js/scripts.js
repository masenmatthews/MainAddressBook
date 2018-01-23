function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  // this.address = [];
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

$(document).ready(function() {
  $("form#newContact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#newFirstName").val();
    var inputtedLastName = $("input#newLastName").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $("ul#contacts").append("<li><span class='newFirstName'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#displayContact").show();
      $("#displayContact h3").text(newContact.firstName);
      $("#newFirstName").text(newContact.firstName);
      $("#newLastName").text(newContact.lastName);
    });

    $("input#newFirstName").val("");
    $("input#newLastName").val("");
  });
});
