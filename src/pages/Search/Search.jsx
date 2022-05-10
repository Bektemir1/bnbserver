import React,{useEffect,useState} from 'react';
import axios from 'axios';
import './Search.css';
import {connect} from 'react-redux';
import { getAllProducts } from '../../redux/products/product-action';
import ProductItem from '../../components/ProductItem/ProductItem';

const Search = ({history,getAllProducts,products,search,interestingProducts}) => {
    const [categories,setScategories] = useState([])
    

    useEffect(()=>{
       getAllProducts()

    },[])
    useEffect(()=>{
        const getCategories = () =>{
            axios.get('http://localhost:8000/api/getCategories')
            .then((res)=>{
                setScategories(res.data.categories)
            })
        }
        getCategories()
    },[])

    
    return(
        <div className="search-page pb-5"> 

             <div className='component-path d-flex align-items-center'> 
                <div className="container "> 
                    <span className='back-link' onClick={()=>history.push('/')}>Главная</span> 
                    <span style={{margin:"10px"}}>/</span> 
                    <span>Результаты поиска</span>
                </div>
            </div>

            <div className="container">
                <div className="title-parent ">Результаты поиска по запросу: {search}</div>
                    {
                        !search || !products.length ? <div>
                        <div style={{marginTop: "-10px", marginBottom:'20px'}}>По Вашему запросу ничего не найдено.</div>
                        <div className='title-parent'>Возможно вас заинтересует</div>
                    </div>
                    : ''
                    }

                <div className="row search-row">
                    {
                       search &&  products.length ? products.map((item,index)=>{
                            return <div key={index}  className="col-lg-3 col-md-4 col-sm-6 pr-0 pl-2"><ProductItem product={item}/></div>
                        }) : 
                         
                       
                                categories.map((category)=>{
                                    let count= false;
                                      
                                        return interestingProducts.map((product)=>{
                                           if(count){
                                                return null;
                                            }
                                            else{
                                                if(product.category === category._id){
                                                    count=true;
                                                    return <div key={product._id }  className="col-lg-3 col-md-4 col-sm-6 pr-0 pl-2"><ProductItem product={product}/></div>
                                                }
                                            }
                                        })
                                    })
                            }
                           
                </div>
            </div>
            
        </div>
    )
}
const mapStateToProps = ({product: {products,search}}) =>({
    products: products.filter(item=>item.name.toLowerCase().includes(search.toLowerCase())),
    interestingProducts: products,
    search,
    
})

const mapDispatchToProps = dispatch => ({
    getAllProducts: item => dispatch(getAllProducts(item))
})
 export default connect(mapStateToProps,mapDispatchToProps)(Search);