import ScrollReveal from "@/components/ScrollReveal";
import { TypingText } from '@/components/animate-ui/primitives/texts/typing';
import { PreviewCard, PreviewCardTrigger, PreviewCardPortal, PreviewCardPositioner, PreviewCardPopup } from '@/components/animate-ui/primitives/base/preview-card';

export default function OurServices() {
    return (
                <div className="page-card" id="testimonials" style={{ background: 'var(--bg-surface)' }}>
          <section className="testimonials section">
            <ScrollReveal className="section-header">
              <h2 className="section-title">Our Services</h2>
            </ScrollReveal>
            <div className="testimonials-grid container">
              <ScrollReveal>
                <div className="testimonial-card">
                  <TypingText text="Your Trusted Partners In IT Solutions" />
                  <div className="testimonial-author">
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delayClass="delay-1">
                <div className="testimonial-card">
                  <TypingText text="Your Innovation Hub for IT Excellence" />
                </div>
              </ScrollReveal>
              <ScrollReveal>
                <div className="testimonial-card">
                  <TypingText text="Your Digital Transformation Starts Here" />
                </div>
              </ScrollReveal>
            </div>
          </section>
        </div>

    )
}