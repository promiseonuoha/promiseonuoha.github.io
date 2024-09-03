document
  .getElementById("email-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const formData = {
      name: document.getElementById("name-2").value,
      email: document.getElementById("Email-3").value,
      project: document.getElementById("Project-4").value,
      budget: document.getElementById("Budget-2").value,
      date: document.getElementById("Date-2").value,
    };

    // Send form data to the server
    fetch("your-server-endpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          document.querySelector(".success-message").style.display = "block";
          document.querySelector(".error-message").style.display = "none";
        } else {
          throw new Error("Something went wrong");
        }
      })
      .catch((error) => {
        document.querySelector(".success-message").style.display = "none";
        document.querySelector(".error-message").style.display = "block";
      });
  });
