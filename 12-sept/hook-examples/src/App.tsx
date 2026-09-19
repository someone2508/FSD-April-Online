import "./App.css";
import { Dashboard } from "./components/AuthDashboard/Dashboard";
import { AuthProvider } from "./Context/AuthContext";

function App() {
  return (
    <div>
      <AuthProvider>
        <Dashboard />
      </AuthProvider>
    </div>
  );
}

export default App;
