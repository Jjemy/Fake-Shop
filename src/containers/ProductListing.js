import React,{useEffect} from 'react';
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import {setProduct} from '../redux/actions/productAction';
import ProductComponent from './ProductComponent';

export default function ProductListing() {
  const products=useSelector((state)=>state);
  const dispatch=useDispatch();
  const fetchProducts=async()=>{
    const response = await axios.get('https://fakestoreapi.com/products').catch(
      (error)=>{
        console.log('error:', error);
      }
    )
    dispatch(setProduct(response.data)); 
  }
  useEffect(()=>{
    fetchProducts();
  },[]);
  return (
    <div className='ui grid container' style={{paddingTop:'100px'}}>
     <ProductComponent />
    </div>);
}
