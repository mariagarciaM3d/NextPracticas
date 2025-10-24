import React from 'react';
import './footer.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id='footer'>
        <div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className='col-lg-3 col-md-6'>
                        <div className="footer-info">
                            <h3>Restaurant</h3>
                            <p>
                                100 Your Street <br/>
                                State 1234, AUS
                                <br/>
                                <br/>
                                <strong>Phone:</strong> 666666666 <br/>
                                <strong>Email:</strong> info@example.com <br/>
                            </p>
                            <div className="social-links mt-3">
                                <Link href='#' className='twitter'><i className='bi bi-twitter-x'></i></Link>
                                <Link href='#' className='facebook'><i className='bi bi-facebook-x'></i></Link>
                                <Link href='#' className='instagram'><i className='bi bi-instagram-x'></i></Link>
                                <Link href='#' className='youtube'><i className='bi bi-youtube-x'></i></Link>
                                <Link href='#' className='reddit'><i className='bi bi-reddit'></i></Link>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-2 col-md-6 footer-links'>
                        <h4>Useful Links</h4>
                        <ul>
                            <li><i className='bx bx-chevron-right'></i><Link href='#'>Home</Link></li>
                            <li><i className='bx bx-chevron-right'></i>{' '}<Link href='#'>About Us</Link></li>
                            <li><i className='bx bx-chevron-right'></i><Link href='#'>Menu</Link></li>
                            <li><i className='bx bx-chevron-right'></i><Link href='#'>Events</Link></li>
                            <li><i className='bx bx-chevron-right'></i>{' '}<Link href='#'>Gallery</Link></li>
                        </ul>
                    </div>
                    <div className='col-lg-2 col-md-6 footer-links'>
                        <h4>Our Services</h4>
                        <ul>
                            <li><i className='bx bx-chevron-right'></i>{' '}<Link href='#'>Functions</Link></li>
                            <li><i className='bx bx-chevron-right'></i>{' '}<Link href='#'>Parties</Link></li>
                            <li><i className='bx bx-chevron-right'></i><Link href='#'>Events</Link></li>
                            <li><i className='bx bx-chevron-right'></i>{' '}<Link href='#'>Private Chef</Link></li>
                            <li><i className='bx bx-chevron-right'></i>{' '}<Link href='#'>Ceremony</Link></li>
                        </ul>
                    </div>

                    <div className='col-lg-2 col-md-6 footer-newsletter'>
                        <h4>Our Newsletter</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <form action="" method='post'>
                            <input type="email" name='email' />
                            <input type="submit" value='Subscribe'/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="container">
            <div className="copyright">
                &copy; Copyright{''}
                <strong>
                    <span>Restaurant</span>
                </strong>
                . All Rights Reserved
            </div>
            <div className="credits">
                Designed by <Link href='#'>X</Link>
            </div>
        </div>
    </footer>
  )
}
