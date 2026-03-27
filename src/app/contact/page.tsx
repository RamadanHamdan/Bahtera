"use client";

import { useEffect } from "react";
import Home from "../page";

export default function ContactRoute() {
    useEffect(() => {
        const scrollToContact = () => {
            const el = document.getElementById("contact");
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        };
        const timer = setTimeout(scrollToContact, 300);
        return () => clearTimeout(timer);
    }, []);
    return <Home />;
}