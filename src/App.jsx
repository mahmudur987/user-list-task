import { User } from "./pages/User/User";
import "./App.css";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="app">
      <Toaster />

      <div className="mt-5 w-100">
        <User />
      </div>
    </div>
  );
}

export default App;
