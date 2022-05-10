import React,{useState} from 'react';
import './OrderModal.css'
import icons from '../../assets/icons/index'
import{Link} from 'react-router-dom'
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import { clearCart } from '../../redux/cart/car-action';
import { useDispatch } from 'react-redux';


import $ from 'jquery';
const OrderModal = () =>{
    const history = useHistory()
    const dispatch = useDispatch()

    const [formParams,setFormParams] = useState({name:'',surname:'',email:'',number:'',country:'',city:''})
    const [disabled, setDisabled] = useState(false);
    const [valName, setValName] = useState(false);
    const [valSurname, setValSurname] = useState(false);
    const [valEmail, setValEmail] = useState(false);
    const [valNumber, setValNumber] = useState(false);
    const [valCountry, setValCountry] = useState(false);
    const [valCity, setValCity] = useState(false);
    const handleChange = (e) =>{
       const {name,value} = e.target;
       
       setFormParams({
           ...formParams,
           [name]: value
       }) ;
    }
    const submitOrder = (e) =>{
        e.preventDefault()

        formParams.name === '' ? setValName(true) : setValName(false)
        formParams.surname === '' ? setValSurname(true) : setValSurname(false)
        formParams.email === '' ? setValEmail(true) : setValEmail(false)
        formParams.number === '' ? setValNumber(true) : setValNumber(false)
        formParams.country === '' ? setValCountry(true) : setValCountry(false)
        formParams.city === '' ? setValCity(true) : setValCity(false)

        if(formParams.name && formParams.surname && formParams.email && formParams.number && formParams.country && formParams.city && formParams.agree){
            $('#exampleModalCenter').modal('hide')
            swal({
                title: "Спасибо!!",
                text: "Ваша заявка была принята ожидайте, скоро Вам перезвонят",
                button:'Продолжить покупки',
              }).then(()=>{
                  history.push('/');
                  dispatch(clearCart([]))


              })
            
          
        }
        
     
    }
    return(
        <div class="modal fade order-modal" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Оформление заказа</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <img src={icons.closeMenu} alt=""/>
                    </button>
                </div>
                <div class="modal-body">
                  <form onSubmit={(e)=>submitOrder(e)} className="order-form">
                      <label className={`${valName ? "validation-class1" : ''}`}>Ваше имя</label>
                      <input  className={`${valName ? "validation-class2" : ''}`} onChange={(e)=>handleChange(e)} name="name" value={formParams.name} placeholder='Например Иван'/>

                      <label className={`${valSurname ? "validation-class1" : ''}`}>Ваше фамилия</label>
                      <input  className={`${valSurname ? "validation-class2" : ''}`} onChange={(e)=>handleChange(e)} name="surname" value={formParams.surname} placeholder='Например Иванов'/>

                      <label className={`${valEmail ? "validation-class1" : ''}`}>Электронная почта</label>
                      <input type="email"  className={`${valEmail ? "validation-class2" : ''}`} onChange={(e)=>handleChange(e)} name="email" value={formParams.email} placeholder='example@mail.com'/>

                      <label className={`${valNumber ? "validation-class1" : ''}`}>Ваш номер телефона</label>
                      <div  className={`${valNumber ? "validation-class2" : ''} order-number`} >
                          <select class="selectpicker countrypicker" data-flag="true">
                              <option> 🇰🇬 +996</option>
                              <option>🇷🇺 +79</option>
                              <option>🇺🇸 +711</option>
                          </select>
                          <input type="number" name="number" onChange={(e)=>handleChange(e)} value={formParams.number} placeholder=''/>
                      </div>

                      <label className={`${valCountry ? "validation-class1" : ''}`}>Страна</label>
                      <input  className={`${valCountry ? "validation-class2" : ''}`} name="country" onChange={(e)=>handleChange(e)} value={formParams.country} placeholder='Введите страну'/>

                      <label className={`${valCity ? "validation-class1" : ''}`}>Город</label>
                      <input  className={`${valCity ? "validation-class2" : ''}`} name="city" onChange={(e)=>handleChange(e)} value={formParams.city} placeholder='Введите город'/>
                      
                      <div className="d-flex align-items-center mt-2">
                        <input name="agree" onChange={(e)=>handleChange(e)} className="checkbox mb-0 mr-2" type="checkbox"/>
                        <span className="agree-text">Согласен с условиями <Link to="public-offer" className='public-link' onClick={()=> $('#exampleModalCenter').modal('hide')}>публичной оферты</Link></span>
                      </div>

                      <button className="order-btn modal-btn"  >Заказать</button>
                  </form>
                </div>
               
                </div>
            </div>
        </div>
    )
}
export default OrderModal;