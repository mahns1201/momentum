const sectionTodo = document.querySelector("#section-todo");
const todoForm = document.querySelector("#todo-form");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// string Variables
const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
  loginForm.classList.add(HIDDEN_CLASS);
  todoForm.classList.remove(HIDDEN_CLASS);
}

function paintGreeting(username) {
  sectionTodo.classList.remove(HIDDEN_CLASS);
  greeting.innerText = `Hello, ${username}`;
  greeting.classList.remove(HIDDEN_CLASS);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername) {
  // greetings
  todoForm.classList.remove(HIDDEN_CLASS);
  paintGreeting(savedUsername);
} else {
  // loginForm
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", onLoginSubmit);
}
