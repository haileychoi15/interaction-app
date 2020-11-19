import {useEffect} from "react";

export const useIntersectionObserver = (target, handler, options) => {
    useEffect(() => {
        const { current } = target;
        const observer = new IntersectionObserver(entries => {

        }, options);

        observer.observe(current);
        return () => observer.unobserve(current);
    }, []);
}