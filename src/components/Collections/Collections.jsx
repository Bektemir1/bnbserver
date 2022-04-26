import React,{useState, useEffect} from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';
import './Collections.css'
import axios from 'axios';

const Collections = ({history}) =>{
  const [categories, setCategories] = useState([])
    
    useEffect(()=>{
        const getCategories= async()=>{
            await axios.get(`http://localhost:8000/api/getCategories`)
            .then((res)=>{
                setCategories(res.data.categories) 
            })
            .catch((e)=>{
                console.log(e)
            })    
    
        }
        
        getCategories()
       
   },[])

        return(
           <div className="collections pb-5">
                <div className='component-path d-flex align-items-center'> 
                    <div className="container "> <span className='back-link' onClick={()=>history.push('/')}>Главная</span> <span style={{margin:"10px"}}>/</span> <span style={{color:'#979797'}}> Коллекции</span></div>
                </div>
                <div className='container'>
                    <h2 className="title-parent">Коллекции</h2>
                    <div className="row collection-row">
                            {   
                                 categories.map((item,index)=> {
                                    return  <div  key={index} className="col-lg-3 col-md-4 col-sm-6 pr-0 pl-2 "><CollectionItem  category={item}/></div>
                                })
                            }
                    </div>
                </div>
           </div>
        )
    }




export default Collections;