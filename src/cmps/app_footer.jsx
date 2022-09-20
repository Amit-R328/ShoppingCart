import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'


// import logo from '../assets/img/logo.jpg'



const AppFooter = () => {



    return (
        <section className="footer-container">
            <div className="footer-left">left</div>
            <div className="footer-main">Amit Rozen</div>
            <div className="footer-right">right</div>
        </section>
    )
}

export default AppFooter;

