import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <>
      <Nav />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h1 className="text-3xl font-bold underline">Hello world!</h1>
                <p className="text-lg text-gray-700">
                  Welcome to your Vite + React + Tailwind CSS app.
                </p>
              </div>
            }
          />
          <Route
            path="/about"
            element={
              <div>
                <h1 className="text-3xl font-bold underline">About</h1>
                <p className="text-lg text-gray-700">This is the about page.</p>
              </div>
            }
          />
          <Route
            path="/contact"
            element={
              <div>
                <h1 className="text-3xl font-bold underline">Contact</h1>
                <p className="text-lg text-gray-700">
                  This is the contact page.
                </p>
              </div>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
