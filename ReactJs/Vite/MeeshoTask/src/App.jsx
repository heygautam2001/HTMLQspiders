
//! ================ task on components , props , CSS =============
import ChildComponent from './ChildComponent';
import asset_data from '../assets/assets_data';

function App() {
 

  return (
    <>
    <h1>All Products Available</h1>
    <ChildComponent
    category = "Mens Collection"
    data = {asset_data.meeshotask.mens_data}
    />

    <ChildComponent
    category = "Women Lehnga Collection"
    data = {asset_data.meeshotask.womens_data}
    />

    <ChildComponent
    category = "Kids Collection"
    data = {asset_data.meeshotask.kids_data}
    />
    <ChildComponent
    category = "Premium Watches Collection"
    data = {asset_data.meeshotask.watch_data}
    />

    <ChildComponent
    category = "Footwear Collection"
    data = {asset_data.meeshotask.footwear}
    />
    </>
      
        

       
  )
}

export default App

