const form = document.querySelector("form");
form.addEventListener("submit", e => {
  e.preventDefault();

  // secret message
  const input = document.querySelector("#message-input");
  const encrypted = btoa(input.value);

  // share link
  const link = document.querySelector("#link-input");
  link.value = encrypted;
});
