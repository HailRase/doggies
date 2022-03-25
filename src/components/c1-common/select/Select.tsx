import React, {ChangeEvent} from 'react';
import s from './Select.module.scss'
import {ReactComponent as ArrowDown} from "../../../assets/select-down.svg";

type SelectPropsType = {
    items: string[] | number[]
    title?:string
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
}
const Select: React.FC<SelectPropsType> = ({items, title, onChange}) => {
    return (
        <div className={s.container}>
            <div className={s.containerWrapper}>
                <select className={s.select} placeholder={"Limit: "} onChange={onChange}>
                    {items.map((item, index) => <option key={index} value={item}>
                        {title}{item}
                    </option>)}
                </select>
                <ArrowDown className={s.arrow}/>
            </div>
        </div>
    );
};

export default Select;