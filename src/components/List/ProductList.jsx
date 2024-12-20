'use client'
import React, { useEffect, useState } from 'react'
import { ProductCard } from '../card/ProductCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products data on the client
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:8000/api/products');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const slideLeft = () =>{
    document.getElementById('slider').scrollLeft -= 500;
  }

  const slideRight = () => {
    let slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <motion.div className="flex pt-3"  >
      <div className='min-h-[300px] w-[30px] ms-3 flex flex-col justify-center h-full items-center' onClick={()=>slideLeft()}><FontAwesomeIcon icon={faAngleLeft} className='p-3 rounded-full bg-orange-500'/></div>
      <div id='slider' className='pt-2 w-full overflow-x-scroll scroll scrollbar-hide whitespace-nowrap scroll-smooth'>
        {products.map((product,index)=>(
          <ProductCard product={product}/>))}
    </div>
    <div className='min-h-[300px] w-[30px] ms-3 flex flex-col justify-center  h-full items-center' onClick={()=>slideRight()}><FontAwesomeIcon icon={faAngleRight} className='p-3 rounded-full bg-orange-500'/></div>
    </motion.div>
  )
}

export default ProductList