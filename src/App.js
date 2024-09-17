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





import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Categories from './Component/Caregories/Categories';

import NaturalPersonalCare from './Component/Pages/NaturalPersonalCare';
import Medicine from './Component/Pages/Medicine';
import Nutraceuticals from './Component/Pages/Nutraceuticals';
import Paridhan from './Component/Pages/Paridhan';
import Publication from './Component/Pages/Publication';
import Header from './Component/Header/Header'
import Navbar from './Component/Header/Navbar';
import Health from './Component/Pages/Health'
import Slider from './Component/Header/Slider'

import './App.css'


import HealthDetails from './Component/Pages/HealthDetails';
import DealsAndOffers from './DealsOfferPage/DealsandOffer';
import ShopCategory from './ShopCategory/ShopCategory'
import Cart from './Component/Pages/Cart';
import NewArrivals from './Arrivals/NewArrivals';
import Footer from './Footer/Footer';
import ParentComponent from './DealsOfferPage/ParentComponent';
import ThankYou from './Component/ThankYou';
import LoginModal from './Component/LoginModal';
import PaymentPage from './Component/Header/PaymentPage';
import ThankYouPage from './Component/Header/ThankyouPage';
import ProductDetails from './Arrivals/ProductDetails';
import AboutUs from './Footer/About';
import Food from './Component/Pages/Food'



function App() {
  return (
    <div className="App">
    <Header />
    <Navbar />
   
      <Routes>
      
      <Route path='/' element={
        <>
        <Slider/>
        
        <Categories/>
        <DealsAndOffers/>
        <ShopCategory />
    
  <NewArrivals />
        
        
        <Footer />
        </>
      }/>

     <Route path="/About" element={<AboutUs />} />

      <Route path="/PaymentPage" element={<PaymentPage />} />
        <Route path="/ThankYouPage" element={<ThankYouPage />} />

       <Route path="/Health" element={<Health />} />

       <Route path="/health/:id" element={<HealthDetails />} />
       <Route path='/Cart' element={<Cart/>} />
       <Route path="/product/:id" element={<ProductDetails />} />


       

      
        <Route path="/NaturalPersonalCare" element={<NaturalPersonalCare />} />
        <Route path='/Food' element={<Food/>}/>

        <Route path="/Medicine" element={<Medicine />} />
        <Route path="/Nutraceuticals" element={<Nutraceuticals />} />
        <Route path="/Paridhan" element={<Paridhan />} />
        <Route path="/Publication" element={<Publication />} />


        <Route path="/" element={<ParentComponent />} />
        <Route path="/product/:id" element={<HealthDetails />} />

     
     

       
       
      </Routes> 

     
     
    </div>
  );
}

export default App;


