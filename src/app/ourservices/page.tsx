"use client";

import { useEffect } from "react";
import Home from "../page";

export default function OurServicesRoute() {
    useEffect(() => {
        const scrollToOurServices = () => {
            const el = document.getElementById("testimonials");
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        };
        const timer = setTimeout(scrollToOurServices, 300);
        return () => clearTimeout(timer);
    }, []);
    return <Home />;
}
