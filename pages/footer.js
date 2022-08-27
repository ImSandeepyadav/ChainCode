import styles from '../styles/Footer.module.css';
import { Typography } from '@mui/material';
import Image from 'next/image';
import Linkdin from '../public/linkdin.png';
import Ig from '../public/ig.png';
import Twitter from '../public/twitter.png';
import Youtube from '../public/youtube.png';
import Facebook from '../public/facebook.png';


const Footer = (props) =>{
    const {width} = props;
    return (
        <div className={styles.footer}>
        <div style={{display: 'flex', justifyContent: 'space-around',padding: '30px',}}> 
            <div>
            <div style={{ width: width === "xs" ? "100%" : "80%" }}>
                <img src='../logo.png' alt="next" style={{width: '100%', height: '60px'}}/>
            </div>
            <div style={{padding: '10px'}}>
                <Typography style={{
                            fontFamily: 'Montserrat',
                            fontWeight: 400,
                            fontSize: width === "xs" ? "10px" : "16px",
                            color: '#FFFFFF',
                            width: '200px',
                            }}>
                    ©2022 All rights reserved 
                    ChainCode Consulting
                </Typography>
            </div>
            </div>
            <div>
            <div>
                <Typography style={{fontFamily: 'Montserrat',
                                    fontWeight: 700,
                                    fontSize: width === "xs" ? "12px" : "18px",
                                    color: '#FFFFFF',
                                    }}>
                Follow us 
                </Typography>
            </div>
            <div style={{paddingTop: "30px" , display: 'flex', gap: '15px', alignItems: 'center'}}>
                <Image src={Linkdin} width={30} height={30} />
                <Image src={Ig} width={30} height={30}/>
                <Image src={Twitter} width={30} height={30}/>
                <Image src={Youtube} width={30} height={30}/>
                <Image src={Facebook} width={30} height={30}/>
            </div>
            </div>
            <div>
                <div>
                    <Typography style={{fontFamily: 'Montserrat',
                                    fontWeight: 700,
                                    fontSize: width === "xs" ? "12px" : "18px",
                                    color: '#FFFFFF',
                                    }}>Quick Links</Typography>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-around', paddingTop: '10px', gap: '40px',textAlign: "center"}}>
                <div>
                    <Typography style={{fontFamily: 'Montserrat',
                                    fontWeight: 400,
                                    fontSize: width === "xs" ? "10px" : "16px",
                                    color: '#FFFFFF',
                                    cursor: 'pointer',
                                    }}>Contact Us</Typography>
                </div>
                <div>
                    <Typography style={{fontFamily: 'Montserrat',
                                    fontWeight: 400,
                                    fontSize: width === "xs" ? "10px" : "16px",
                                    color: '#FFFFFF',
                                    cursor: 'pointer',
                                    }}>Careers</Typography>
                </div>
                <div>
                    <Typography style={{fontFamily: 'Montserrat',
                                    fontWeight: 400,
                                    fontSize: width === "xs" ? "10px" : "16px",
                                    color: '#FFFFFF',
                                    cursor: 'pointer',
                                    }}>Resources</Typography>
                </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-around', paddingTop: '10px',gap: '40px', textAlign: "center"}}>
                <div>
                    <Typography style={{fontFamily: 'Montserrat',
                                    fontWeight: 400,
                                    fontSize: width === "xs" ? "10px" : "16px",
                                    color: '#FFFFFF',
                                    cursor: 'pointer',
                                    }}>Services</Typography>
                </div>
                <div>
                    <Typography style={{fontFamily: 'Montserrat',
                                    fontWeight: 400,
                                    fontSize: width === "xs" ? "10px" : "16px",
                                    color: '#FFFFFF',
                                    cursor: 'pointer',
                                    }}>About Us</Typography>
                </div>
                <div>
                    <Typography style={{fontFamily: 'Montserrat',
                                    fontWeight: 400,
                                    fontSize: width === "xs" ? "10px" : "16px",
                                    color: '#FFFFFF',
                                    cursor: 'pointer',
                                    }}>Solutions</Typography>
                </div>
                </div>
            </div>
        </div>
        </div>
    )

}

export default Footer;