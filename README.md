<!-- # Socials - A Modern Messaging App

This project is a front-end application built using React and a variety of powerful libraries, designed to provide a smooth and intuitive messaging experience.

## Features

- **Send and receive text messages:** Communicate with friends and family through a streamlined messaging interface.
- **Visually appealing UI:** The app utilizes the `Ant Design` library and `Tailwind CSS` for a modern and visually appealing user interface.
- **Easy routing:** `React Router DOM` enables navigation between different sections of the app, providing a structured user experience.

## Libraries Used

- **Frontend Framework:** React
- **UI Libraries & Components:**
  - Ant Design
  - @tabler/icons-react
- **Styling & Utilities:**

  - Tailwind CSS
  - clsx
  - tailwind-merge

- **Other Important Libraries:**
  - React Router DOM
  - Moment.js
  - Match-Sorter
- **Development Tools:**
  - Vite
  - ESLint
  - Prettier

## Running the Application

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/socials.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd socials
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

5. **Open your browser:** The application will be accessible at `http://localhost:5173/`.

## Contributing

Contributions are always welcome! Please feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License. -->

````markdown
# Premji Assignment

## Project Overview

Premji Assignment is a fully responsive social platform designed for easy microblogging. The platform features a dynamic and user-friendly interface, enabling users to create, like, and comment on posts, as well as interact with friends through a collapsible chat window.

### Features

- **Fully Responsive Design**: Seamlessly adapts to various screen sizes and devices.
- **Dynamic Create Post Box**: Submit button appears only on focus.
- **Post Cards**:
  - Delete feature under the three dots menu.
  - Like and comment feature.
  - Modal to display the post fully along with comments.
- **Comments**:
  - Each comment can be liked.
  - Nested commenting is supported.
- **Home Screen**:
  - Collapsible chat window.
  - Collapsible friend list for improved UX.
  - Smooth animations to reveal the friend list.
  - Separate chat window opens in the bottom right corner for chatting, keeping the main content distraction-free.
- **Navigation Bar**:
  - Dismissible notifications dropdown.
  - Profile dropdown.

## Tech Stack

- **Frontend**:

  - React: ^18.2.0
  - Ant Design (antd): ^5.17.3
  - Tailwind CSS: ^3.4.3

- **Utilities**:
  - Moment: ^2.30.1
  - Tailwind Merge: ^2.3.0
  - @ant-design/icons: ^5.3.7
  - @tabler/icons-react: ^3.5.0
- **Build Tools**:
  - Vite: ^5.2.0
- **Linting and Formatting**:
  - ESLint: ^8.57.0
  - Prettier: ^3.2.5
  - Prettier Plugin TailwindCSS: ^0.5.14
  - ESLint Plugins:
    - react: ^7.34.1
    - react-hooks: ^4.6.0
    - react-refresh: ^0.4.6
- **Type Definitions**:
  - @types/react: ^18.2.66
  - @types/react-dom: ^18.2.22
- **CSS Processing**:
  - PostCSS: ^8.4.38
  - Autoprefixer: ^10.4.19

## Routes Guide

The application uses React Router for navigation. Below are the defined routes:

- **Landing Page**: `/`

  - Component: `LandingPage`
  - Description: The main landing page of the application.
  - Error Page: `ErrorPage`

- **Mobile Messaging Page**: `/mobilemessages`

  - Component: `MobileMessagingPage`
  - Description: The page for viewing all mobile messages.

- **Home Page**: `/home`

  - Component: `Home`
  - Description: The main home page where users see the feed and interact with posts.

- **Mobile Chat Page**: `/chat/:id`

  - Component: `MobileChatPage`
  - Description: The page for individual chat sessions, identified by `id`.

- **Error Page**: Used as the error element in case a route is not found or an error occurs.

## Installation and Running Locally

Follow these steps to run the project locally:

1. **Clone the repository**:

   ```sh
   git clone <repository-url>
   cd premji-assignment
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

3. **Start the development server**:

   ```sh
   npm run dev
   ```

## Notes

- Ensure you have Node.js and npm installed on your machine.
- For any issues or contributions, please open a new issue or submit a pull request.

## License

This project is licensed under the MIT License.

```


```
````
