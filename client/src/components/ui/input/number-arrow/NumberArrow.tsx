import './arrow.scss'
import {FC} from "react";
import {ArrowSvg} from "@/components/ui/ArrowSvg.tsx";


const NumberArrow: FC<{
    increment: () => void;
    decrement: () => void;
}> = ({increment, decrement}) => {
    return (
        <div className="arrow">
            <button onClick={increment}>
                <ArrowSvg/>
            </button>
            <button onClick={decrement}>
                <ArrowSvg reversed/>
            </button>
        </div>
    );
};

export default NumberArrow;
