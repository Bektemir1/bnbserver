import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
import $ from 'jquery';
import './Products.css'

class Products extends React.Component{

    slider(){
        $( document ).ready(function() {
            $(`.product-mobile`).slick({
                infinite: true,
                dots: false,
                arrows:false,
                responsive: [
                    {
                      breakpoint: 576,
                      settings: {
                        slidesToShow: 2,
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                      
                      }
                    }
                  ]
            });
        });
       
    }
   
    componentDidMount(){
        this.slider()
      
    }
    render(){
        return(
            <div className='container pl-0'>
                <div className="row product-desktop">
                   <div className="col-lg-3 col-md-4 col-sm-6 pright"><ProductItem/></div>
                   <div className="col-lg-3 col-md-4 col-sm-6 pright"><ProductItem/></div>
                   <div className="col-lg-3 col-md-4 col-sm-6 pright"><ProductItem/></div>
                   <div className="col-lg-3 col-md-4 col-sm-6 pright"><ProductItem/></div>
                </div>
                <div className="row product-mobile">
                   <div className="col-lg-3 col-md-4 col-sm-6 pright"><ProductItem/></div>
                   <div className="col-lg-3 col-md-4 col-sm-6 pright"><ProductItem/></div>
                   <div className="col-lg-3 col-md-4 col-sm-6 pright"><ProductItem/></div>
                   <div className="col-lg-3 col-md-4 col-sm-6 pright"><ProductItem/></div>
                </div>
            </div>
        )
    }
}
export default Products;