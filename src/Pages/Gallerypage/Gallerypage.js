import React from 'react'
import CursorFollower from '../../Components/CursorFollower/CursorFollower'
import './Gallerypage.css'
import Navigation from '../../Components/Navigation/Navigation';
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import logolight from '../../assets/svg/logo-light.svg'
import projects1 from '../../assets/images/touse/night view orchid building 02.jpg'
import projects2 from '../../assets/images/touse/17.gif'
import projects3 from '../../assets/images/touse/15.gif'
import projects4 from '../../assets/images/touse/SWIMMING 01.jpg'
import projects5 from '../../assets/images/touse/2BHK ISOMETRIC 29-09-2024.jpg'
import projects6 from '../../assets/images/touse/1BHK ISOMETRIC 29-09-2024.jpg'
import projects7 from '../../assets/images/touse/Carnation10.jpg'
import projects8 from '../../assets/images/touse/CHILDREN PLAY AREA 02.jpg'
import projects9 from '../../assets/images/touse/CLUB HOUSE.jpg'
import projects10 from '../../assets/images/touse/CLUB HOUSE 03.jpg'
import projects11 from '../../assets/images/touse/BIRD EYE VIEW 30.jpg'
import projects12 from '../../assets/images/touse/ENTRANCE .jpg'



const Gallerypage = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className='Gallerypage'>

            <CursorFollower /> {/* Custom cursor component */}
            
            <Navigation />
            <div className='gallery-header'>
                <div className='gallery-header-inner'>
                    <div className='container'>
                        <div className="gallery_header_content d-flex align-items-center justify-content-between">
                            <h2 class="heading">OUR PROJECTS</h2>
                            <ul class="breadcrumb d-flex align-items-center">
                                <li><Link to="/">Home</Link></li>
                                <li class="active">Projects</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className='gallery_packery'>
                <div className='container'>
                    <div className='packery_images'>
                        {/* projecimg1 */}
                        <div className='row'>
                            <div className='leadall col-12 '>
                                <div className='imglead'>
                                    <img className='imagelead_item' data-aos="zoom-in-up" src={projects1} alt="" />
                                </div>
                            </div>
                        </div>

                        {/* projectimg2 */}
                        <div className='row'>
                            <div className='leadall col-6 '>
                                <div className='imglead'>
                                    <img className='imagelead_item' data-aos="fade-up-right" src={projects2} alt="" />
                                </div>
                            </div>

                            <div className='leadall col-6 '>
                                <div className='imglead'>
                                    <img className='imagelead_item' data-aos="fade-up-left" src={projects3} alt="" />
                                </div>
                            </div>
                        </div>
                        {/* projectimg3  */}
                        <div className='row'>
                            <div className='leadall col-12 '>
                                <div className='imglead'>
                                    <img className='imagelead_item' data-aos="flip-left"
                                        data-aos-easing="ease-out-cubic"
                                        data-aos-duration="2000" src={projects4} alt="" />
                                </div>
                            </div>
                        </div>
                        {/* projectimg4  */}
                        <div className='row'>
                            <div className='leadall col-6 '>
                                <div className='imglead'>
                                    <img className='imagelead_item' data-aos="zoom-in-right" src={projects5} alt="" />
                                </div>
                            </div>

                            <div className='leadall col-6 '>
                                <div className='imglead'>
                                    <img className='imagelead_item' data-aos="zoom-in-right" src={projects6} alt="" />
                                </div>
                            </div>
                        </div>
                        {/* projectimg4  */}
                        <div className='row'>
                            <div className='leadall col-12 '>
                                <div className='imglead'>
                                    <img className='imagelead_item' data-aos="zoom-in-right" src={projects7} alt="" />
                                </div>
                            </div>
                        </div>
                        {/* projectimg5  */}
                        <div className='row'>
                            <div className='leadall col-12 '>
                                <div className='imglead'>
                                    <img className='imagelead_item' data-aos="fade-right"
                                        data-aos-offset="300"
                                        data-aos-easing="ease-in-sine" src={projects8} alt="" />
                                </div>
                            </div>
                        </div>
                        {/* projectimg6  */}
                        <div className='row'>
                            <div className='leadall col-12 '>
                                <div className='imglead'>
                                    <img className='imagelead_item' data-aos="fade-right"
                                        data-aos-offset="300"
                                        data-aos-easing="ease-in-sine" src={projects9} alt="" />
                                </div>
                            </div>
                        </div>
                         {/* projectimg7  */}
                         <div className='row'>
                            <div className='leadall col-12 '>
                                <div className='imglead'>
                                    <img className='imagelead_item' data-aos="fade-right"
                                        data-aos-offset="300"
                                        data-aos-easing="ease-in-sine" src={projects10} alt="" />
                                </div>
                            </div>
                        </div>
                         {/* projectimg8  */}
                         <div className='row'>
                            <div className='leadall col-12 '>
                                <div className='imglead'>
                                    <img className='imagelead_item' data-aos="fade-right"
                                        data-aos-offset="300"
                                        data-aos-easing="ease-in-sine" src={projects11} alt="" />
                                </div>
                            </div>
                        </div>
                         {/* projectimg9  */}
                         <div className='row'>
                            <div className='leadall col-12 '>
                                <div className='imglead'>
                                    <img className='imagelead_item' data-aos="fade-right"
                                        data-aos-offset="300"
                                        data-aos-easing="ease-in-sine" src={projects12} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='gallery_contact'>
            <div className='container contact_box'>
        <div className='contact_large row'>
            <div className='col-md-4 cont'>CONTACT</div>
        <div className='col-md-5'>
            <div className='contact_info'>
                <div className='info_body'>
                    <h6>Studio Website</h6>
                    <h5>www.mrittikarchitects.com</h5>
                </div>
                <div className='info_body'>
                    <h6>Email Address</h6>
                    <h5>mrittikarchitects@gmail.com</h5>
                </div>
                <div className='info_body'>
                    <h6>Phone No</h6>
                    <h5>+123 (456789)</h5>
                </div>
                <div className='info_body'>
                    <h6>Office Address</h6>
                    <h5>3 Madison Street NY, USA</h5>
                </div>
            </div>
                
        </div>
        <div className='col-md-3 contact_social'>
            <div className='contact_logo'>
                <img src={logolight} alt="" />
            </div>
            <div className='social_ul'>
                <ul className='social_alllist'>
                    <li><a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-meta" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.217 5.243C9.145 3.988 10.171 3 11.483 3 13.96 3 16 6.153 16.001 9.907c0 2.29-.986 3.725-2.757 3.725-1.543 0-2.395-.866-3.924-3.424l-.667-1.123-.118-.197a55 55 0 0 0-.53-.877l-1.178 2.08c-1.673 2.925-2.615 3.541-3.923 3.541C1.086 13.632 0 12.217 0 9.973 0 6.388 1.995 3 4.598 3q.477-.001.924.122c.31.086.611.22.913.407.577.359 1.154.915 1.782 1.714m1.516 2.224q-.378-.614-.727-1.133L9 6.326c.845-1.305 1.543-1.954 2.372-1.954 1.723 0 3.102 2.537 3.102 5.653 0 1.188-.39 1.877-1.195 1.877-.773 0-1.142-.51-2.61-2.87zM4.846 4.756c.725.1 1.385.634 2.34 2.001A212 212 0 0 0 5.551 9.3c-1.357 2.126-1.826 2.603-2.581 2.603-.777 0-1.24-.682-1.24-1.9 0-2.602 1.298-5.264 2.846-5.264q.136 0 .27.018Z"/>
</svg></a></li>
                    <li><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg></a></li>
                    <li><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg></a></li>
                    <li><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
</svg></a></li>
                    
                    
                    
                </ul>
                
            </div>
            <div className='terms'>
                <span>terms</span>
                <span>conditions</span>
                <span>policy</span>
            </div>
            <div className='c_right'>
                <span>Rio-Freak 2024. All Rights Reserved</span>

            </div>
        </div>
        </div>
    </div>
            </div>
        </div>
    )
}

export default Gallerypage