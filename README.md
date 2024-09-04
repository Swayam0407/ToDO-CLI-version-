# ToDo CLI

A simple Command-Line Interface (CLI) tool to manage your ToDo list. This CLI allows you to add, delete, and mark tasks as done, while saving your tasks in a JSON file.

## Features

- **Add a ToDo item**: Easily add tasks to your list.
- **Delete a ToDo item**: Remove tasks from your list using their index.
- **Mark as done**: Mark tasks as complete.
- **Persistent storage**: Saves your tasks in a `todos.json` file for persistence.

## Prerequisites

- Node.js (v12 or higher)

## Installation

1. Clone the repository or download the project files.

   ```bash
   git clone https://github.com/yourusername/todo-cli.git
   cd todo-cli

2. Install the dependencies:

   ```bash
   npm install

## Usage

Add a new task to your ToDo list:

```bash
node todo add "Your ToDo item"
```

Remove a task from your ToDo list by its index:

```bash
node todo delete <index>
```

Mark a task as completed by its index:

```bash
node todo done <index>
```











