# TODO - Manager
This is a simple to-do application built with React and Ant Design. The application allows users to add tasks with different priority levels, mark them as completed, and move them back to pending if needed.

## Features
<ul>
<li>Add new tasks with a specified priority (High, Medium, Low).</li>
<li>Mark tasks as completed.</li>
<li>Move tasks back to pending.</li>
<li>Delete tasks.</li>
</ul>

## Getting Started

### Prerequisites

Make sure you have the following installed on your local machine:
<ul>
<li>Node.js (v12 or later)</li>
<li>npm (v6 or later)</li>
</ul>

### Installation

Clone the repository:

```bash
git clone https://github.com/ssuryanshh/todo-app.git
```
Navigate to the project directory:

```bash
cd todo-app
```
Install the dependencies:
```bash
npm install 
```
### Running the Application

To start the application, run:
```
npm start
```
This will start the development server and open the application in your default web browser.

### Project Structure

```
todo-app/
├── src/
    ├── components/
    │   ├── Form.js
    │   ├── Form.css
    │   ├── Task.js
    │   └── Task.css
    ├── App.js
    ├── App.css
    ├── index.js
    └── index.css
```

### Usage
<ol>
<li>Open the application in your web browser.</li>
<li>Enter a new task in the input field and select a priority from the dropdown.</li>
<li>Click the "ADD TASK" button to add the task to the list.</li>
<li>To mark a task as completed, click the "Completed" button next to the task.</li>
<li>To move a completed task back to pending, click the "Pending" button next to the task.</li>
<li>To delete a task, click the "X" button next to the task.</li>
</ol>


## License
This project is licensed under the MIT License.

## Acknowledgments
React
Ant Design
