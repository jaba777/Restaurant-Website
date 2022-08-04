import React,{useEffect, useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Products from './components/Products';
import NewsLetter from './components/Newsletter';
import Footer from './components/Footer';
import scrollreveal from "scrollreveal";
import Cart from "./cart/Cart";

function App() {

  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        #home,
        #services,
        #portfolio,
        #testimonials,
        #products,
        #newsletter,
        .footer
    `,
      {
        opacity: 0,
        interval: 200,
      }
    );
  }, []);

  const [express,setExpress]=useState([]);

  const AddHandler=(item)=>{
    const finder =express.find((x)=> x.id === item.id);
    if(finder){
      setExpress(express.map((x)=> x.id === item.id ? {...finder, qty: finder.qty +1} : x));
    } else{
      setExpress([...express,{...item, qty: 1}]);
    }
  }

  const RemoveHandler=(item)=>{
    const finder =express.find((x)=> x.id === item.id);
    if(finder.qty===1){
      setExpress(express.filter((x)=>x.id!==item.id));
    }else{
      setExpress(express.map((x)=> x.id === item.id ? {...finder, qty: finder.qty -1} : x));
    }
  }

  const cancelHandler=(item)=>{
    setExpress(express.filter((x)=>x.id!==item.id));
  }


  return (
    <>
     <Router>
     <ScrollTop />
     <Navbar express={express} />
    <Switch>
        
      <Route path='/' exact>
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <Products addHandler={AddHandler} />
        <NewsLetter />
      </Route>

      <Route path='/cart' exact>
      <Cart express={express} addHandler={AddHandler} onRemove={RemoveHandler} cancelHandler={cancelHandler} />
      </Route>

      </Switch>
      <Footer />
     </Router>

    </>
  );
}

export default App;
