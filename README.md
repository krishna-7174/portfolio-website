# portfolio-website
This is a portfolio website created by Krushna
# Personal Portfolio Website

## 📌 Overview
This is a **responsive portfolio website** built using **HTML, CSS, and JavaScript**. The website showcases personal details, skills, and projects in an interactive and visually appealing manner. It includes dynamic features like a **dark mode toggle** and **form validation** for better user experience.

## 🚀 Features
### ✅ Core Features:
- **Homepage**: A landing page with an introduction and navigation menu.
- **About Section**: Highlights personal details, skills, and career objectives.
- **Projects Section**: Displays at least three projects with descriptions and images.
- **Contact Section**: A functional contact form with JavaScript validation.
- **Navigation & Responsiveness**: A responsive navbar that works seamlessly on all devices.
- **Interactivity**:
  - JavaScript-powered **form validation** to ensure valid user input.
  - **Dark mode toggle** for better accessibility.
- **Styling**:
  - Modern CSS techniques including **flexbox, grid, hover effects, transitions, and animations**.
  - Consistent color scheme and typography.
- **Code Structure**:
  - Semantic HTML for better accessibility.
  - CSS media queries for responsiveness.
  - JavaScript for interactive elements.

## 🛠️ Technologies Used
- **HTML5** - For structuring the web pages.
- **CSS3** - For styling and animations.
- **JavaScript** - For interactivity, form validation, and dark mode toggle.


## 🎨 UI Breakdown
### 1️⃣ **Navbar**
- Contains links to different sections (Home, About, Projects, Contact).
- Includes a **dark mode toggle** button.

### 2️⃣ **Home Section**
- Displays a welcome message and tagline.

### 3️⃣ **About Section**
- Provides information about personal skills, career goals, and experience.

### 4️⃣ **Projects Section**
- Displays at least three projects using **cards layout**.

### 5️⃣ **Contact Section**
- Contains a form with fields for **name, email, and message**.
- Uses **JavaScript for form validation** before submission.

## 🌗 Dark Mode Toggle
- Clicking the 🌙 button toggles between **light and dark modes**.
- The `dark-mode` class is added to the `<body>` when dark mode is active.

## 🔍 JavaScript Functionality
### 🎯 **Dark Mode Toggle**
```js
document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

