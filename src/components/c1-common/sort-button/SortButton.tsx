import React from 'react';
import s from './SortButton.module.scss'
import {ReactComponent as SortUp} from "../../../assets/sort-up.svg";
import {ReactComponent as SortDown} from "../../../assets/sort-down.svg";

type SortButtonPropsType = {
    type: "up" | "down"
    sortCallback?: () => void
}
const SortButton: React.FC<SortButtonPropsType> = ({type, sortCallback}) => {
    return (
        <div className={s.container} onClick={sortCallback}>
            {type === "up"
                ?<SortUp className={s.sort}/>
                :<SortDown className={s.sort}/>}
        </div>
    );
};

export default SortButton;