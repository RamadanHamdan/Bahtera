import { SplittingText } from "@/components/animate-ui/primitives/texts/splitting";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

export default function WhatWeOffer() {
    return (
        <div className="page-card" id="features" style={{ background: 'var(--bg-surface)' }}>
            <section className="features section">
                <div className="section-header">
                    <h2 className="section-title">What We Offer</h2>
                </div>
                <div className="features-grid container">
                    {/* Feature 1 */}
                    <ScrollReveal>
                        <div className="feature-card">
                            <div className="feature-icon">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-warehouse"><path d="M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11" /><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z" /><path d="M6 13h12" /><path d="M6 17h12" /></svg>
                                </div>
                            </div>
                            <SplittingText text="Solusi Pengadaan Komprehensif" />
                            <SplittingText className="feature-subtitle" text="Bahtera Arta Niaga menyediakan layanan pengadaan end-to-end untuk kebutuhan elektronik dan IT." />
                            <div className="asset-placeholder feature-asset sm">
                                <Image src="/images/pengadaan.png" alt="Pengadaan" width={300} height={300} />
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Feature 2 */}
                    <ScrollReveal delayClass="delay-1">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wallet-cards"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" /><path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21" /></svg>
                                </div>
                            </div>
                            <SplittingText text="Purna Jual" />
                            <SplittingText className="feature-subtitle" text="Komitmen kami tidak berhenti pada pengadaan, tetapi berlanjut melalui dukungan purna jual yang responsif." />
                            <div className="asset-placeholder feature-asset sm">
                                <Image src="/images/purnajual.png" alt="Purnajual" width={300} height={300} />
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Feature 3 */}
                    <ScrollReveal>
                        <div className="feature-card">
                            <div className="feature-icon">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.922 5.45a2 2 0 0 0-1.939 0L2.618 9.08a1 1 0 0 0-.02 1.838L10.08 13.08a2 2 0 0 0 1.939 0z" /><path d="M22 10v6M2 10l-1-1-9-5-9 5 9 5 9-5" /><path d="M6 12v5c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-5" /><path d="M6 12v5" /><path d="M18 12v5" /></svg>
                                </div>
                            </div>
                            <SplittingText text="Pelatihan &amp; Edukasi" />
                            <SplittingText className="feature-subtitle" text="Pelatihan bagi setiap pelanggan kami untuk memaksimalkan manfaat dari produk dan layanan kami." />
                            <div className="asset-placeholder feature-asset sm">
                                <Image src="/images/pelatihan.png" alt="Pelatihan" width={300} height={300} />
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
