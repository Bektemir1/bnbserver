import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import icons from '../../assets/icons/index'
import'./Header.css';
import {useSelector,useDispatch} from 'react-redux'
import { searchProduct } from '../../redux/products/product-action';

const Header = () =>{
    const [searchValue, setSearchValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const products = useSelector(state=>state.product.products);
    const carts = useSelector(state=>state.cart.carts);
    const dispatch = useDispatch()
    
    const toggleMenu = ()=>{
        document.getElementById('mobile-menu').classList.toggle('active')
      
        document.getElementById('overlay1-menu').classList.toggle('active')
    }
    const toggleMobileSearch = () =>{
        document.getElementById('mob').classList.toggle('active')
       
        document.getElementById('overlay2-menu').classList.toggle('active')
    }

    const handleChange = (e) => {
        e.preventDefault();
        setSearchValue(e.target.value)
        !e.target.value ? setIsOpen(false) : setIsOpen(true)
    }

    return(
        <div>
            <div className="overlay-menu" id="overlay1-menu"></div>
            <div className="overlay-menu" id="overlay2-menu"></div>
            <div className="desktop-header">
                <div className="header-top container">
                    <ul className="menu">
                        <li><Link className='menu-link' to="/about">О нас</Link></li>
                        <li><Link className='menu-link' to="/collections">Коллекции</Link></li>
                        <li><Link className='menu-link' to="/news">Новости</Link></li>
                    </ul>
                    
                    <div className="header-tel">
                        <span>Тел: </span>
                        <a  href="tel:+996 500 123 456">+996 500 123 456</a>
                    </div>
                </div>


                <div className="header">
                    <div className="container d-flex justify-content-between align-items-center">
                        <Link to="/">
                            <img src={icons.mainLogo} alt="Logo" className="main-logo"/>
                        </Link>

                        <div className="main-search">
                            <input onChange={(e)=>handleChange(e)} value={searchValue} placeholder='Поиск'/>                                                                                                                                                                                                                                                                                                
                            <Link to="/search"> <img onClick={()=>{dispatch(searchProduct(searchValue)); setIsOpen(false);}} alt='' src={icons.searchIcon}/></Link>
                       

                       {
                           isOpen ? 
                           <div className="search-list">
                           {
                                products.map((item,index)=>{
                                          if(searchValue){
                                              if(item.name.toLowerCase().includes(searchValue.toLowerCase())){
                                                  return <div onClick={()=>{setSearchValue(item.name); setIsOpen(false);}} className="search-item" key={index}>{item.name}</div>
                                              }
                                              
                                        }
                                      })
                                  } 
  
  
                              </div>
                              :''
                            
                       }
                        </div>

                        <ul className="cart-box">
                            <li><Link to="/saved" className="cart-box-link">
                                <img src={icons.heartIcon} alt=""/>
                                {products.filter(item=>item.saved).length?<span className="indicator-saved"></span>:''}
                                
                                Избранное
                                
                            </Link></li>
                            <li><Link to="/basket" className="cart-box-link">
                                {carts.length ? <span className="indicator-saved"></span>:'' }
                                <img src={icons.cartIcon} alt=''/>Корзина</Link>
                                </li>
                        </ul>
                    </div>
                </div>
            </div>

        {/* ------------------- Mobile header and menu -------------------------------- */}

            <div className="mobile-header">
                <img  onClick={toggleMenu} className='burgerButton' src={icons.burger} alt=""/>
                <Link to="/">
                    <img src={icons.mainLogo} alt="Logo" className="main-logo-mobile"/>
                </Link>
                <img alt='' src={icons.searchIcon} onClick={toggleMobileSearch}/>
            </div>
                    


            <div className="main-search mob" id="mob" >
                            <input onChange={(e)=>handleChange(e)} value={searchValue} placeholder='Поиск'/>                                                                                                                                                                                                                                                                                                
                            <Link to="/search"> <img onClick={()=>{dispatch(searchProduct(searchValue)); setIsOpen(false); toggleMobileSearch()}} alt='' src={icons.searchIcon}/></Link>
                       

                       {
                           isOpen ? 
                           <div className="search-list">
                           {
                                products.map((item,index)=>{
                                          if(searchValue){
                                              if(item.name.toLowerCase().includes(searchValue.toLowerCase())){
                                                  return <div onClick={()=>{setSearchValue(item.name); setIsOpen(false);}} className="search-item" key={index}>{item.name}</div>
                                              }
                                              
                                        }
                                      })
                                  } 
  
  
                              </div>
                              :''
                            
                       }
                        </div>

            <div className="mobile-menu" id="mobile-menu">
                <div className="mobile-menu-header">
                    <h2 className='mobile-header-title'>Mеню</h2>
                    <span className="close-menu" onClick={toggleMenu}><img src={icons.closeMenu} alt=""/></span>
                </div>
                <ul className="menu">
                    <li><Link onClick={toggleMenu} className='menu-link' to="/about">О нас</Link></li>
                    <li><Link onClick={toggleMenu} className='menu-link' to="/collections">Коллекции</Link></li>
                    <li><Link onClick={toggleMenu} className='menu-link' to="/news">Новости</Link></li>
                    <hr style={{width: "60%", marginLeft:0}}/>
                    <li><Link onClick={toggleMenu} to="/saved" className="menu-link cart-box-link"><img src={icons.heartIcon} alt=''/> {products.filter(item=>item.saved).length?<span className="indicator-saved"></span>:''}
                                  Избранное </Link></li>
                    <li><Link onClick={toggleMenu} to="/basket" className="menu-link cart-box-link"><img src={icons.cartIcon} alt=''/>Корзина</Link></li>
                </ul>
                <div className="header-tel mobile">
                    <h2>Свяжитсь с нами:</h2>
                    <span>Тел: </span>    
                    <a href='/'>+996 000 000 000</a>
                </div>
            </div>

        </div>
    )
}


export default Header;