import type { ValueType } from "../types/ValueType";

export function Value({r030, txt, rate, cc, exchangedate, special}: ValueType){
    return <div>
        {r030}, {txt}, {rate}, {cc}, {exchangedate}, {special}
    </div>
}