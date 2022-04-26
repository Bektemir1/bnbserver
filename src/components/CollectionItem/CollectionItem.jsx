import React from 'react';
import {withRouter} from 'react-router-dom'

import './CollectionItem.css';

const CollectionItem = ({category,history}) =>{
   
    
    return(
        <div className='collection-item text-center'>
            <div className="collection-img">
                <img src={`http://localhost:8000/images/${category?.photo}`}  alt=""/>
            </div>
            <span className="collection-name">{category.name}</span>
            <button className='see-all' onClick={()=>history.push('/collection-page/'+category._id)}>Смотреть все <i className="fa-solid fa-chevron-right"></i></button>
            
        </div>
    )
}
export default withRouter(CollectionItem);