import { Outlet } from 'react-router-dom';
import Footer from './containers/Footer';
import OffcanvasMenu from './containers/OffcanvasMenu';
import RecentlyViewed from './containers/RecentlyViewed';
import SearchStart from './containers/SearchStart';
import TopHeader from './containers/TopHeader';
import TopNews from './containers/TopNews';
import logo from './logo.svg';

function App() {
  return (
    <div classname="App">
<Outlet/>
   </div>
  );
}

export default App;
