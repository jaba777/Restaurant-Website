import React from 'react'
import styled from 'styled-components';
import avatar1 from '../assets/avatar1.jpg';
import {TitleStyles,imageZoomEffect} from './ReusableStyles';

const Testimonials = () => {
  return (
    <Section id='testimonials'>
      <div className="container">
        <div className="title">
          <h1><span>What</span> Customers says</h1>
        </div>
        <div className="testimonials">
          <div className="testimonial">
            <div className="image">
              <img src={avatar1} alt="Avatar" />
            </div>
            <p> He Printing and Typesetting the industry. <span>Lorem Ipsum</span>{" "}
              has been the Industry's</p>
          </div>

          <div className="testimonial">
            <div className="image">
              <img src={avatar1} alt="Avatar" />
            </div>
            <p> He Printing and Typesetting the industry. <span>Lorem Ipsum</span>{" "}
              has been the Industry's</p>
          </div>

          <div className="testimonial">
            <div className="image">
              <img src={avatar1} alt="Avatar" />
            </div>
            <p> He Printing and Typesetting the industry. <span>Lorem Ipsum</span>{" "}
              has been the Industry's</p>
          </div>

        </div>
      </div>
    </Section>
  )
}

export default Testimonials

const Section =styled.section`
   margin: 5vw;
   background: linear-gradient(to right, #fc4958,#e85d05);
   position: relative;
   padding: 0.2rem;
   border-radius: 1.5rem;
   .container{
    margin: 0.5rem;
    padding-top: 1vw;
    padding-bottom: 4vw;
    background-color: #fff;
    border-radius: 1rem;
    ${TitleStyles};
    .title{
      position: absolute;
      top: -1rem;
      left: 25%;
      padding: 0 2rem;
      background-color: #fff;
    }
    .testimonials{
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 6vw;
      background-color: white;
      margin-top: 3vw;
      .testimonial{
        padding: 0 4vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 1rem;
        p{
          font-size: 1.1rem;
          line-height: 2rem;
          letter-spacing: 0.1rem;
        }
        ${imageZoomEffect}
        .image{
          max-height: 10rem;
          overflow: hidden;
          width: max-content;
          border-radius: 10rem;
          img{
            height: 10rem;
          }
        }
      }
    }
   }
   @media screen and (min-width: 260px) and (max-width: 1080px){
    .container{
      .title{
        position: initial;
        background-color: transparent;
      }
      .testimonials{
        flex-direction: column;
      }
    }
   }
`
