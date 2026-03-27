"use client";

import { useEffect } from "react";
import Home from "../page";

export default function AboutRoute() {
    useEffect(() => {
        const scrollToAbout = () => {
            const el = document.getElementById("testimonials");
            if (el) {
                el.scrollIntoView({ behavior: "smooth"});
            }
        };
        const timer = setTimeout(scrollToAbout, 300);
        return () => clearTimeout(timer);
    }, []);
    return <Home />;
}