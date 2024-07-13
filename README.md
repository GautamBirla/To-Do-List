HTML (Structure)
HTML (HyperText Markup Language) provides the skeleton of the To-Do List application.
It includes elements such as:
An input field for users to type in new tasks.
A button to add the typed task to the list.
An unordered list (<ul>) or a container to display the tasks.
Each task might be represented by a list item (<li>) that includes the task name and buttons to mark the task as completed or to delete it.

CSS (Styling)
CSS (Cascading Style Sheets) is used to style the HTML elements.
This involves setting the size, colors, fonts, and layout of the input field, buttons, and task list.
You can use classes and IDs to apply specific styles to different elements.
CSS can also be used to visually distinguish between completed and incomplete tasks (e.g., using strikethrough text or different colors).

JavaScript (Functionality)
JavaScript is used to add interactivity and functionality to the To-Do List.
Functions are created to handle the following actions:
Adding a new task: Capturing the input value, creating a new list item, and appending it to the task list.
Marking a task as completed: Toggling a CSS class to apply a different style (e.g., strikethrough text).
Deleting a task: Removing the task item from the list.
Event listeners are used to detect user actions such as clicks on buttons and changes in input fields.

Putting It All Together
The HTML file links to the CSS and JavaScript files.
The JavaScript code interacts with the DOM (Document Object Model) to dynamically update the task list based on user actions.
The CSS ensures that the application is visually appealing and user-friendly.
