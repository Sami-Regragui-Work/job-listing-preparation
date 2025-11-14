# Job Listing Management - A Step-by-Step Guide

This project is a simple job listing management application built with HTML, CSS, and vanilla JavaScript. It demonstrates fundamental concepts of web development, including DOM manipulation, event handling, local storage, and modular JavaScript.

## Features

-   **Create, Read, Update, and Delete (CRUD)** job listings.
-   **Dynamic fields** for adding skills and projects, with the ability to remove them.
-   **Unique skills** enforcement to prevent duplicate entries.
-   **Form validation** to ensure data quality.
-   **Data persistence** using the browser's local storage.
-   **Modular JavaScript** with `import`/`export`.

## Project Structure

```
/
|-- index.html
|-- style.css
|-- js/
|   |-- main.js         # Main application logic and event listeners
|   |-- store.js        # Handles local storage operations
|   |-- ui.js           # Manages DOM manipulation
|   |-- validation.js   # Form validation logic
|-- README.md
```

---

## Step-by-Step Guide for Students

### Step 1: Setting up the HTML Structure (Already exists)

1.  Create an `index.html` file.
2.  Add the basic HTML boilerplate (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`).
3.  In the `<head>`, link to the `style.css` file.
4.  In the `<body>`, create the main container and the form for adding job listings. Include all the necessary input fields, labels, and buttons as shown in the final `index.html` file.
5.  Add a section to display the job listings.
6.  At the end of the `<body>`, add a `<script>` tag to import `js/main.js` as a module.

### Step 2: Styling the Application (Already exists)

1.  Create a `style.css` file.
2.  Add CSS rules to style the form, the job listings, and the overall layout. You can use the provided `style.css` as a reference to create a clean and user-friendly interface.

### Step 3: Setting up the JavaScript Modules (Already exists)

Create a `js` folder and inside it, create the following files:

-   `main.js`: This will be the main entry point of our application.
-   `store.js`: This module will handle all interactions with `localStorage`.
-   `ui.js`: This module will be responsible for all DOM manipulations.
-   `validation.js`: This module will contain the form validation logic.

### Step 4: Implementing the Validation Logic in `validation.js`

1.  Open the `js/validation.js` file.
2.  You will find the `validationRules` object already defined.
3.  Your task is to implement the `toggleError`, `validateField`, and `validateForm` functions.
4.  Follow the `// TODO` comments in the file to complete the functions.
5.  You can refer to the commented-out "Final Solution" at the top of the file if you get stuck.

### Step 5: Managing Data in `store.js`

1.  Open the `js/store.js` file.
2.  Your task is to implement the functions that handle CRUD operations with `localStorage`.
3.  Implement `getJobs`, `getJob`, `addJob`, `updateJob`, and `deleteJob`.
4.  Follow the `// TODO` comments for each function.
5.  The "Final Solution" is available at the top of the file for reference.

### Step 6: Manipulating the DOM with `ui.js`

1.  Open the `js/ui.js` file.
2.  This file is responsible for all DOM manipulation.
3.  Your task is to implement the functions to display jobs, clear the form, and manage dynamic fields.
4.  For functions that involve creating HTML, the `innerHTML` templates are provided for you.
5.  Follow the `// TODO` comments to complete the functions: `displayJobs`, `clearForm`, `populateForm`, `addSkillInput`, `addProjectBlock`, `getSkills`, `getProjects`, `setSkills`, and `setProjects`.
6.  The "Final Solution" is available at the top of the file for reference.

### Step 7: Bringing It All Together in `main.js`

1.  In `js/main.js`, import the functions from the other modules.
2.  Add an event listener for `DOMContentLoaded` to load the initial jobs.
3.  Add an event listener to the form to handle submission. This function will get the form data, validate it, ensure skills are unique, and then call the appropriate function from `store.js` to save the data.
4.  Add event listeners to the "Add Skill" and "Add Project" buttons.
5.  Use event delegation to add event listeners for the "Edit" and "Delete" buttons on the job listings, as well as the "Remove" buttons for skills and projects.

### Step 8: Running the Application

Open the `index.html` file in your web browser to see the application in action.
