import { SubmitSection } from "@/app/page";
import ScrollReveal from "@/components/ScrollReveal";

export default function Contact() {
    return (
        <div className="page-card" id="contact" style={{ background: 'var(--bg-surface)' }}>
          <section className="faq section" style={{ flex: 1 }}>
            <ScrollReveal className="section-header">
              <h2 className="font-bold w-full text-5xl">Contact Us</h2>
              <SubmitSection />
            </ScrollReveal>
          </section>
        </div>
    );
}