const button = document.querySelector(".send-message-btn"),
  container = document.querySelector(".send-message-container"),
  formContainer = document.querySelector('.send-message-container'),
  messageForm = formContainer.querySelector('.send-message-form')

function toggleForm() {
  button.classList.toggle("active")
  button.querySelector(".fa-paper-plane").classList.toggle("hidden")
  button.querySelector(".fa-times").classList.toggle("hidden")
  container.classList.toggle("hidden")
}

button.onclick = function () { toggleForm() }

messageForm.addEventListener('submit', function (e) {
  e.preventDefault()

  const mail = messageForm.querySelector("[name='mail']").value,
    message = messageForm.querySelector("[name='message']").value,
    xhr = new XMLHttpRequest()

  xhr.onload = function () {
    handleResponse(this.responseText)
  }

  xhr.open("POST", "sendmessage.php")
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
  xhr.send(
    "mail=" + mail +
    "&message=" + message
  )
})

function handleResponse(response) {
  if (response == 'OK') toggleForm()
}