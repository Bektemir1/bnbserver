import  {useState, useEffect} from 'react';
import ProductItem from '../../components/ProductItem/ProductItem';
import './CollectionPage.css'
import axios from 'axios'
import {useDispatch,useSelector} from 'react-redux';
import { getAllProducts } from '../../redux/products/product-action';
import Pagination from '../../components/Pagination/Pagination'


const CollectionPage = ({match,history}) =>{
  

    const [category,setCategory] = useState({})
    const products = useSelector(state=>state.product.products)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllProducts())

    },[])

    useEffect(()=>{
        const getCategory = async () => {
            await axios.get(`http://localhost:8000/api/getCategory/${match.params.id}`)
            .then((res)=>{
                setCategory(res.data.category)
               
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
                <div className=" collection-row">
                    {

                            products.filter(item=>item.category===category._id).length>8 ?
                               <Pagination
                                        data={products.filter(item=>item.category===category._id)}
                                        RenderComponent={ProductItem}
                                        pageLimit={3}
                                        dataLimit={6}
                                    />
                        :
                        products.filter(item=>item.category === category._id).map((item,index)=>{
                            return (
                                <div key={index} className="col-lg-3 col-md-4 col-sm-6 pr-0 pl-2">
                                    <ProductItem key={index} product={item} />
                                </div>
                            )
                        })
                       
                                  
                                        // <div key={index}  className="col-lg-3 col-md-4 col-sm-6 pr-0 pl-2"><ProductItem product={item}/></div>
                          
                    }
                           
                </div>
             
            </div>
           
        </div>
    )
}

export default CollectionPage;