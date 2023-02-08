import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
import UserList from "./UserList";

function App() {
  return (
    <Provider store={store}>
      <div className="App-container">
        {" "}
        <UserList />
      </div>
    </Provider>
  );
}

export default App;
