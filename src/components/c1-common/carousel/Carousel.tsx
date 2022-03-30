import React, {useState} from 'react';
import s from './Carousel.module.scss'

type CarouselPropsType = {
    items: Array<string>
}
const Carousel: React.FC<CarouselPropsType> = ({items}) => {
    const [slideIndex, setSlideIndex] = useState<number>(0)
    const moveDot = (index: number) => {
        setSlideIndex(index)
    };

    return (
        <div className={s.container}>
            {items.map((item, index) => {
                return (
                    <div
                        key={index}
                        className={slideIndex === index ? `${s.slide} ${s.activeAnim}` : s.slide}
                    >
                        <img
                            src={item}
                        />
                    </div>
                )
            })}
            <div className={s.dots}>
                {items.map((item, index) =>
                    <div key={index} onClick={() => moveDot(index)}
                         className={slideIndex === index ? s.activeDot : s.dot}>

                    </div>)}
            </div>
        </div>
    );
};

export default Carousel;