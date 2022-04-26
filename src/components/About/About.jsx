import React from 'react';
import images from '../../assets/imgs/index'
import './About.css';

const About  = ({history}) =>{
    return(
       <div className="about">
            <div className='component-path d-flex align-items-center'> 
                <div className="container"> <span className='back-link' onClick={()=>history.push('/')}>Главная</span> <span style={{margin:"15px"}}>/</span> <span style={{color:'#979797'}}> О нас</span></div>
            </div>

            <div className='container '>
               <div className="row">
                    <div className="col-lg-7 col-md-7 d-flex">
                        <div className='about-img'>
                            <img alt="" src={images.about}/> 
                            <img alt="" src={images.about1}/>
                        </div>
                        <div className='about-img d-flex align-items-center'>
                            <img alt="" src={images.about2}/>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-5 d-flex align-items-center">
                        <div className="about-description">
                        <h2>О нас</h2>
                        <p>У нас Вы найдёте всё, что Вам так нужно. Ассортимент магазина постоянно расширяется и дополняется в зависимости от пожеланий клиентов.
                             Женская одежда из наших коллекций – это комфортная, стильная и качественная одежда не только на каждый день, но и для любых ситуаций по
                              доступным ценам.Натуральные материалы, продуманные силуэты, современный дизайн и возможность легкого сочетания моделей помогут 
                              Вам всегда оставаться в центре внимания и чувствовать себя уместно в любой ситуации.Если Вы любите одеваться ярко, модно и оригинально, у нас Вы найдете все необходимое, чтобы всегда быть в центре внимания. У нас большая коллекция для любого торжества и праздника, которая сможет удовлетворить вкус самой взыскательной модницы! А для деловых ситуаций, в которых Вам непременно нужно выглядеть элегантно и
                             стильно, мы предлагаем Вам одежду из коллекции "деловой стиль и офис". Мода постоянно диктует нам свои требования и для современной 
                             девушки, желающей идти в ногу со временем, важно иметь возможность постоянно пополнять свой гардероб стильной одеждой.</p>
                  
                        </div>
                        </div>
                </div>
            </div>
       </div>
    )
}
export default About;