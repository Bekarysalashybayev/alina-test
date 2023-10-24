import {FC} from "react";

export const ArrowSvg: FC<{ reversed?: boolean }> = ({reversed = false}) => {

    if (reversed) {
        return (
            <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.88 0.822998L7.99 5.713C7.4125 6.2905 6.4675 6.2905 5.89 5.713L1 0.822998"
                      stroke="#2B2B2B"/>
            </svg>
        )
    }

    return (
        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.00013 6.823L5.89013 1.933C6.46763 1.3555 7.41263 1.3555 7.99013 1.933L12.8801 6.823"
                  stroke="#2B2B2B"/>
        </svg>
    )
}
