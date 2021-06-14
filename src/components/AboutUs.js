import React, { Component } from 'react';
import logo2 from '../veganlike.png';
import Title from './Title';
import styled from 'styled-components';
import {ButtonContainer} from './Button';


export default class Home extends Component {
    render() {
        return (
            <div>
                <AboutusWrapper>
                <div class="container text-center mt-4">
                    <img src={logo2} class='img-fluid' alt='logo'/>
                    <Title name='Being vegan is not a trend.' title='It’s an awakening'></Title>
                    <p className='mb-3'>Veganlife is a 100% vegan online shopping heaven!</p>
                    <p className='mb-3'>We have over 5,000 vegan and cruelty-free items in store and are dedicated to giving our clients the finest service possible. We provide free shipping, fantastic vegan incentives (we even give you a $5 coupon on your birthday), and next-day delivery if you shop by 2pm.</p>
                    <p className='mb-3'>You've come to the perfect spot if you're looking for vegan cheese, cruelty-free cosmetic, fantastic vegan presents, ethical apparel, vegan chocolate, and so much more!</p>
                    <p className='mb-3'>We contribute money to animal-related organizations every month, and we are quite delighted to report that we have contributed over $30,000 since our inception in 2019.</p>
                </div>
               
                <footer className='footer'>
                    <div className='container border-bottom'>
                        <div className='row'>
                            <div className='col-sm-4 col-md col-sm-4  col-12 col'>
                                <h5 className='pt-2'>Contact info:</h5>
                                <p className='mb-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                                <p><i class="fa fa-location-arrow"></i> 9878/25 sec 9 rohini 35 </p>
                                <p><i class="fa fa-phone"></i>  +91-9999878398  </p>
                                <p><i class="fa fa fa-envelope"></i> info@example.com  </p>
                            </div>
                            <div className='col-sm-4 col-md  col-6 col'>
                                <h5 className='pt-2'>Social Media Links: </h5>
                                <p className='mb-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                                    <ButtonContainer>                                        
                                        <i class="fab fa-instagram"/>                                                               
                                    </ButtonContainer>
                                    <ButtonContainer>                                        
                                        <i class="fab fa-facebook-f"/>                                                              
                                    </ButtonContainer>
                                    <ButtonContainer>                                        
                                        <i class="fab fa-twitter"/>                                                               
                                    </ButtonContainer>
                            </div>
                            <div className='col-sm-4 col-md col-sm-4  col-12 col'>
                                <h5 className='pt-2'>Feedback:</h5>
                                <p className='mb-3'>Please give us your suggestions and any comments to our email address.</p>
                            </div>
                        </div>
                    </div>

                     <div class="copyright text-center p-3">
                     © 2021 Copyright: VeganLike                     
                    </div>
                </footer>
                
                    
                </AboutusWrapper>
            </div>
        )
    }
}


const AboutusWrapper = styled.div`
.copyright{
    letter-spacing: 0.2rem;
}
.footer{
    background: var(--lightBackgroundColor);
    color: var( --darkGreen);
}

`;