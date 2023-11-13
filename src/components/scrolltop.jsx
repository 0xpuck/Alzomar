import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { Button } from './styles';

const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <Button>
            <FaArrowUp onClick={scrollToTop} style={{display: visible ? "inline" : "none"}} className={visible ? "hover:animate-bounce visible" : ""}/>
        </Button>
    );
}

export default ScrollButton;