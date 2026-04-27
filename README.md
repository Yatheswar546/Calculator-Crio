# 🧮 React Calculator

A simple and interactive calculator built using React that performs basic arithmetic operations such as addition, subtraction, multiplication, and division.

---

## 🚀 Live Demo

https://calculator-crio.netlify.app/

---

## 📌 Features

* Single input field to display expressions
* Supports operations: **+ , - , * , /**
* Follows **BODMAS rule** for calculations
* Displays result dynamically on the UI
* Clear button (`C`) resets input and result
* Handles edge cases:

  * `0/0 → NaN`
  * `1/0 → Infinity`
  * Empty input with `=` → Error

---

## 🛠️ Tech Stack

* React (Vite)
* JavaScript (ES6+)
* CSS

---

## 📂 Project Setup

Run the project locally:

```bash id="6ds1o3"
# Clone repository
git clone <your-repo-link>

# Navigate to project folder
cd react-calculator

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## ⚙️ How It Works

1. User clicks on number and operator buttons
2. The input field updates with the expression
3. Clicking `=` evaluates the expression
4. Result is displayed below the input
5. Clicking `C` clears both input and result

---

## ⚠️ Important Notes

* All buttons are created using the `<button>` element
* Only one `<input>` field is used
* Only one `<div>` is used to display the result
* Expression evaluation is handled using JavaScript `eval()`

---

## 📦 Build for Production

```bash id="qnl5r2"
npm run build
```

---

## 🙌 Acknowledgements

* Crio.Do for the project idea

---