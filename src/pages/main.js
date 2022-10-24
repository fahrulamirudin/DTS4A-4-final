import Footer from '../containers/Footer';
import OffcanvasMenu from '../containers/OffcanvasMenu';
import RecentlyViewed from '../containers/RecentlyViewed';
import SearchStart from '../containers/SearchStart';
import TopHeader from '../containers/TopHeader';
import TopNews from '../containers/TopNews';
import logo from '../logo.svg';

function Main() {
  return (
    <div className="App">
   <OffcanvasMenu/>
   <SearchStart/>
   <TopHeader/>
   <TopNews/>
   <RecentlyViewed/>
   <Footer/>
   </div>
  );
}

export default Main;
