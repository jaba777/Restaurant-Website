import React,{ useState } from 'react';
import styled from 'styled-components'
import foodYummy from '../assets/FoodYummy.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { VscCreditCard } from "react-icons/vsc";
import { Link } from "react-router-dom";

export default  function Navbar({express}){

  const [navbarState, setNavbarState] = useState(true);

  const menuChangeHandler=()=>{
    setNavbarState(!navbarState);
  }

  return (
    <>
    <Nav>
      <div className="brand">
        <img src={foodYummy} alt="" />
        <div className="toggle" onClick={menuChangeHandler}>
        <button className='menu-btn'>
          {
            
              navbarState ? <GiHamburgerMenu /> : <VscChromeClose />
            
          }
        </button>
        </div>
      </div>
      <ul className={navbarState ? 'links' : 'visible'}>
        <li><Link to='/'>Home</Link></li>

        <li><a href="#services">Our Services</a></li>

        <li><a href="#portfolio">Portfolio</a></li>

        <li><a href="#testimonials">Testimonials</a></li>

        <li><a href="#products">Products</a></li>

        <li><a href="#newsletter">Newsletter</a></li>
      </ul>
      <div className='shop-Cart'>
        <Link to='/cart'>
        <VscCreditCard />
        <span>{express.length}</span>
        </Link>
      </div>
    </Nav>
    </>
  )
}

const Nav = styled.nav`
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4vw;
  
  .brand{
    img{
      margin-top: 1rem;
    }
    .toggle{
      display: none;
    }
  }
  
  .links{
    list-style: none;
    display: flex;
    gap: 2rem;
    transition: 0.5s;
    li{
      a{
        color: #fc4958;
        text-decoration: none;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        transition: 0.3s ease-in-out;
        &:hover{
          color: #f9c74f;
        }
      }
      .active{
        color: #f9c74f;
      }
    }
  }
  .shop-Cart{
    
    background-color: #fc4958;
    padding: 0.2rem 0.6rem; 
    border-radius: 1rem;
    font-size: 1.2rem;
    a{
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: #fff;
      text-decoration: none;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px){
    display: block;
    .brand{
      .toggle{
      display: block;
      position: absolute;
      top: 1.5rem;
      right: 1rem;
      .menu-btn{
        border: none;
        font-size: 1rem;
        cursor: pointer;
      }
    }
  }
  .links{
    display: block;
    height: 0;
    overflow: hidden;
    transition: 0.5s;
    li{
      margin-top: 1rem;
    }
  }
  .visible{
    transition: 0.5s;
    height: auto;
    overflow: visible;
    list-style: none;
    padding: 0.8rem 1rem;
    
    li{
      margin-top: 1rem;
      a{
        color: #fc4958;
        text-decoration: none;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        transition: 0.3s ease-in-out;
        &:hover{
          color: #f9c74f;
        }
      }
      .active{
        color: #f9c74f;
      }
    }
  }
  .shop-Cart{
    position: absolute;
    top: 1rem;
    right: 3rem;
  }
    
  }
`


