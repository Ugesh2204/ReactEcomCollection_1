import React, {useState, useEffect} from 'react'

const Product = () => {
    const [data, setData] = useState([]);
    const [filter,setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    console.log(loading);
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
                // console.log(filter)
            }

            return () => {
                componentMounted = false;
            }
        }
        getProducts();
     }, [])


      const Loading = () => {
        return(
            <>
                Loading...
            </>
        )
      }

      const ShowProducts = () => {
        return (
            <>
                <div className='buttons d-flex justify-content-center mb-5 pb-5'>
                    <button className='btn btn-outline-dark me-2'>All</button>
                    <button className='btn btn-outline-dark me-2'>Men's Clothing</button>
                    <button className='btn btn-outline-dark me-2'>Women's Clothing</button>
                    <button className='btn btn-outline-dark me-2'>Jewelery's Clothing</button>
                </div>
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