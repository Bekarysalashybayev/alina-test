import './dropdown.scss';
import {FC, useMemo, useState} from "react";
import {DropdownProps} from "@/components/ui/dropdown/types.ts";
import {ArrowSvg} from "@/components/ui/ArrowSvg.tsx";

const Dropdown: FC<DropdownProps> = (props) => {
    const {
        options,
        select,
        selectedValue,
        block = false,
        placeHolder = 'Выберите',
        label,
        isError = false
    } = props

    const selectedText = useMemo(() => {
        if (!selectedValue) return ''
        return options.find(s => s.value === selectedValue)?.text
    }, [selectedValue, options])

    const [isOpen, setIsOpen] = useState(block)

    const onClickHandler = () => {
        if (block) return;
        setIsOpen(prev => !prev)
    }

    const onSelect = (val: string) => {
        onClickHandler()
        if (val === selectedValue) return;

        select(val)
    }

    return (
        <div className={`dropdown ${block && 'block'} ${isError && 'error'}`}>
            <div className="label">{label}</div>
            <div className="dropdown__header" onClick={onClickHandler}>
                <div className="input">
                    {selectedText || <span className="placeholder">{placeHolder}</span>}
                </div>
                <ArrowSvg reversed={block ? true : !isOpen}/>
            </div>
            {isOpen && (
                <div className="dropdown__body scroll">
                    {options.map(e => (
                        <div
                            key={e.value}
                            className={`item ${selectedValue === e.value && 'selected'}`}
                            onClick={() => onSelect(e.value)}
                        >
                            {e.text}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
