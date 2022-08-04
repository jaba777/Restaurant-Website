import React from 'react'
import styled from 'styled-components';
import background from '../assets/portfolio.jpg';

const Portfolio = () => {
  return (
    <Section id='portfolio'>
      <div className="background">
        <img src={background} alt="Portfolio Background Image" />
      </div>
      <div className="content">
        <h1>Buy Premium Pan Free Hand Toast!</h1>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
        <button>Buy Now</button>
      </div>
    </Section>
  )
}

export default Portfolio;

const Section =styled.section`
  margin: 5rem 5vw;
  height: 80vh;
  position: relative;
  border-radius: 5rem;
  &:hover{
    .background{
      img{
        transform: scale(1.2);
      }
    }
  }
  .background{
    height: 100%;
    max-width: 100%;
    overflow: hidden;
    border-radius: 1rem;
    img{
      object-fit: cover;
      width: 100%;
      height: 100%;
      filter: brightness(60%);
      border-radius: 1rem;
      transition: 0.8s ease-in-out;
    }
  }
  .content{
    position: absolute;
    top: 20%;
    left: 10%;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    h1{
      font-size: 3rem;
      width: 50%;
    }
    h2{
      width: 60%;
    }
    button{
      border: none;
      padding: 1rem 4rem;
      font-size: 1.4rem;
      color: #fff;
      background: linear-gradient(to right, #fc4958, #e85d05);
      border-radius: 4rem;
      transition: 0.5s ease-in-out;
      cursor: pointer;
      text-transform: uppercase;
      &:hover{
        background: linear-gradient(to left, #fc4958, #e85d05);
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px){
    .content{
      
      h1{
        width: 90%;
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }
      h2{
        font-size: 1.2rem;
        width: 90%;
        margin-bottom: 1rem;
      }
      button{
        padding: 1rem 2rem;
        font-size: 1rem;
      }
    }
  }
`
