import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Header from '../includes/header'
import '../includes/StylesCss.css'
const AboutPage = () => {
    return(
        <div class="divcolor">
            <Header />
            <div className='about'>
            <center>
            <br></br>
            <h1>About</h1>
            
            <p>
            Apple store sells its products in various markets across the world. For example, through retail outlets such as online store, the company sells numerous products to consumers and other business enterprises.Furthermore, Apple has invested in programs that promote reseller sales including ASCP which focuses on certain reseller locations and APRP which provides expertise in products and customer service (USSEC, 2009). Apple store equally sells computer products to government agencies, and creative markets within its geographical location.The markets are deemed crucial to third party computer applications and hardware developers. The superior expansion and computing performance of Apples products materialize to be the major consumers’ attraction within the market. Moreover, Apple offers computer products to customers within scientific market as well as in the information technology markets.
            </p>
            </center>
            </div>
            
            <Carousel className="carousel slide container">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://i.pinimg.com/originals/30/f2/b9/30f2b92fd5f9e8172f1b8f90ca4e15df.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                  <h3></h3>
                    <p></p>                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://cdn.wccftech.com/wp-content/uploads/2020/07/Apple-product-line.jpg"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 h-50"
                    src="https://th.bing.com/th/id/R.1aded2f3ff82377ecfd63206f945c86b?rik=HOy1acjU3JJxHA&riu=http%3a%2f%2fsoftwaretested.com%2fwp-content%2fuploads%2f2019%2f01%2fApple-Products.jpg&ehk=WX8%2fC6x3U6JlWBBtBYM0SbU5%2fTx84Fa7F0LjYaIuOb0%3d&risl=&pid=ImgRaw&r=0"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                  <h3></h3>
                    <p></p>                  </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <br></br>
            
            <div style={{display:"flex" , marginLeft:"160px",marginTop:"30px"}}>
            <div class="card" style={{width:"16rem" , marginLeft:"20px"}}>
  <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone11-white-2019?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1611169090000" class="card-img-top" alt="..." width={{}}/>
  <div class="card-body" style={{backgroundradius:"10px" }}>
  <br></br>
  
    <h5 class="card-title">iPhone 11</h5>
    <p class="card-text">All new iphone 11</p>
    <br></br>
    <br></br>
    <br></br>
    <a href="/viewProducts" class="btn btn-light">View in inventory</a>
  </div>
  </div>
  <div class="card" style={{width:"16rem" , marginLeft:"20px"}}>
  <img src="https://i5.walmartimages.com/asr/ae5b9b4d-d64e-4aec-8e7f-2c13de0677f3.115ed912d260407419bccf8f859442b0.jpeg" class="card-img-top" alt="..." width={{}}/>
  <div class="card-body" style={{backgroundradius:"3px"}}>
  <br></br>
    <h5 class="card-title">iPhone 11 Pro</h5>
    <p class="card-text">All new iphone 11 Pro</p>
    <br></br>
    <br></br>
    <br></br>
    <a href="/viewProducts" class="btn btn-light">View in inventory</a>
  </div>
  </div>
  <div class="card" style={{width:"16rem" , marginLeft:"20px"}}>
  <img src="https://onecomm.bm/wp-content/uploads/2021/01/Screen-Shot-2021-01-29-at-11.23.16-AM.jpg" class="card-img-top" alt="..." width={{}}/>
  <div class="card-body" style={{backgroundradius:"3px"}}>
    <h5 class="card-title">iPhone 12</h5>
    <p class="card-text">All new iphone 12</p>
    <br></br>
    <a href="/viewProducts" class="btn btn-light">View in inventory</a>
  </div>
  </div>
  <div class="card" style={{width:"16rem" , marginLeft:"20px"}}>
  <img src="https://th.bing.com/th/id/OIP.b-XjjnhH1VJR4VCc9C_5TAHaJ4?pid=ImgDet&rs=1" class="card-img-top" alt="..." width={{}}/>
  <div class="card-body" style={{backgroundradius:"3px"}}>
    <h5 class="card-title">iPhone 12 Pro</h5>
    <p class="card-text">All new iphone 12 Pro</p>
    <a href="/viewProducts" class="btn btn-light">View in inventory</a>
  </div>
  </div>
 
 

</div>


<div style={{display:"flex" , marginLeft:"160px", marginTop:"30px"}}>
            <div class="card" style={{width:"16rem" , marginLeft:"20px"}}>
  <img src="https://www.courts.com.sg/media/catalog/product/i/p/ip163197_00.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:" class="card-img-top" alt="..." width={{}}/>
  <div class="card-body" style={{backgroundradius:"10px" }}>
    <h5 class="card-title">iPhone 12 mini</h5>
    <p class="card-text">All new iphone 12 Mini</p>
    <a href="/viewProducts" class="btn btn-light">View in inventory</a>
  </div>
  </div>
  <div class="card" style={{width:"16rem" , marginLeft:"20px"}}>
  <img src="https://drmacmandalay.com/wp-content/uploads/2021/11/61ecgBYOAJL.jpg" class="card-img-top" alt="..." width={{}}/>
  <div class="card-body" style={{backgroundradius:"3px"}}>
    <h5 class="card-title">iPhone 13</h5>
    <p class="card-text">All new iphone 13</p>
    <a href="/viewProducts" class="btn btn-light">View in inventory</a>
  </div>
  </div>
  <div class="card" style={{width:"16rem" , marginLeft:"20px"}}>
  <img src="https://securecontent.jackyselectronics.com/Images/product-images/iPhone_13_Pro_Silver_PDP_Image_position-1A_EN.jpg" class="card-img-top" alt="..." width={{}}/>
  <div class="card-body" style={{backgroundradius:"3px"}}>
    <h5 class="card-title">iPhone 13 Pro</h5>
    <p class="card-text">All new iphone 13 Pro</p>
    <a href="/viewProducts" class="btn btn-light">View in inventory</a>
  </div>
  </div>
  <div class="card" style={{width:"16rem" , marginLeft:"20px"}}>
  <img src="https://hsstoreimages.blob.core.windows.net/hsstorecontainer/0050316_apple-iphone-13-pro-max-256gb-5g-sierra-blue.jpeg" class="card-img-top" alt="..." width={{}}/>
  <div class="card-body" style={{backgroundradius:"3px"}}>
    <h5 class="card-title">iPhone 13 Pro Max</h5>
    <p class="card-text">All new iphone 13 Pro Max</p>
    <a href="/viewProducts" class="btn btn-light">View in inventory</a>
  </div>
  </div>
 
 

</div>
<br></br>
<br></br>
<br></br>
<br></br>
           

<div className='footer'>
    <footer className="flex-col flex-center" color='white'>
      <h5>Made with Hands by Dhanvin S</h5>
      <p>Copyright @ Dhanvin | 2022</p>
    </footer>
    </div>
              <div>
                &nbsp; &nbsp; 
              </div>
          
          
      </div>


    )
}

export default AboutPage