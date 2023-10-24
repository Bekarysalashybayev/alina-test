import './pagination.scss';
import {PaginationTypes} from "@/components/pagination/types.ts";
import {FC, useState} from "react";
import PagPrev from '@/assets/img/PagPrev.svg'
import PagNext from '@/assets/img/PagNext.svg'
import Button from "@/components/ui/button/Button.tsx";

const Pagination: FC<PaginationTypes> = ({changePage, totalPage, currentPage}) => {

    const [val, setVal] = useState<string>('')
    const handleClick = () => {
        if (!val) return;
        let e = parseInt(val)
        if (e > totalPage) {
            alert('Value more than total page')
            return
        }
        if (e < 1) {
            e = 1
        }
        changePage(e)
        setVal('')
    }

    const handlePrev = () => {
        if (currentPage > 1) {
            changePage(currentPage - 1)
        }
    }
    const handleNext = () => {
        if (currentPage < totalPage) {
            changePage(currentPage + 1)
        }
    }

    return (
        <div className="pagination">
            <div className="page">
                <img src={PagPrev} alt="PagPrev" onClick={handlePrev}/>
                <span>{currentPage}/{totalPage}</span>
                <img src={PagNext} alt="PagNext" onClick={handleNext}/>
            </div>
            <div className="to">
                <span>Перейти на страницу</span>
                <input
                    type="number"
                    value={val}
                    onChange={e => setVal(e.target.value)}/>
                <Button
                    btn_type='primary-light'
                    btn_size='small'
                    onClick={handleClick}
                >
                    Перейти
                </Button>
            </div>
        </div>
    );
};

export default Pagination;
