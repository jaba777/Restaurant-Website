import React from 'react'
import styled from 'styled-components';
import Services1 from '../assets/Services1.png';
import Services2 from '../assets/Services2.png';
import Services3 from '../assets/Services3.png';
import { TitleStyles, imageZoomEffect } from './ReusableStyles'

const Services = () => {
  return (
    <Section id='services'>
      <div className="title">
        <h1 className="yellow">What we do ?</h1>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have 
          suffered alteration
           in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
      </div>
      <div className="services">
        <div className="service">
          <img src={Services2} alt="Service image" />
          <p>
          The standard chunk of Lorem Ipsum used since the 1500s is 
          <span>reproduced</span>{" "}
           below for those interested.
          </p>
          <button>Read More</button>
        </div>

        <div className="service yellow">
          <img src={Services1} alt="Service image" />
          <p>
          The standard chunk of Lorem Ipsum used since the 1500s is 
          <span>reproduced</span>{" "}
           below for those interested.
          </p>
          <button>Read More</button>
        </div>

        <div className="service">
          <img src={Services3} alt="Service image" />
          <p>
          The standard chunk of Lorem Ipsum used since the 1500s is 
          <span>reproduced</span>{" "}
           below for those interested.
          </p>
          <button>Read More</button>
        </div>

      </div>
    </Section>
  )
}

export default Services


const Section =styled.section`
  margin: 2rem 4rem;
  ${TitleStyles};
  .services{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10vw;
    margin-top: 4rem;
    .service{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5vw;
      padding: 0 3vw;
      img{
        height: 2.8rem;
      }
      p{
        text-align: center;
        line-height: 2rem;
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
        span{
                color: #fc4958 !important;
        }
      }
      button{
        padding: 0.6rem 3rem;
        letter-spacing: 0.2rem;
        border-radius: 2rem;
        border: none;
        font-size: 1.1rem;
        color: #fff;
        background-color: #fc4958;
        transition: 0.3s ease-in-out;
        cursor: pointer;
        &:hover{
          background-color: #f9c74f;
        }
      }
    }
    .yellow{
      button{
        background-color: #f9c74f;
        &:hover{
          background-color: #fc4958;
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px){
    margin: 2rem;
    .services{
      grid-template-columns: 1fr;
    }
  }
`
