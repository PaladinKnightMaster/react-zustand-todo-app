# 📝 **Awesome Todo List App**

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-%E2%9C%93-blue)
![React](https://img.shields.io/badge/React-%E2%9C%93-blue)
![Zustand](https://img.shields.io/badge/Zustand-%E2%9C%93-green)
![SCSS](https://img.shields.io/badge/SCSS-%E2%9C%93-pink)

## 🚀 **Project Overview**

Welcome to the **Awesome Todo List App**! This is a modern, responsive, and feature-rich Todo List application built with **React**, **TypeScript**, and **Zustand** for state management. Styled using **SCSS Modules**, this app offers a seamless user experience with persistent state management, ensuring your todos are saved across sessions.

## 🌟 **Features**

- **Add Todos:** Easily add new tasks to your todo list.
- **Delete Todos:** Remove tasks that are no longer needed.
- **Toggle Completion:** Mark tasks as completed or incomplete with a simple click.
- **Persistent Storage:** Todos are saved in `localStorage`, ensuring they persist across browser sessions.
- **Unique Identifiers:** Each todo has a unique UUID, ensuring reliable identification.
- **Performance Optimizations:** Utilizes `React.memo` to prevent unnecessary re-renders.
- **Responsive Design:** Fully responsive layout that adapts to all screen sizes.
- **Dark and Light Modes:** Automatically adapts to your system's color scheme preference.
- **Accessible UI:** Designed with accessibility in mind for an inclusive user experience.

## 🛠 **Technologies Used**

- **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces.
- **[TypeScript](https://www.typescriptlang.org/)**: A strongly typed programming language that builds on JavaScript.
- **[Zustand](https://github.com/pmndrs/zustand)**: A fast and scalable state-management solution.
- **[SCSS Modules](https://github.com/css-modules/css-modules)**: Enhanced CSS with nesting, variables, and more.
- **[UUID](https://github.com/uuidjs/uuid)**: For generating unique identifiers.
- **[Create React App](https://create-react-app.dev/)**: Set up a modern web app by running one command.

## 📸 **Screenshots**

![Todo List Screenshot-1](https://github.com/PaladinKnightMaster/react-zustand-todo-app/blob/main/Screenshot_1.png)
![Todo List Screenshot-2](https://github.com/PaladinKnightMaster/react-zustand-todo-app/blob/main/Screenshot_2.png)

## 🔧 **Installation**

Follow these steps to set up the project locally:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/paladinknightmaster/react-zustand-todo-app.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd react-zustand-todo-app
   ```

3. **Install Dependencies**

   Ensure you have [Node.js](https://nodejs.org/) installed. Then, install the required packages:

   ```bash
   npm install
   ```

4. **Start the Development Server**

   ```bash
   npm start
   ```

   The app should automatically open in your default browser at `http://localhost:5173`. If it doesn't, you can manually navigate to that URL.

## 🏃‍♂️ **Usage**

Once the development server is running:

1. **Add a Todo**
   - Enter your task in the input box.
   - Click the "Add" button or press **Enter**.
   - The new todo will appear in the list below.

2. **Toggle Completion**
   - Click on the todo text to mark it as completed or incomplete.
   - Completed tasks will have a line-through effect.

3. **Delete a Todo**
   - Click the "Delete" button next to the todo you wish to remove.

4. **Persisted Todos**
   - Your todos are saved in `localStorage`.
   - Refreshing the page or reopening the browser will retain your todo list.

## 📁 **Project Structure**

```
react-zustand-todo-app/
├── node_modules/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── TodoList.tsx
│   │   └── TodoList.module.scss
│   ├── store/
│   │   └── todoStore.ts
│   ├── types/
│   │   └── types.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .gitignore
├── package.json
├── README.md
├── tsconfig.json
└── ...
```

## 👨‍💻 **Contributing**

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. **Fork the Repository**

2. **Create a New Branch**

   ```bash
   git checkout -b feature/YourFeatureName
   ```

3. **Make Your Changes**

4. **Commit Your Changes**

   ```bash
   git commit -m "Add some feature"
   ```

5. **Push to the Branch**

   ```bash
   git push origin feature/YourFeatureName
   ```

6. **Open a Pull Request**

## 📝 **License**

This project is licensed under the [MIT License](LICENSE).

## 📞 **Contact**

For any questions or feedback, feel free to reach out:

- **Email:** paladinknight.master@gmail.com
- **GitHub:** [PaladinKnightMaster](https://github.com/paladinknightmaster)