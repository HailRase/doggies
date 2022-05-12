export const arrayDivisor  = <A>(servingSize:number, array: Array<A>) => {
    //размер подмассива
    //массив в который будет выведен результат.
    const newArray = [];
    for (let i = 0; i < array.length; i += servingSize) {
        const chunk = array.slice(i, i + servingSize);
        newArray.push(chunk);
    }
    return newArray;
}