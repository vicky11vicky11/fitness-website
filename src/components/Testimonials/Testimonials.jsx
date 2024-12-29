import { useState } from 'react'
import './Testimonials.css'
import { testimonialsData } from '../../data/testimonialsData'
import rightArrow from '../../assets/rightArrow.png'
import leftArrow from '../../assets/leftArrow.png'
import { motion } from "framer-motion"


const Testimonials = () => {
    const transition = { type: 'spring', duration: 3 }

    const [selected, setSelected] = useState(0)
    const length = testimonialsData.length;

    return (
        <div className="testimonials" id="testimonials">
            <div className="left-t">
                <span>Testimonials</span>
                <span className="stroke-text">What they</span>
                <span>say about us</span>
                <motion.span
                    key={selected}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={transition}
                    exit={{ opacity: 0, x: 100 }}
                >{testimonialsData[selected].review}</motion.span>
                <span  >
                    <span style={{ color: 'var(--orange)' }} >  {testimonialsData[selected].name} </span> {' '}
                    - {testimonialsData[selected].status}
                </span>
            </div>
            <div className="right-t">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ ...transition, duration: 2 }}
                    whileInView={{ opacity: 1, x: 0 }}
                ></motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ ...transition, duration: 2 }}
                    whileInView={{ opacity: 1, x: 0 }}
                ></motion.div>
                <motion.img
                    key={selected}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={transition}
                    exit={{ opacity: 0, x: 100 }}

                    src={testimonialsData[selected].image} alt="image" />

                <div className="arrows">
                    <img
                        src={leftArrow}
                        alt="left arrow"
                        onClick={() => {
                            setSelected(selected === 0 ? length - 1 : selected - 1)

                        }}
                    />
                    <img
                        src={rightArrow}
                        alt="right arrow"
                        onClick={() => {
                            setSelected(selected === length - 1 ? 0 : selected + 1)
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
export default Testimonials