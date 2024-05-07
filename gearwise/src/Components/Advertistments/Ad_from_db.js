import React from 'react'
import Img1 from '../../img/mobile_ad.jpg'
import Img2 from '../../img/wurth.jpg'
import Img3 from '../../img/3M.jpg'


export default function Advertistments() {
  return (
    <div>
              <div class="blog">
            <div class="container">
                <div class="section-header text-center">
                    <p>Our Blog</p>
                    <h2>Supplier Advertistments</h2>
                </div>
                <div class="row">
                    <div class="col-lg-4">
                        <div class="blog-item">
                            <div class="blog-img">
                                <img src={Img1} alt="Image"/>
                            </div>
                            <div class="blog-text">
                                <h3><a href="#"> Drive with Confidence<br/>Mobil 1 Oil - Your Engine's Best Companion</a></h3>
                                <p>
                                Introducing Mobil 1, the ultimate engine oil for peak performance and unmatched protection. 
                                Trusted by professionals and enthusiasts alike, Mobil 1 delivers unrivaled lubrication,safeguard your engine against wear, heat, and friction. 
                                With advanced synthetic technology, Mobil 1 keeps your engine running like new, mile after mile. 
                                Experience the difference with Mobil 1, the choice of champions.
                                </p>
                            </div>
                            <div class="blog-meta">
                                <p><i class="fa fa-user"></i>Admin</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
