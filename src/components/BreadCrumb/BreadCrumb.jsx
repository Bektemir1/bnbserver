import axios from 'axios';
import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom'
import './BreadCrumb.css';
import { withRouter } from 'react-router-dom';
const BreadCrumb = ({match}) =>{

    const [product, setProduct] = useState({});
    
    useEffect(()=>{
        const getProduct = () => {
            axios.get('http://localhost:8000/api/getProduct/'+match.params.id)
            .then((res)=>{
                setProduct(res.data.product)
            })
            .catch((e)=>{
                console.log(e)
            })
            console.log(match.url.split('/'),"=======================")
            console.log(match.url)
        }
        getProduct()

    },[])
    return(
            <div className='component-path d-flex align-items-center'> 
               <div className="container "> 
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb bg-white">
                            <li className="breadcrumb-item"><Link to="/"> Главная</Link></li>
                            <li className="breadcrumb-item active">
                                <Link to={'/'+match.path}>{match.url.slice(1)}</Link>
                            </li>
                           
                            
                        </ol>
                    </nav>
                </div>
            </div>
        
    )
}

export default  withRouter(BreadCrumb);