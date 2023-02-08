import {useState} from 'react';
const ItemCount = ({startValue, stock}) => {
    const [counter, setCounter] = useState(startValue);

    const counterAdd = () => (counter < stock) && setCounter(counter + 1); 
    const counterSub = () => (counter > startValue) && setCounter(counter - 1);

    return (
        <div className="item-count-wrap">
            <button
                className="count-btn count-btn-sub"
                onClick={() => counterSub()}
            ><span>-</span></button>
            <span className="item-qty">{counter}</span>
            <button 
                className="count-btn count-btn-add"
                onClick={() => counterAdd()}
            ><span>+</span></button>
        </div>
    )
}

export default ItemCount;