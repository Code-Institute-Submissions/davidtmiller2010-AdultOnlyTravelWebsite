function sendMail(contactForm) {
  emailjs
    .send("gmail", "contact_email", {
      from_name: contactForm.name.value,
      from_email: contactForm.emailaddress.value,
      from_destination: contactForm.destination.value,
      from_noTravelling: contactForm.quantity.value,
      from_fromDate: contactForm.startdate.value,
      from_toDate: contactForm.enddate.value,
      from_info: contactForm.holidaywishlist.value
    })
    .then(
      function(response) {
        console.log("SUCCESS", response);
        alert("The form was sent");
        document.getElementById("Form").reset();
      },
      function(error) {
        console.log("FAILED", error);
        alert("The form was not sent");
      }
    );
  return false; // To block from loading a new page
}
