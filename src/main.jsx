// Import StrictMode from React for additional development-time checks and warnings
import { StrictMode } from "react";

// Import createRoot from React DOM for the new React 18 root API
import { createRoot } from "react-dom/client";

// Import global CSS styles that apply to the entire application
import "./index.css";

// Import the main App component that contains all application logic and routing
import App from "./App.jsx";

// Create a React root using the new React 18 createRoot API
// This targets the HTML element with id 'root' in index.html
createRoot(document.getElementById("root")).render(
  // StrictMode wrapper enables additional checks and warnings in development
  // It helps identify unsafe lifecycles, legacy API usage, and other issues
  <StrictMode>
    {/* Render the main App component which contains the entire application */}
    <App />
  </StrictMode>
);
