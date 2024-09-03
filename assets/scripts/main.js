document
  .getElementById("email-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const formData = {
      name: document.getElementById("name-2").value,
      email: document.getElementById("Email-3").value,
      serviceNeeded: document.getElementById("Project-4").value,
      budget: document.getElementById("Budget-2").value,
      timeline: document.getElementById("Date-2").value,
    };

    // Send form data to the server
    fetch("https://send-email-q58w.onrender.com/api/v1/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          document.querySelector(".contact-form-done").style.display = "block";
          document.querySelector(".contact-form-fail").style.display = "none";
        } else {
          throw new Error("Something went wrong");
        }
      })
      .catch((error) => {
        document.querySelector(".contact-form-fail").style.display = "block";
      });
  });
