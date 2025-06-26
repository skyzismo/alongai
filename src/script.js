document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("leadForm");
  const msg = document.getElementById("msg");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    msg.classList.remove("hidden");
    msg.textContent = "Mensagem enviada com sucesso!";
    form.reset();

    setTimeout(() => {
      msg.classList.add("hidden");
    }, 5000);
  });
});
