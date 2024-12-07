// import React from 'react'

// import Navbar from './Component/Header/Navbar'
// import Header from './Component/Header/Header'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Slider from './Component/Header/Slider';
// import Categories from './Component/Caregories/Categories';
// import { Route, Routes } from 'react-router-dom';
// import Health from './Component/Pages/Health';
// import NaturalPersonalCare from './Component/Pages/NaturalPersonalCare';
// import Medicine from './Component/Pages/Medicine';
// import Paridhan from './Component/Pages/Paridhan';

// import Nutraceuticals from './Component/Pages/Nutraceuticals';
// import Publication from './Component/Pages/Publication';







// const App = () => {
//   return (
   
//     <div>
   
   
//     <Header />
    
//     <Navbar />
//     <Slider />

 

  
   

//     <Routes>
//     <Route path="/" element={<Categories />} />
//     <Route path="/Health" element={<Health />} />
//     <Route path="/NaturalPersonalCare" element={<NaturalPersonalCare />} />
//     <Route path="/Medicine" element={<Medicine />} />
//     <Route path="/Nutraceuticals" element={<Nutraceuticals />} />
//     <Route path="/Paridhan" element={<Paridhan />} />
//     <Route path="/Publication" element={<Publication />} />
 
//   </Routes>

    
  
    
 
 
      
//     </div>
 
//   )
// }

// export default App




import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Categories from './Component/Caregories/Categories';
import NaturalPersonalCare from './Component/Pages/NaturalPersonalCare';
import Medicine from './Component/Pages/Medicine';
import Nutraceuticals from './Component/Pages/Nutraceuticals';
import Paridhan from './Component/Pages/Paridhan';
import Publication from './Component/Pages/Publication';
import Header from './Component/Header/Header';
import Navbar from './Component/Header/Navbar';
import Health from './Component/Pages/Health';
import Slider from './Component/Header/Slider';
import HealthDetails from './Component/Pages/HealthDetails';
import DealsAndOffers from './DealsOfferPage/DealsandOffer';
import ShopCategory from './ShopCategory/ShopCategory';
import Cart from './Component/Pages/Cart';
import NewArrivals from './Arrivals/NewArrivals';
import Footer from './Footer/Footer';
import ParentComponent from './DealsOfferPage/ParentComponent';
import Payment from './Component/Header/Payment';
import ThankYouPage from './Component/Header/ThankyouPage';
import ProductDetails from './Arrivals/ProductDetails';
import AboutUs from './Footer/About';
import Food from './Component/Pages/Food';
import Login from './Component/Header/Login';
import { useSelector } from 'react-redux';

import './App.css';

function App() {
const [loggedInUser, setLoggedInUser] = useState('');
// Assuming you have combined reducers with 'auth' being the key for user state
const user = useSelector((state) => state.auth?.user || null); // Using optional chaining


const handleLogin = (email) => {
  setLoggedInUser(email); // Set the logged in user
};

  

  return (
    <div className="App">
    <Header />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <Categories />
              <DealsAndOffers />
              <ShopCategory />
              <NewArrivals />
              <Footer />
            </>
          }
        />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/ThankYouPage" element={<ThankYouPage />} />
        <Route path="/Health" element={<Health />} />
        <Route path="/health/:id" element={<HealthDetails />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/NaturalPersonalCare" element={<NaturalPersonalCare />} />
        <Route path="/Food" element={<Food />} />
        <Route path="/Medicine" element={<Medicine />} />
        <Route path="/Nutraceuticals" element={<Nutraceuticals />} />
        <Route path="/Paridhan" element={<Paridhan />} />
        <Route path="/Publication" element={<Publication />} />
        <Route path="/ParentComponent" element={<ParentComponent />} />
        <Route path="/Login" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </div>
  );
}

export default App;



// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './Component/Component/store';
// import PostForm from './Component/Component/PostForm';
// import PostList from './Component/Component/PostList';
// import Login from './Component/Component/Login';
// import Navbar from './Component/Component/Navbar';
// import PostDetails from './Component/Component/PostDetails';
// import CreatePost from './Component/Component/CreatePost';
// import SignIn from './Component/Component/SignIn';
// import { AuthProvider } from './Component/Component/AuthContext';

// const App = () => {
//   return (
//     // Wrap with both AuthProvider and Redux Provider
//     <AuthProvider>
//       <Provider store={store}>
//         <div>
//           <Navbar />
//           <Routes>
//             <Route path="/PostDetails" element={<PostList />} />
//             <Route path="/PostForm" element={<PostForm />} />
//             <Route path="/signin" element={<SignIn />} />
//             <Route path="/CreatePost" element={<CreatePost />} />
//             <Route path="/posts/:id" element={<PostDetails />} />
//             <Route path="/Login" element={<Login />} />
//           </Routes>
//         </div>
//       </Provider>
//     </AuthProvider>
//   );
// };

// export default App;

