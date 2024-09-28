import { memo } from "react";

interface SearcProps {
    onChange: (text : string) => void
}
function Search ({onChange}: SearcProps) {
    console.log('search')
    return(
        <input 
        type="text"
        placeholder=" Search users ..." 
        onChange={ (e) => onChange(e.target.value)}/>
    )
}
export default memo(Search)