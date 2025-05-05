// src/App.tsx
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {
  return (
    <div className="min-h-screen font-sans bg-gray-100 text-gray-800">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
