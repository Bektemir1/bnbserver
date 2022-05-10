import './Pagination.css'
import icons from '../../assets/icons/index'
import {useState} from 'react'
function Pagination({ data, RenderComponent,  pageLimit, dataLimit }) {
    const [pages] = useState(Math.round(data.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);
  
    function goToNextPage() {
       // not yet implemented

            setCurrentPage((page) => page + 1);
      
       
    }
  
    function goToPreviousPage() {
       // not yet implemented
       setCurrentPage((page) => page - 1);
    }
  
    function changePage(event) {
       // not yet implemented
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }
  
    const getPaginatedData = () => {
       // not yet implemented
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };
  
    const getPaginationGroup = () => {
       // not yet implemented

        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        
       
        return new Array(Math.round(data.length/dataLimit)).fill().map((_, idx) => start+ idx +1);
    };
  
    return (
        <div>
       
    
        {/* show the posts, 10 posts at a time */}
        <div className="row">
          {getPaginatedData().map((d, idx) => (
              <div key={idx} className="col-lg-3 col-md-4 col-sm-6 pr-0 pl-2">
                   <RenderComponent key={idx} product={d} />
              </div>
           
          ))}
        </div>
    
        {/* show the pagiantion
            it consists of next and previous buttons
            along with page numbers, in our case, 5 page
            numbers at a time
        */}
        {
          
            
            <div className="pagination">
            {/* previous button */}
            <button
              onClick={goToPreviousPage}
              className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
            >
              <img src={icons.arrowBottom}/>
            </button>
      
            {/* show page numbers */}
           
            {getPaginationGroup().map((item, index) => (
              <button
                key={index}
                onClick={changePage}
                className={`paginationItem ${currentPage === item ? 'active' : null}`}
              >
                <span>{item}</span>
              </button>
            ))}
      
            {/* next button */}
            <button
              onClick={goToNextPage}
              className={`next ${currentPage === Math.round(data.length/dataLimit)  ? 'disabled' : ''}`}
            >
               <img src={icons.arrowBottom}/>
            </button>
          </div>
          
        }
      </div>
    
    );
  }
  export default Pagination;