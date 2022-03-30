import React, {useState} from 'react';
import s from './Carousel.module.scss'

type CarouselPropsType = {
    items: Array<string>
}
const Carousel: React.FC<CarouselPropsType> = ({items}) => {
    const [item, setItem] = useState<string>(items[0])
    const [slideIndex, setSlideIndex] = useState<number>(0)
    console.log(slideIndex===items.indexOf(item))
    const moveDot = (index: number) => {
        setItem(items[index])
        setSlideIndex(index)
        console.log("индекс слайда: "+slideIndex + ", индекс дота: " + items.indexOf(item))
    };

    return (
        <div className={s.container}>
            <div className={s.slide}>
                <img key={item}
                     src={item} alt=""
                     className={items.indexOf(item) === slideIndex
                         ?  s.activeAnim : s.slide}/>
            </div>
            <div className={s.dots}>
                {items.map((item, index) =>
                    <div onClick={() => moveDot(index)}
                         className={slideIndex === index ? s.activeDot : s.dot}>

                    </div>)}
            </div>
        </div>
    );
};

export default Carousel;