const idInput = document.body.querySelector(".userId");
const pwdInput = document.body.querySelector(".userPassword");

const buttonColorChange = () => {
  return idInput.value || pwdInput.value
    ? (document.body.querySelector(".login_btn").style.backgroundColor = "blue")
    : (document.body.querySelector(".login_btn").style.backgroundColor =
        "rgba(var(--d69, 0, 149, 246), 0.3)");
};

idInput.addEventListener("keyup", buttonColorChange);
pwdInput.addEventListener("keyup", buttonColorChange);
