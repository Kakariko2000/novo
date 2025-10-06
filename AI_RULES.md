# AI Development Rules for Wanderson Seven Portfolio App

This document outlines the technical stack and specific guidelines for library usage to maintain consistency, performance, and best practices within the Wanderson Seven portfolio application.

## Tech Stack

*   **React**: The core JavaScript library for building user interfaces.
*   **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript, enhancing code quality and maintainability.
*   **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs directly in your markup.
*   **Vite**: A fast development build tool that provides instant server start and lightning-fast Hot Module Replacement (HMR).
*   **React Router**: (To be implemented for routing) A standard library for routing in React applications, enabling navigation between different views.
*   **shadcn/ui**: A collection of re-usable components built with Radix UI and Tailwind CSS, providing accessible and customizable UI elements.
*   **Radix UI**: A set of unstyled, accessible UI components for building high-quality design systems.
*   **lucide-react**: A library providing a collection of beautiful and customizable SVG icons.

## Library Usage Rules

*   **UI Components**:
    *   **Primary Choice**: Always prefer `shadcn/ui` components for common UI elements (e.g., buttons, cards, forms, dialogs). These components are pre-styled with Tailwind CSS and are accessible.
    *   **Fallback/Advanced**: If a specific component is not available in `shadcn/ui` or requires highly custom, unopinionated behavior, `Radix UI` primitives can be used as a base.
*   **Styling**:
    *   **Exclusive Use**: All styling must be done using `Tailwind CSS` utility classes. Avoid writing custom CSS in separate `.css` files or using inline styles, except for global styles defined in `index.css` or specific gradient definitions.
    *   **Responsiveness**: Ensure all designs are responsive using Tailwind's responsive utility variants (e.g., `sm:`, `md:`, `lg:`).
*   **Icons**:
    *   **Standard**: Use icons from the `lucide-react` library for all graphical symbols.
*   **Routing**:
    *   **Implementation**: `React Router` should be used for all client-side navigation.
    *   **Route Definition**: All application routes should be defined and managed within the `src/App.tsx` file.
*   **State Management**:
    *   **Local State**: For component-specific state, use React's built-in `useState` and `useReducer` hooks.
    *   **Global State**: For application-wide state, leverage React Context API. Avoid external state management libraries unless the application's complexity explicitly demands it and is approved.
*   **API Interactions**:
    *   **Simplicity**: For making HTTP requests, use the native `fetch` API. Avoid adding external libraries like `axios` unless a specific feature (e.g., interceptors) is required.