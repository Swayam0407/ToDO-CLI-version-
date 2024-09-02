//Read a JSON file
// const fs = require("fs");

// const data = fs.readFileSync('tes.json','utf-8');
// const jsondata = JSON.parse(data);

// console.log(jsondata.name);

// //Write a JSON File

// const fs = require("fs");

// // The data you want to write to the JSON file
// const data = {
//   name: "swayam",
//   age: 20,
// };

// // Convert the data to a JSON string with proper formatting
// const jsonData = JSON.stringify(data, null, 2);

// // Write the JSON string to a file named 'tes.json'
// fs.writeFileSync("tes.json", jsonData, "utf-8");

// console.log("JSON file has been written successfully.");

const { program } = require("commander");
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "todos.json");

let todos = [];

// Load existing todos from file if it exists
if (fs.existsSync(filePath)) {
  const data = fs.readFileSync(filePath, "utf-8");
  todos = JSON.parse(data);
}

let count = todos.length;

program
  .version("1.0.0")
  .name("ToDo CLI")
  .description("A CLI to cater to ToDo needs");

// Add command
program
  .command("add <item>")
  .description("Add a new item to the ToDo list")
  .action((item) => {
    const todo = {
      name: item,
      value: count,
      done: false, // New property to track completion
    };

    todos.push(todo);
    count++;

    // Save updated todos to file
    fs.writeFileSync(filePath, JSON.stringify(todos, null, 2), "utf-8");

    // Rendering all todos
    renderTodos();
  });

// Delete command
program
  .command("delete <index>")
  .description("Delete an item from the ToDo list by index")
  .action((index) => {
    const idx = parseInt(index, 10);

    if (isNaN(idx) || idx < 0 || idx >= todos.length) {
      console.log("Invalid index. Please provide a valid index.");
      return;
    }

    todos.splice(idx, 1);

    // Update value of remaining items
    todos.forEach((todo, i) => {
      todo.value = i;
    });

    count = todos.length; // Update count

    // Save updated todos to file
    fs.writeFileSync(filePath, JSON.stringify(todos, null, 2), "utf-8");

    // Render all todos
    renderTodos();
  });

// Mark done command
program
  .command("done <index>")
  .description("Mark an item as done by index")
  .action((index) => {
    const idx = parseInt(index, 10);

    if (isNaN(idx) || idx < 0 || idx >= todos.length) {
      console.log("Invalid index. Please provide a valid index.");
      return;
    }

    todos[idx].done = true; // Mark the item as done

    // Save updated todos to file
    fs.writeFileSync(filePath, JSON.stringify(todos, null, 2), "utf-8");

    // Render all todos
    renderTodos();
  });

// Function to render all todos
function renderTodos() {
  todos.forEach((todo, index) => {
    const status = todo.done ? "[DONE]" : "[PENDING]";
    console.log(`${index}: ${todo.name} ${status}`);
  });
}

program.parse(process.argv);
