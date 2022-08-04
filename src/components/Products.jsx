import React from 'react'
import styled from "styled-components";
import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';
import product4 from '../assets/product4.jpg';
import {TitleStyles,imageZoomEffect} from './ReusableStyles';

const Products = ({addHandler}) => {

  const data = [
    {
      id: 1,
      image: product1,
      name: "Chicken Burger",
      price: 22.4,
    },
    {
      id: 2,
      image: product2,
      name: "Toasted Bread",
      price: 5.5,
    },
    {
      id: 3,
      image: product3,
      name: "Egg Sandwich",
      price: 8,
    },

    {
      id: 4,
      image: product4,
      name: "Raspberry Cake",
      price: 12.5,
    },
  ];

  return (
    <Section id='products'>
      <div className="title">
        <h1>
          <span>Favourite</span> All the time!
        </h1>
      </div>
      <div className="products">
        {
          data.map((product,index)=>{
            return(
              <div className="product" key={index}>
                <div className="image">
                  <img src={product.image} alt={product.name} />
                </div>
                <h2>{product.name}</h2>
                <h3>${product.price}/pcs</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button onClick={()=>addHandler(product)}>Buy now</button>
              </div>
            )
          })
        }
      </div>
    </Section>
  )
}

export default Products

const Section = styled.section`
  margin: 5vw;
  ${TitleStyles};
  .products{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    margin-top: 3rem;
    .product{
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      justify-content: center;
      align-items: center;
      margin: 5px;
      h3{
        color: #fc4958;
      }
      p{
        text-align: center;
        font-size: 1.1rem;
        line-height: 2rem;
        letter-spacing: 0.1rem;
      }
      ${imageZoomEffect};
      .image{
        max-height: 20rem;
        overflow: hidden;
        border-radius: 1rem;
        img{
          height: 20rem;
          width: 15rem;
          object-fit: cover;
        }
      }
      button{
        border: none;
        padding: 1rem 4rem;
        color: #fff;
        font-size: 1.4rem;
        border-radius: 4rem;
        background: linear-gradient(to right, #fc4958, #e85d05);
        cursor: pointer;
        &:hover{
        background: linear-gradient(to left, #fc4958, #e85d05);
      }
      }
    }
  }
  @media screen  and (min-width: 260px) and (max-width: 720px){
    .products{
      grid-template-columns: repeat(auto-fill,minmax(250px, 1fr));
    }
  }

  @media screen  and (min-width: 720px) and (max-width: 1080px){
    .products{
      grid-template-columns: repeat(2, 1fr);
    }
  }
`
