import React from 'react';
import icons from '../../assets/icons/index'
import './Benefits.css';

const Benefits  = () =>{
    return(
        <div className='container  p-0'>
            <div className="row benefit">
                <div className="col-lg-3 col-md-4 col-sm-2 pr-0 mb-3">
                   <div className="benefit-box">
                        <img src={icons.money} alt=""/>
                        <h2 className='benefit-title'>Удобные способы оплаты</h2>
                        <span className='benefit-text'>Мы предлагаем возможность безналичной оплаты</span>
                   </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-2 pr-0 mb-3">
                   <div className="benefit-box">
                        <img src={icons.truck} alt=""/>
                        <h2 className='benefit-title'>Cвоевремнная доставка</h2>
                        <span className='benefit-text'>100% гарантия возврата товара - 14 дней на возврат, без скандалов и истерик.</span>
                   </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-2 pr-0 mb-3">
                   <div className="benefit-box">
                        <img src={icons.headphone} alt=""/>
                        <h2 className='benefit-title'>Профессиональная консультация</h2>
                        <span className='benefit-text'>Мы проконсультируем и индивидуально подойдем к Вашему заказу </span>
                   </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-2 pr-0 mb-3">
                   <div className="benefit-box">
                        <img src={icons.shop} alt=""/>
                        <h2 className='benefit-title'>Акции и бонусы для покупателей</h2>
                        <span className='benefit-text'>Промокоды со скидками для постоянных клиентов, акции на новые позиции</span>
                   </div>
                </div>
            </div>

        </div>
    )
}
export default Benefits;