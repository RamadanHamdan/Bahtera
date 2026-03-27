"use client";

import { useEffect } from "react";
import Home from "../page";

export default function WhatWeOfferRoute() {
    useEffect(() => {
        const scrollToFeatures = () => {
            const el = document.getElementById("features");
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        };
        const timer = setTimeout(scrollToFeatures, 300);
        return () => clearTimeout(timer);
    }, []);
    return <Home />;
}