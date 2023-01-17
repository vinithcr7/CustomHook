import { useEffect, useState } from "react"

export const useDebounce = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState(value)
    useEffect(() => {
        console.log("inside useEffect")
        let timerId = setTimeout(() => {
            console.log("inside setTimeout", value);
            setDebounceValue(value);
        }, delay)
        return () => {
            console.log("clearTimer")
            clearTimeout(timerId) //on each of the value or delay change this callback will be called before useEffect content gets called
        }
    }, [value, delay])
    return debounceValue
}