import React from 'react'
import styled from "styled-components";
import { TitleStyles } from './ReusableStyles';

const Newsletter = () => {
  return (
    <Section id='newsletter'>
      <div className="title">
        <h1>
          <span>Subscribe</span> Newsletter
        </h1>
        <p>
        In orci felis, vehicula eu pellentesque et, pulvinar luctus sem. Integer aliquet semper porta. Nullam eu ligula dolor. In nec ipsum quis arcu commodo venenatis.
        </p>
      </div>
      <div className="container">
        <input type="text" placeholder='Search for food ...' />
        <button>Search</button>
      </div>
    </Section>
  )
}

export default Newsletter

const Section = styled.section`
  margin:  5vw;
  border: 0.01rem solid #000;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  ${TitleStyles};
  .container{
    background: linear-gradient(to right, #fc4958, #e85d05);
    padding: 0.3vw;
    input{
      border: none;
      padding: 1.5rem 8rem 1.5rem 1rem;
      font-size: 1.3rem;
      &:focus{
        outline: none;
      }
    }
    button{
      padding: 1rem 5rem;
      background-color: transparent;
      border: none;
      font-size: 1.3rem;
      color: #fff;
      text-transform: uppercase;
      letter-spacing: 0.5rem;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover{
        letter-spacing: 0.6rem;
        padding: 1rem 4.7rem;
      }
    }
  }
  @media screen  and (min-width: 260px) and (max-width: 1080px){
    .container{
      padding: 0.8rem;
      border-radius: 0.5rem;
      input{
        width: 75vw;
        padding: 0.5rem;
      }
      button{
        margin-top: 0.5rem;
        width: 100%;
        padding: 0.5rem;
        &:hover{
          padding: 0.5rem 1rem;
        }
      }
    }
  }
`
