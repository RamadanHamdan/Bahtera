import ScrollReveal from "@/components/ScrollReveal";
import CarouselSection from "./CarouselSection";

export default function Product() {
    return (
        <div className="page-card" id="product" style={{ background: 'var(--bg-surface-elevated)' }}>
            <ScrollReveal className="section container">
                <div className="cta-banner-content flex flex-col lg:flex-row items-center gap-8">
                    <div className="flex-1 text-left shrink-0">
                        <h2>Featured Product</h2>
                        <p>Maksimalkan produktivitas bisnis Anda dengan solusi teknologi informasi terintegrasi. Kami menawarkan produk unggulan seperti panel interaktif definisi tinggi dan sistem manajemen rapat canggih untuk memastikan setiap detik kerja Anda lebih bernilai.
                            Jelajahi koleksi kami dan temukan cara baru untuk bekerja lebih cerdas.</p>
                    </div>
                    <div className="md-asset flex-1 flex flex-col gap-4">
                        <div className="w-full gap-2 grid grid-cols-3 grid-rows-2">
                        </div>
                        <div className="flex justify-center w-full">
                            <CarouselSection />
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    )
}