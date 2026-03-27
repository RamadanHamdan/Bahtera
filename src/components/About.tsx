import ScrollReveal from "@/components/ScrollReveal";
import { Card, CardFooter, CardBody } from "@heroui/react";

export default function About() {
    return (
        <div className="page-card" id="about" style={{ background: 'linear-gradient(135deg, var(--bg-surface) 0%, #1a1a30 100%)' }}>
          <section className="final-cta section">
            <ScrollReveal className="container">
              <h2 className="text-center mb-6">About Us</h2>
              <Card className="max-w-8xl mx-auto w-full border-5 border-white/10 shadow-lg" style={{ background: 'rgba(0,0,0,0.3)' }}>
                <CardBody className="p-12 md:p-12 text-center">
                  <p className="text-base md:text-lg text-default-300 leading-relaxed">
                    Spesialis terdepan di bidang pengadaan perangkat elektronik dan sistem IT yang memberdayakan transformasi digital organisasi modern.
                    Kami menghadirkan solusi teknologi konkret melalui proses pengadaan yang terstruktur, efisien dan tepat sasaran.
                  </p>
                </CardBody>
                <CardFooter className="justify-center pt-0 pb-6">
                  <p className="font-bold text-white tracking-wider uppercase text-sm">Bahtera Arta Niaga</p>
                </CardFooter>
              </Card>
            </ScrollReveal>
          </section>
        </div>
    )
}