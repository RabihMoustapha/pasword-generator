# 🔐 Random Password Generator

A simple, lightweight, and modern web application built with **HTML5**, **CSS3**, and **Vanilla JavaScript**. This tool helps users instantly generate secure, unpredictable 15-character passwords containing a mix of uppercase letters, lowercase letters, numbers, and special symbols.

---

## ✨ Features

* **Instant Generation:** Generates a random 15-character secure password at the click of a button.
* **Complex Character Set:** Utilizes letters (A-Z, a-z), numbers (0-9), and special characters (`~`, `!`, `@`, `#`, `$`, etc.) for maximum security.
* **Modern Minimalist UI:** Designed with a clean dark theme and vibrant accent colors for an optimal user experience.
* **Zero Dependencies:** Built entirely with vanilla web technologies—no frameworks, libraries, or package managers required.

---

## 📁 Directory Structure

```text
├── 📄 index.html        # Main HTML layout and structure
├── 📄 scripts.js        # Core JavaScript logic for password generation
└── 📄 styles.css        # Custom styling and dark theme layout
```

---

## 🚀 Getting Started
To run this project locally, follow these simple steps:

**Clone the repository:**

```Bash
git clone [https://github.com/your-username/random-password-generator.git](https://github.com/your-username/random-password-generator.git)
```

**Navigate to the project directory:**

```
Bash
cd random-password-generator
```

**Open the application:**

* Double-click the index.html file to open it in your preferred web browser, or use a live server extension (like Live Server in VS Code).

---

## 💡 How It Works
* Character Pool: An array containing alphanumeric and special characters is defined in scripts.js.

* Randomization: When the Generate Password button is clicked, the generate_password() function loops 15 times, picking a random index using Math.random() and Math.floor().

* DOM Update: The generated string is then injected into the DOM to display the secure password to the user.

---

## 📜 License
This project is open-source and available under the MIT License.
