import React, {useState} from 'react';
import s from './SortButton.module.scss'
import {ReactComponent as SortUp} from "../../../assets/sort-up.svg";
import {ReactComponent as SortDown} from "../../../assets/sort-down.svg";

type SortButtonPropsType = {
    type: "up" | "down"
    sortActive: "up" | "down" | "none"
    sortCallback?: () => void
}
const SortButton: React.FC<SortButtonPropsType> = ({type, sortCallback, sortActive}) => {
    const [active, setActive] = useState<boolean>(false)
    const onSortHandler = () => {
        setActive(true)
        sortCallback && sortCallback()
    }
    return (
        <div className={type === sortActive ? `${s.container} ${s.active}` :s.container} onClick={onSortHandler} onFocus={() => setActive(false)}>
            {type === "up"
                ?<SortUp className={s.sort}/>
                :<SortDown className={s.sort}/>}
        </div>
    );
};

export default SortButton;