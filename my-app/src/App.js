import 'swiper/swiper.min.css';
import React, {Fragment} from 'react';

import Header from './components/Header/Header.component';
import NavigationPath from './components/Navigation/navigation.component'
import Footer from './components/footer/footer.component';

import './App.scss';

function App() {
  return (
    <Fragment>
      <Header/>
      <NavigationPath />
      <Footer />
    </Fragment>
  );
}

export default App;
