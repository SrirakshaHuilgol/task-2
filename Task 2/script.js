// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if(name === "" || email === "" || message === "") {
    alert("⚠️ Please fill all fields before submitting.");
  } else if(!/\S+@\S+\.\S+/.test(email)) {
    alert("⚠️ Please enter a valid email address.");
  } else {
    alert("✅ Form submitted successfully!");
    this.reset();
  }
});

// To-Do List
function addTask() {
  let taskInput = document.getElementById("todoInput");
  let taskText = taskInput.value.trim();
  if(taskText === "") {
    alert("⚠️ Please enter a task.");
    return;
  }

  let li = document.createElement("li");
  li.textContent = taskText;

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = function() {
    li.remove();
  };

  li.appendChild(deleteBtn);
  document.getElementById("todoList").appendChild(li);
  taskInput.value = "";
}
