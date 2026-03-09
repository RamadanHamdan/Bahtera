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

  const faqs = [
    {
      question: "Who is Reasonal for?",
      answer: "Reasonal is for professionals, students, lifelong learners, and anyone who wants to think more clearly and protect themselves from disinformation and manipulation. If you're tired of clickbait headlines, rage-bait arguments, questionable 'studies' shared on social media, or conversations you later regretted wasting your time on, this app is for you."
    },
    {
      question: "What can I learn on Reasonal?",
      answer: "Reasonal teaches critical thinking, logical reasoning, data literacy, and media literacy through research-backed, non-linear lessons written by human experts. You'll learn to spot logical fallacies, recognize cognitive biases, interpret statistics and research studies, and identify misinformation and manipulation tactics."
    },
    {
      question: "What are non-linear lessons?",
      answer: "Unlike traditional courses, Reasonal lessons adapt to you. Each lesson is built around real research and real-world examples, not hypothetical textbook scenarios. You choose what to explore, and the content changes based on your choices. If you already understand a concept, the lesson moves forward. If you want to go deeper, it lets you."
    },
    {
      question: "Is the content AI-generated?",
      answer: "No. Every lesson is written by human experts using verified sources. No AI generation, no hallucinations, no unverified claims or invented studies."
    },
    {
      question: "How much does Reasonal cost?",
      answer: "Pricing varies by region. Reasonal offers monthly and annual plans, with the annual plan saving around 50%. If you like Reasonal but can't currently afford a subscription, email us at hello@reasonal.co. We're happy to work something out."
    }
  ];

  return (
    <div className="faq-container container reveal">
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
