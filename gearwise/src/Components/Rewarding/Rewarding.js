import React from 'react'
import Img1 from '../../img/reward1.png'

export default function Rewarding() {
  return (
    <div>
      <div class="about">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                    <div class="section-header text-left">
                            <p>Rewarding System</p>
                            <h2>About Rewarding</h2>
                        </div>
                        <div class="about-content">
                            <p>
                            Welcome to our loyalty program at <strong>GearWise!</strong> As a <strong>registered customer</strong>,
                             you're entitled to exclusive rewards every time you book an appointment with us.
                            </p>
                            <ul>
                                <li><i class="far fa-check-circle"></i>Every appointment you make earns you points.</li>
                                <li><i class="far fa-check-circle"></i>The more appointments you book, the more points you accumulate.</li>
                                <li><i class="far fa-check-circle"></i>Additionally, the amount you spend on our services also contributes to your points balance.</li>
                            </ul>
                            <a class="btn btn-custom" href="/Reward">Learn More</a>
                        </div>
                    </div>
                    <div class="col-lg-6">
                    <div class="about-img">
                            <img src={Img1} alt="Image"/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
