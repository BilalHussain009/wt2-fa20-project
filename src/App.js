import { Provider } from 'react-redux';
import { Switch } from "react-router-dom";
import HomePage from './components/HomePage'
import configureStore from './store/configureStore';
import PublicRoute from './routers/PublicRoute';
import EditPage  from "./components/EditPage";
import SingleUser from './components/SingleUser';
import AddNewRecord from './components/AddNewRecord';

const store = configureStore();
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Switch>
          <PublicRoute path="/" component={HomePage} exact={true} />
          <PublicRoute path="/edit" component={EditPage}/>
          <PublicRoute path="/singleuser" component={SingleUser}/>
          <PublicRoute path="/addnew" component={AddNewRecord}/>
        </Switch>
      </Provider>
    </div>
  );
}
export default App;
