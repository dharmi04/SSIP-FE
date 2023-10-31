import React from "react"
import ReactDOM from "react-dom"
import App from "./App.jsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// Service worker registration
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("Service Worker registered with scope:", registration.scope)
      })
      .catch((error) => {
        console.error("Service Worker registration failed:", error)
      })
  })
}
