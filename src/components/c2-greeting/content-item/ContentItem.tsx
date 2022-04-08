import React from 'react';
import s from './ContentItem.module.scss'
type ContentItemPropsType = {
    name: string
    activePage?: string
    urlImg?: string
    background?: "green" | "orange" | "purple"
    callback?: () => void
}
const ContentItem:React.FC<ContentItemPropsType> = ({name, activePage ,urlImg, background, callback}) => {
    const bgSelector = (background: "green" | "orange" | "purple") => {
      switch (background){
          case "green":
              return s.green
          case "orange":
              return s.orange
          default:
              return s.purple
      }
    }
    return (
        <div className={s.container}>
            {urlImg && <div className={`${s.image} ${background && bgSelector(background)}`}>
                <img src={urlImg} alt=""/>
            </div>}
            <button onClick={callback} className={name.toLowerCase() === activePage? `${s.button} ${s.active}` :s.button}>{name}</button>
        </div>
    );
};

export default ContentItem;