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
                                <h3><a href=""> Drive with Confidence<br/>Mobil 1 Oil - Your Engine's Best Companion</a></h3>
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
                    <div class="col-lg-4">
                        <div class="blog-item">
                            <div class="blog-img">
                                <img src={Img2} alt="Image"/>
                            
                            </div>
                            <div class="blog-text">
                                <h3><a href="">Wurth<br/>Your Trusted Partner in Industry Solutions!</a></h3>
                                <p>
                                Discover the power of Würth, the global leader in quality tools, equipment, and industrial supplies.
                                From precision-engineered fasteners to cutting-edge machinery, we deliver excellence at every turn.
                                With Würth, you're not just buying products you're investing in reliability, durability, and innovation.
                                Join the millions of satisfied customers worldwide who trust Würth for all their industrial needs.
                                </p>
                            </div>
                            <div class="blog-meta">
                                <p><i class="fa fa-user"></i>Admin</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="blog-item">
                            <div class="blog-img">
                                <img src={Img3} alt="Image"/>
                            
                            </div>
                            <div class="blog-text">
                                <h3><a href="">Discover the Difference with 3M<br/>Your Trusted Partner for Innovation and Excellence!</a></h3>
                                <p>
                                For over a century, 3M has been at the forefront of innovation, revolutionizing industries and enriching lives worldwide.
                                From industry-leading solutions in manufacturing and technology to cutting-edge advancements in worker safety, healthcare, and consumer goods, 3M sets the standard for excellence.
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
