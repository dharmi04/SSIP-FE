import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { AR } from "./AR.jsx"
import { CubeContainer } from "./components/AR/cube/CubeContainer.jsx"
import { XrCubeContainer } from "./components/AR/xr-cube/XrCubeContainer.jsx"
import { XrHitCubeContainer } from "./components/AR/xr-hit-cube/XrHitCubeContainer.jsx"
import { XrHitModelContainer } from "./components/AR/xr-hit-model/XrHitModelContainer.jsx"
import "./index.css"
import * as serviceWorkerRegistration from "./serviceWorkerRegistration.js"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <AR />,
  },
  {
    path: "/ar",
    element: <CubeContainer />,
  },
  {
    path: "/xr-cube",
    element: <XrCubeContainer />,
  },
  {
    path: "/xr-hit-cube",
    element: <XrHitCubeContainer />,
  },
  {
    path: "/xr-hit-model",
    element: <XrHitModelContainer />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register()
