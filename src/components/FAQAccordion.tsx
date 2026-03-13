"use client";

import { useState, useRef, useEffect } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  const answerRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (isOpen && answerRef.current) {
      setMaxHeight(`${answerRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className={`faq-item ${isOpen ? "active" : ""}`}>
      <button className="faq-question" onClick={onClick}>
        <span>{question}</span>
        <span className="icon-plus">+</span>
      </button>
      <div 
        className="faq-answer" 
        style={{ maxHeight }}
        ref={answerRef}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

 

}
