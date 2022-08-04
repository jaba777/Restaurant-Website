import React from 'react'

import styled from 'styled-components';

const Cart = ({express, addHandler, onRemove,cancelHandler}) => {
  const totalPrice=express.reduce((a,b)=>a+b.qty*b.price,0);

  return (
    <Section>
      <div className='cart-container'>
        <h1>Shopping Cart</h1>
      </div>
      <div className='full-conteiner'>
      {
        express.length === 0 ? (
          <h1>No Items are add in Cart</h1>
        ) : (
          <div className='cart-boxes'>
            {
              express.map((item,index)=>{
                return(
                  <div className='cart-box' key={index}>
                    <div className="image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <h2>{item.name}</h2>
                    <h3>${item.price}/pcs</h3>
                    <h4>X {item.qty}</h4>
                    <div className="cart-buttons">
                      <button className='add' onClick={()=>addHandler(item)} >+</button>
                      <button className="remove" onClick={()=>onRemove(item)}>-</button>
                      <button className="cancel" onClick={()=>cancelHandler(item)}>cancel</button>
                    </div>
                  </div>
                )
              })
            }
          </div>
        )
      }
      <div className='totalPrice'>
        <h3>TotalPrice: ${totalPrice.toFixed(2)}/pcs</h3>
      </div>
      </div>

    </Section>
  )
}

export default Cart

const Section = styled.section`
    padding: 0.5rem 1rem;
    .cart-container{
      margin-top: 10rem;
      h1{
        text-align: center;
        font-size: 1.8rem;
        color: #ff006a;
        
      }
    }
    .full-conteiner{
      margin: 2rem 5rem;
      .cart-boxes{
      
      .cart-box{
        margin: 2rem;
        padding: 0.5rem 0.8rem;
        width: 300px;
        max-width: 100%;
        border: 2px solid #e98c35;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 1rem;
        border-radius: 1rem;
        overflow: hidden;
        .image{
          width: 150px;
          height: 150px;
          transition: 0.6s;
          overflow: hidden;
          img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            overflow: hidden;
          }
          &:hover{
            transform: scale(1.2);
          }
        }
        .cart-buttons{
          display: flex;
          gap: 1rem;
          button{
            padding: 0.5rem 1rem;
            color: #fff;
            border: none;
            cursor: pointer;
          }
          .add{
            background: #2a89c9;
          }
          .remove{
            background-color: #ff006a;
          }
          .cancel{
            background-color: #c29b48;
          }
        }
      }
    }
    .totalPrice{
      border-top: 1px solid #000;
      text-align: center;
      h3{
        font-size: 2rem;
        color: #ff006a;
      }
    }
    }

    @media screen and (min-width: 260px) and (max-width: 1080px){
      .full-conteiner{
        margin: 2rem 0;
        width: 80%;
        .cart-boxes{
      
        .cart-box{
          padding: 5px 6px;
         
          .image{
            width: 100%;
          }

        }
    }

    }
  }
    
`
