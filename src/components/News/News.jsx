import React from 'react';
import images from '../../assets/imgs/index'
import './News.css';


const News = ({history}) => {
    const str = `Sit ullamcorper at gravida quis feugiat. Laoreet leo dolor, dui eget sit viverra justo, malesuada. 
    Viverra pharetra, augue neque felis enim dui id cum. 
    At pellentesque diam nulla ac amet quisque quis. 
    Est consectetur ullamcorper curabitur quis viverra hac molestie.
     Elit pulvinar congue ut amet adipiscing felis tincidunt. Amet quis varius aliquam hendrerit tempus. Sed sit diam quis scelerisque
    congu econgu econgu econguecongu econguecon guecon guecon guecong ueconguecong uec ongue.
    Sit ullamcorper at gravida quis feugiat. Laoreet leo dolor, dui eget sit viverra justo, malesuada. Viverra pharetra, augue neque  
    Sit ullamcorper at gravida quis feugiat. Laoreet leo dolor, dui eget sit viverra justo, malesuada. Viverra pharetra, augue neque felis 
    enim dui id cum. At pellentesque diam nulla ac amet quisque quis. Est consectetur ullamcorper curabitur quis viverra hac molestie. 
    Elit pulvinar congue ut amet adipiscing felis tincidunt.
     Amet quis varius aliquam hendrerit tempus. Sed sit diam quis`
    
    const text = str.length<200 ? str : str.slice(0,200)+" . . . ";
    const [showMore , setShowMore] = React.useState(true);     

    return(
        <div className='news pb-5'>
            <div className='component-path d-flex align-items-center'> 
                <div className="container "> <span className='back-link' onClick={()=>history.push('/')}>Главная</span> <span style={{margin:"10px"}}>/</span> <span style={{color:'#979797'}}> Новости</span></div>
            </div>
            <div className="container">
                <h2 className='title-parent'>Новости</h2>
                <div className="news-box">
                    <img className='news-img' alt="" src={images.news1}/>
                    <div>
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p className='news-text-desktop'>{str}</p>
                        <div className="news-text-mobile">
                                {showMore ? text : str}

                            { str.length>200 ? <button className="news-read-more" onClick={()=>setShowMore(!showMore)}>{ showMore ? 'Читать полностью' : 'Скрыть'}</button> : ''}

                        </div>           
                     </div>
                </div>

                <div className="news-box">
                    <img className='news-img' alt="" src={images.news2}/>
                    <div>
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <div className="news-text-mobile">
                                {showMore ? text : str}

                            { str.length>200 ? <button className="news-read-more" onClick={()=>setShowMore(!showMore)}>{ showMore ? 'Читать полностью' : 'Скрыть'}</button> : ''}

                        </div> 
                    </div>
                </div>

                <div className="news-box">
                    <img className='news-img' alt="" src={images.news3}/>
                    <div>
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <div className="news-text-mobile">
                                {showMore ? text : str}

                            { str.length>200 ? <button className="news-read-more" onClick={()=>setShowMore(!showMore)}>{ showMore ? 'Читать полностью' : 'Скрыть'}</button> : ''}

                        </div> 
                    </div>
                </div>

            </div>
        </div>
    )
}
export default News;