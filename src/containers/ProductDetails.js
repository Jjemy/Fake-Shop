import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { selectedProduct,removeSelectedProduct } from '../redux/actions/productAction';

export default function ProductDetails() {
  const product=useSelector((state)=>state.product)
  const {title,image,price,category,description}=product;
  const {productId} = useParams();
  const dispatch=useDispatch();
  const fetchProductDetails=async ()=>{
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(
      (error)=>{
        console.log('error:', error);
      }
    )
    dispatch(selectedProduct(response.data));
  };
  useEffect(()=>{
    if (productId && productId !='') fetchProductDetails();
    return(()=>{
      dispatch(removeSelectedProduct());
    })
  },[productId]);
  return (
    <div className='ui grid container' style={{paddingTop:'100px'}}>
      {Object.keys(product).length===0?(
        <div>...Loading</div>
      ):
      ( <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui verical divider">AND</div>
            <div className="middle aligned row">
              <div className="column 1p">
                <img src={image} alt="image" className="ui fluid image" />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2><a className="ui teal tag label">$ {price}</a></h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui verical animated button" tabIndex={0}>
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>)}
    </div>);
}