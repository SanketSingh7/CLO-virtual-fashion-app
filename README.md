# # Closet Store App 🛍️

A modern, responsive content listing platform with filters, infinite scroll, and keyword search — built with React and Redux Toolkit.

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone "repo-url"
cd closet-store

### 2. Install dependencies
npm install


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.



### Tech Stack and Justification:
1. Redux Toolkit
Used for scalable state management. createSlice simplifies reducers and actions, while configureStore helps with store setup.

Why Redux?
It enables a single source of truth and predictable state transitions, making search + filter + pagination logic clean and composable.

2. React Router
Allows for future extensibility if multiple pages are needed (e.g., content details page). Currently used to handle route-based rendering.

3. IntersectionObserver API
Implemented via useRef and useCallback for efficient infinite scroll loading. No need for large external packages like react-infinite-scroll.

4. Functional Components + Hooks
Used useEffect, useState, and useSelector / useDispatch for a modern, cleaner React style — avoiding class-based complexity.

5. Vanilla CSS
Used a custom index.css file with minimal design system to maintain full styling control and performance.

🎨 Responsive Design
Mobile-first approach with auto-fill grid

Interactive hover effects for cards

Simple, clean, and accessible UI