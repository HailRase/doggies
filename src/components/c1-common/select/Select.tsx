import React from 'react';
import s from './Select.module.scss'
import {ReactComponent as ArrowDown} from "../../../assets/select-down.svg";

type SelectPropsType = {
    items: string[] | number[]
    title?:string
}
const Select: React.FC<SelectPropsType> = ({items, title}) => {
    return (
        <div className={s.container}>
            <div className={s.containerWrapper}>
                <select title={"All breeds"} name="select-category" id="" className={s.select} placeholder={"Limit: "}>
                    {items.map((item, index) => <option value={index}>
                        {title}{item}
                    </option>)}
                </select>
                <ArrowDown className={s.arrow}/>
            </div>
        </div>
    );
};

export default Select;