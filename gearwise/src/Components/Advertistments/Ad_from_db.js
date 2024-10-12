import { useEffect, useState } from "react";
import axios from 'axios';
import Img1 from '../../img/mobile_ad.jpg'
import Img2 from '../../img/wurth.jpg'
import Img3 from '../../img/3M.jpg'


export default function Advertistments() {
    const [advertismentinfo, setadvertismentinfo] = useState([]);
    useEffect(() => {
        // Fetch all reviews from the backend
        const fetchReviews = async () => {
          try {
            const response = await axios.get('http://localhost:4005/api/ads/adfromdb');
            // console.log(response.data); 
            setadvertismentinfo(response.data);
          } catch (error) {
            console.error('Error fetching reviews:', error);
          }
        };
        fetchReviews();
      }, []);
      console.log("adds from db",advertismentinfo)
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
                    {advertismentinfo.map((ad, index) => (
                        <div class="blog-item">
                            <div class="blog-img">
                            <img 
  src={`http://localhost:4005/${ad.imagePath.replace(/\\/g, '/')}`} 
  alt="Advertisement Image" 
  style={{ width: '100%', height: 'auto' }}
/>
                            </div>
                            <div class="blog-text">
                                <h3><a href="#"> {ad.name} </a></h3>
                                <p>
                                {ad.description}
                                </p>
                            </div>
                            <div class="blog-meta">
                                <p><i class="fa fa-user"></i>{ad.email} - {ad.phone}</p>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
