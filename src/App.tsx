import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Loader from "./components/Loader";
import "./App.css";
import UserList from "./components/UserList";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Provider store={store}>
      <div className="app-container">
        {loading ? (
          <Loader />
        ) : (
            <UserList />
        )}
      </div>
    </Provider>
  );
}

export default App;
