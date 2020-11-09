import {useEffect} from "react";

export const useEventListener = (target, event, handler) => {
    useEffect(() => {
        target.addEventListener(event, handler);
        return () => target.removeEventListener(event, handler);
    }, [target, event, handler]);
}