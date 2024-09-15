import { useState } from "react";
import './StarRating.css';

const StarRating = (props: any) => {
    let limit = props.limit ?? '';
    const [rating, setRating] = useState(props.rating ?? 2);
    const handleClick = (e : any) => {
        setRating(+e.target.getAttribute('data'));
    }
    return (
        <>
            <div onClick={handleClick}>
                {
                    [...new Array(limit).keys()].map(i => (
                        <span key={i} data = {i+1}
                         className={ i < rating ? 'rated' : 'star'}>
                        </span>
                    ))
                }
            </div>
        </>
    );
}
export default StarRating;