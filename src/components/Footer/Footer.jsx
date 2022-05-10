import React from 'react';
import icons from '../../assets/icons/index'
import {Link} from 'react-router-dom'
import './Footer.css';

const Footer  = () =>{
    return(
        <div className="footer">
            <div className='container'>
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                       <Link to="/"><img className='footer-logo' src={icons.logoWhite} alt=""/></Link>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                        <h2 className='footer-title'>Компания</h2>
                        <ul>
                            <li><Link className="footer-link" to="/about">О нас</Link></li>
                            <li><Link className="footer-link" to="/news">Новости</Link></li>
                            <li><Link className="footer-link" to="/help">Помощь</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                        <h2 className='footer-title'>Контакты</h2>
                        <ul>
                            <li><img src={icons.phone} alt=""/><a className="footer-link" href="tel:+996 500 123 456">+996 500 123 456</a></li>
                            <li><img src={icons.phone} alt=""/><a className='footer-link' href="tel:+996 500 123 456">+996 500 123 456</a></li>
                            <li><img src={icons.email} alt=""/><a className="footer-link" href="mailto:mail@gmail.com">mail@gmail.com</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                        <h2 className='footer-title'>Мы в социальных сетях</h2>
                        <ul>
                            <li><img src={icons.instagram} alt=""/><a className="footer-link" target="_blank" href="https://instagram.com/zeon.ithub">Instagram</a></li>
                            <li><img src={icons.telegram} alt=""/><a className='footer-link' target="_blank" href="https://telegram.me/@Zeonitcommunity" >Telegram</a></li>
                            <li><img src={icons.whatsapp} alt=""/><a className='footer-link' target="_blank" href="https://wa.me/500123456">Whatsapp</a></li>
                        </ul>
                    </div>
                    <p className='copyright'>Developed by Zeon 2022</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;