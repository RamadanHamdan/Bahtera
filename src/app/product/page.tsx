"use client";

import { useEffect } from "react";
import Home from "../page";

export default function ProductRoute() {
    useEffect(() => {
        const scrollToProduct = () => {
            const el = document.getElementById("product");
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        };
        const timer = setTimeout(scrollToProduct, 300);
        return () => clearTimeout(timer);
    }, []);
    return <Home />;
}