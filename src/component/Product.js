import React, {useState, useEffect} from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { slice } from 'lodash'

const Product = () => {
    const [data, setData] = useState([]);
    const [filter,setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    const [index, setIndex] = useState(5)
   
    console.log(filter);
     let componentMounted = true;


     useEffect(() => {
        const getProducts = async() => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            // console.log(response);
            if(componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(data)
            }

            return () => {
                componentMounted = false;
            }
        }
        getProducts();
     }, [])



     const loadMore = () => {

     }

      const Loading = () => {
        return(
            <>
                <div className='col-md-3'>
                    <Skeleton height={350}/>
                </div>
                <div className='col-md-3'>
                    <Skeleton height={350}/>
                </div>
                <div className='col-md-3'>
                    <Skeleton height={350}/>
                </div>
                <div className='col-md-3'>
                    <Skeleton height={350}/>
                </div>
                <div className='col-md-3'>
                    <Skeleton height={350}/>
                </div>
            </>
        )
      }

      const filterProduct = (cat) => {
        const updatedlist = data.filter((x)=>x.category === cat);
        setFilter(updatedlist);
      }

      const ShowProducts = () => {
        return (
            <>
                <div className='buttons d-flex justify-content-center mb-5 pb-5'>
                    <button className='btn btn-outline-dark me-2' onClick={()=>setFilter(data)}>All</button>
                    <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("jewelery")}>Jewelery's Clothing</button>
                </div>
                {filter.map((product)=>{
                    return(
                        <>
                            <div className='col-md-3 mb-4'>
                                <div className="card h-100 text-center p-4" key={product.id}>
                                    <img src={product.image} className="card-img-top" alt={product.title} height="250px"/>
                                    <div class="card-body">
                                        <h5 className="card-title mb-0">{product.title.substring(0,12)}...</h5>
                                        <p className="card-text lead fw-bold">{product.price}</p>
                                        <a href="#" className="btn btn-outline-dark">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}

                <button  onClick= {loadMore} type='button'> Load More +</button>
            </>
        )
      
      }

  return (
    <div className='container my-5 py-5'>
        <div className='row'>
            <div className='col-12'>
                <h1 className='display-6 fw-bolder text-center'>Lastest Products</h1>
                <hr/>
            </div>
        </div>
        <div className='row justify-content-center'>
            {/* state loading */}
            {loading ? <Loading/> :<ShowProducts/>}
        </div>
    </div>
  )
}

export default Product