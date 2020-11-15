import {useEffect} from "react";

export const useParallax = (targets, handler) => {
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if(entries[0].intersectionRatio > 0) {
                console.log('intersecting');
                window.addEventListener('scroll', handler);
            } else {
                console.log('NoT intersecting');
                window.removeEventListener('scroll', handler);
            }
            /*entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log('intersecting');
                    window.addEventListener('scroll', handler);
                } else {
                    console.log('NoT intersecting');
                    window.removeEventListener('scroll', handler);
                }
            });*/
        }, { threshold: 0 });

        targets.forEach(target => observer.observe(target));

        return () => targets.forEach(target => observer.unobserve(target));
    }, [targets, handler]);
}