import './seacrh.scss';
import React, {FC} from "react";
import SearchIcon from '@/assets/img/SearchIcon.svg'

interface SearchProps {
    value?: string,
    onChange?: (val: string) => void,
    placeholder?: string,
    onClick?: () => void
}

const SearchInput: FC<SearchProps> = (
    {
        value = '',
        onChange = null,
        placeholder = '',
        onClick=null
    }
) => {

    const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e.target.value)
        }
    }

    const clickHandler = () => {
        if (onClick) {
            onClick()
        }
    }

    return (
        <div className="search-input">
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={changeValue}
            />
            <img src={SearchIcon} alt="SearchIcon" onClick={clickHandler}/>
        </div>
    );
};

export default SearchInput;
