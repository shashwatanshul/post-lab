# Project Documentation

This document provides a comprehensive overview of the project, including technology choices, challenges faced, implementation details, and design strategies.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and npm installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

### Installation & Setup

1.  **Download the project**: Download the zip file of the project from the GitHub repository.
2.  **Extract the files**: Extract the contents of the zip file to a folder of your choice.
3.  **Navigate to the project directory**:
    ```sh
    cd post-lab
    ```
4.  **Install NPM packages**:
    ```sh
    npm install
    ```
    This will install all the necessary dependencies and set up the `node_modules` folder.

### Running the Project

To run the project in development mode, which is ideal for making changes and seeing them live, use the following command:

```sh
npm run dev
```

This will start the Vite development server. You can view the project in your browser at the local URL provided in the terminal (usually `http://localhost:5173/`).

### Building for Production

When you are ready to deploy the project, you need to create a production-ready build. This can be done with the following command:

```sh
npm run build
```

This command will create a `dist` folder in the project root. This folder contains the optimized and minified files that are ready to be hosted on a web server.

## Technology Choices and Reasoning

- **React**: Chosen for its component-based architecture, which promotes reusability and maintainability. Its large ecosystem and community support make it a robust choice for building modern user interfaces.
- **Vite**: Selected as the build tool for its extremely fast Hot Module Replacement (HMR) and quick server start-up, significantly improving the development experience.
- **Tailwind CSS**: Used for styling to enable rapid UI development with a utility-first approach. It allows for building custom designs without leaving the HTML and helps in maintaining a consistent design system.
- **Framer Motion**: The primary library for animations, chosen for its simple and declarative API for creating complex animations, especially for UI elements and page transitions. The `layoutId` prop is particularly useful for shared element transitions, as seen in the animated navigation pill.
- **GSAP (GreenSock Animation Platform)**: Used for more complex, timeline-based animations that require precise control over animation sequences, such as the scrolling text effects.
- **React Router DOM**: For handling client-side routing, enabling a single-page application (SPA) experience with different pages like 'About' and 'Contact'.
- **Lenis**: Integrated for smooth scrolling, enhancing the overall user experience by providing a more fluid and polished feel to page navigation.

## Challenges Faced and Solutions

- **Implementing the Animated Bottom Navigation**: A key challenge was creating a sleek, animated bottom navigation bar with a "pill" that smoothly transitions between active links.

  - **Solution**: This was achieved using `Framer Motion`. The `motion.div` component with a `layoutId` was used for the pill, which allows Framer Motion to automatically animate its position and size changes between different tabs. The `useLocation` hook from `react-router-dom` was used to determine the active link and trigger the animation on route changes. Keyboard accessibility was also implemented for switching between tabs.

- **Complex Scroll-based Animations**: Creating engaging scroll-triggered animations, like text reveals or video expansions, was another challenge.

  - **Solution**: A combination of `GSAP` and custom React hooks (`useGSAP`, `useScrollTrigger`) was employed. GSAP's ScrollTrigger plugin was perfect for creating animations that are tied to the scroll position, providing fine-grained control over the animation's start, end, and progress.

- **Layout Shift with Fixed Navigation**: When switching from a top header to a fixed bottom navigation, a challenge was to prevent the navigation from overlapping content at the bottom of the page.
  - **Solution**: A padding-bottom was added to the main content area (`main` element) to ensure there is always enough space for the bottom navigation, preventing any content from being obscured.

## Animation Implementation Approach

- The project heavily relies on animations to create a dynamic and engaging user experience. The approach is a combination of two powerful libraries:
  - **Framer Motion**: Used for UI-centric animations, transitions, and gestures. It excels at component-based animations, like the animated navigation, button hover effects, and page transitions. Its declarative nature makes it easy to integrate with React components.
  - **GSAP**: Leveraged for more complex, performance-critical, and timeline-based animations, especially those tied to scroll events. The custom `useGSAP` hook likely encapsulates GSAP logic to be used declaratively within React components.

## Responsive Design Strategy

- The website is designed to be fully responsive, ensuring a great user experience across a wide range of devices, from mobile phones to desktops.
- The primary strategy involves using **Tailwind CSS's** responsive utility variants. Breakpoints (`sm`, `md`, `lg`, `xl`) are used to apply different styles at different screen sizes.
- A mobile-first approach was adopted, where the base styles are for mobile devices, and media queries are used to add or modify styles for larger screens.

## Time Allocation Breakdown

- **Initial Setup & Planning**: 10%
- **Component Development**: 40%
- **Animation & Styling**: 30%
- **Responsiveness & Testing**: 20%
