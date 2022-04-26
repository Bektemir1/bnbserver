import React, {useState, useEffect} from 'react';
import ProductItem from '../../components/ProductItem/ProductItem';
import './CollectionPage.css'
import axios from 'axios'
import {connect} from 'react-redux';
import { getAllProducts } from '../../redux/products/product-action';

const CollectionPage = ({match,history,products,getAllProducts}) =>{
    
    const [category,setCategory] = useState({})

    useEffect(()=>{
        const getProducts = async()=>{
            await axios.get(`http://localhost:8000/api/getProducts`)
            .then((res)=>{
                getAllProducts(res.data.products);
               
            }).catch((e)=>{
                console.log(e)
            })
          
        }

      
    getProducts()

    },[])

    useEffect(()=>{
        const getCategory = async () => {
            await axios.get(`http://localhost:8000/api/getCategory/${match.params.id}`)
            .then((res)=>{
                setCategory(res.data.category)
                console.log(category)
                


            })
            .catch((e)=>{
                console.log(e)
            })
        }
        getCategory()
    },[])
    
    
    return(
        <div className="collection-page pb-5">
            <div className='component-path d-flex align-items-center'> 
                <div className="container "> 
                    <span className='back-link' onClick={()=>history.push('/')}>Главная</span> 
                    <span style={{margin:"10px"}}>/</span> 
                    <span className="back-link" onClick={()=>history.push('/collections')}>Коллекции</span>
                    <span style={{margin:"10px"}}>/</span>
                    <span style={{color:'#979797'}}>{category.name}</span>
                </div>
            </div>
            <div className="container">
                <h2 className='title-parent'>{category.name}</h2>
                <div className="row">
                    {
                        products.filter(item=>item.category === category).map((item,index)=>{
                            return <div key={index}  className="col-lg-3 col-md-4 col-sm-6 pr-0 pl-2"><ProductItem product={item}/></div>
                        })
                    }
                           
                </div>
            </div>
           
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    getAllProducts: item => dispatch(getAllProducts(item))
})
const mapStateToProps = ({product: {products}}) =>({
    products
})
export default connect(mapStateToProps, mapDispatchToProps)(CollectionPage);