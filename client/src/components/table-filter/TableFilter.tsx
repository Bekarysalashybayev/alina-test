import './table-filter.scss';
import SearchInput from "@/components/ui/input/search/SearchInput.tsx";
import {FC} from "react";
import FilterIcon from '@/assets/img/FilterIcon.svg'
import SortIcon from '@/assets/img/SortIcon.svg'

const TableFilter: FC<FilterOptions> = (props) => {
    const {search} = props
    return (
        <div className="table-filter">
            <div className='table-filter__search'>
                {search?.onChange && <SearchInput {...search}/>}
            </div>
            <div className="table-filter__icons">
                <img src={FilterIcon} alt="FilterIcon"/>
                <img src={SortIcon} alt="SortIcon"/>
            </div>
        </div>
    );
};

export default TableFilter;
