import React from 'react';
import ProductGrid from './components/ProductGrid';
import places from './references.json';
import MainHeading from './components/MainHeading';
import SideBar from './components/SideBarContainer';
import SideBarList from './components/SideBarList';
import { Provider } from 'react-redux';
import store from './redux/store.js';

function App() {
  return (
    <Provider store={store} className="App">
      <SideBar>
        <h2>Your itinerary</h2>
        <SideBarList items={[
          {text: 'yo'},
          {text: 'yo'},
          {text: 'yo'},
          {text: 'yo'}
        ]}>
        </SideBarList>
      </SideBar>
      <MainHeading>
        See Canada
        <img src="assets/images/flag.png" />
      </MainHeading>
      <ProductGrid products={places} />
    </Provider>
  );
}

export default App;
