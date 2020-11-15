import {useEffect} from "react";

export const useParallax = (target, handler, options) => {
    useEffect(() => {
        const { current } = target;
        const observer = new IntersectionObserver(entries => {
            const [{ isIntersecting }] = entries;
            if(isIntersecting) {
                window.addEventListener('scroll', handler, { capture: false, passive: true });
            } else {
                window.removeEventListener('scroll', handler, { capture: false, passive: true });
            }
        }, options);

        observer.observe(current);
        return () => observer.unobserve(current);
    }, []);
}