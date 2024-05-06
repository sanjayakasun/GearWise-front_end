import React from 'react'
import Img1 from '../../img/blog-1.jpg'
import Img2 from '../../img/blog-2.jpg'
import Img3 from '../../img/blog-3.jpg'


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
                                <h3><a href="#">Main Advertistment Topic</a></h3>
                                <p>
                                    Description
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
                                <h3><a href="#">Main Advertistment Topic</a></h3>
                                <p>
                                    Description
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
                                <h3><a href="#">Main Advertistment Topic</a></h3>
                                <p>
                                    Description
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
