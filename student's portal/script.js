// Display notification on successful login
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Perform login logic and validation here
  const email = document.getElementById("emailInput").value;
  const password = document.getElementById("passwordInput").value;

  // Assuming successful login, display success notification
  displayNotification("Success", "You have successfully logged in.");

  // Redirect to dashboard or desired page
  window.location.href = 'dashboard.html';
});

// Function to display notification
function displayNotification(title, message) {
  const notification = document.createElement("div");
  notification.classList.add("notification");
  notification.innerHTML = `
    <h3>${title}</h3>
    <p>${message}</p>
  `;
  document.body.appendChild(notification);

  // Auto-hide notification after 3 seconds
  setTimeout(function () {
    notification.remove();
  }, 3000);
}
