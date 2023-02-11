import { useEffect, useState, lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Loader from "./components/Loader";
import "./App.css";
const UserList = lazy(() => import("./components/UserList"));

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Provider store={store}>
      <div className="app-container">
        {loading ? (
          <Loader />
        ) : (
          <Suspense fallback={<Loader />}>
            <UserList />
          </Suspense>
        )}
      </div>
    </Provider>
  );
}

export default App;
