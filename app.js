const { hash } = window.location;
const message = atob(hash.replace("#", ""));

if (message) {
  const messageForm = document.querySelector("#message-form");
  messageForm.classList.toggle("hide");

  const messageShow = document.querySelector("#message-show");
  messageShow.classList.toggle("hide");

  const h1 = document.querySelector("h1");
  h1.innerHTML = message;
}

const form = document.querySelector("form");
form.addEventListener("submit", e => {
  e.preventDefault();

  // hides and shows forms
  const panels = document.querySelectorAll(".card-panel");
  for (const panel of panels) {
    panel.classList.toggle("hide");
  }

  // secret message
  const input = document.querySelector("#message-input");
  const encrypted = btoa(input.value);

  // share link
  const link = document.querySelector("#link-input");
  link.value = `${window.location}#${encrypted}`;
  // auto highlights link on creation
  link.select();
});
