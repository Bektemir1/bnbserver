import React from 'react';
import images from '../../assets/imgs/index'
import icons from '../../assets/icons/index'
import './Help.css';

const Help = ({history}) =>{
    return(
        <div className='help pb-5'>
            <div className='component-path d-flex align-items-center'> 
                <div className="container "> <span className='back-link' onClick={()=>history.push('/')}>Главная</span> <span style={{margin:"10px"}}>/</span> <span style={{color:'#979797'}}> Помощь</span></div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-6">
                        <img className='help-img' src={images.help1} alt=""/>
                    </div>
                    <div className="col-lg-7 col-md-6">
                        <h2 className='title-parent'>Помощь</h2>
                        <div id="accordion">
                            <div className="card">
                                <div className="card-header" id="headingOne">
                                    <div className='d-flex justify-content-between align-items-center collapsed' data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">  
                                        <span className='card-title'>Как я могу заказать одежду? </span>
                                        <img alt="sdf" className='help-arrow' src={icons.arrowBottom}/>
                                     </div>
                                </div>
                                <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header" id="headingTwo">
                                    <div className='d-flex justify-content-between align-items-center collapsed' data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">  
                                        <span className='card-title'>Как осуществляется доставка? </span>
                                        <img alt="sdf" className='help-arrow' src={icons.arrowBottom}/>
                                     </div>
                                </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header" id="headingThree">
                                    <div className='d-flex justify-content-between align-items-center collapsed' data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">  
                                        <span className='card-title'>Где производятся вещи?</span>
                                        <img alt="sdf" className='help-arrow' src={icons.arrowBottom}/>
                                     </div>
                                </div>
                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header" id="heading4">
                                    <div className='d-flex justify-content-between align-items-center collapsed' data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">  
                                        <span className='card-title'>Как будет упакован заказ?</span>
                                        <img alt="sdf" className='help-arrow' src={icons.arrowBottom}/>
                                     </div>
                                </div>
                                <div id="collapse4" className="collapse" aria-labelledby="heading4" data-parent="#accordion">
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header" id="heading5">
                                    <div className='d-flex justify-content-between align-items-center collapsed' data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">  
                                        <span className='card-title'>Есть ли возврат, при условии если одежда пришла не того размера?</span>
                                        <img alt="sdf" className='help-arrow' src={icons.arrowBottom}/>
                                     </div>
                                </div>
                                <div id="collapse5" className="collapse" aria-labelledby="heading5" data-parent="#accordion">
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header" id="heading6">
                                    <div className='d-flex justify-content-between align-items-center collapsed' data-toggle="collapse" data-target="#collapse6" aria-expanded="false" aria-controls="collapse6">  
                                        <span className='card-title'>Как я могу оставить заявку на обратную связь</span>
                                        <img alt="sdf" className='help-arrow' src={icons.arrowBottom}/>
                                     </div>
                                </div>
                                <div id="collapse6" className="collapse" aria-labelledby="heading6" data-parent="#accordion">
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>

                            
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
export default Help;