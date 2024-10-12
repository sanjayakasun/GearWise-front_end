import React from 'react'

export default function Location() {

    

  return (
    <div>
      <div className="location">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="section-header text-left">
                            <p>Washing Points</p>
                            <h2>Car Washing & Care Points</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="location-item">
                                    <i className="fa fa-map-marker-alt"></i>
                                    <div className="location-text">
                                        <h3>Auto Spa</h3>
                                        <p>No 132/5, Market Road, Dambulla</p>
                                        <p><strong>Call:</strong>0712209112</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="location-item">
                                    <i className="fa fa-map-marker-alt"></i>
                                    <div className="location-text">
                                        <h3>Auto Spa</h3>
                                        <p>12/A , Kurunegala Road, Galewela</p>
                                        <p><strong>Call:</strong>0777244873</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="location-form">
                            <div className='Map'>

                            </div>
                            <h3>Location Track</h3>
                            <a class="btn btn-custom" href="/map">Track the Nearest Location</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
