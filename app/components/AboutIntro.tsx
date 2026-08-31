
import { Badge } from "@/components/ui/badge"

function AboutIntro() {
    return (
        <section className="relative w-full pt-24 md:pt-32 pb-20 bg-background overflow-hidden flex items-center justify-center transition-colors duration-300">
            {/* Subtle Purple Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[500px] dark:bg-purple-600/5 blur-[150px] rounded-[100%] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
                <div className="relative inline-flex items-center gap-2.5 rounded-md bg-gradient-to-b from-[#f3edff] to-[#e3d3ff] dark:from-[rgba(45,28,80,0.95)] dark:to-[rgba(25,14,48,0.95)] text-[#7c3aed] dark:text-purple-300 border border-[#d8c5ff]/80 dark:border-purple-500/30 shadow-[0_6px_14px_-2px_rgba(124,58,237,0.22),inset_0_1.5px_2px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(124,58,237,0.15)] dark:shadow-[0_6px_14px_-2px_rgba(0,0,0,0.6),inset_0_1.5px_2px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.5)] px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.25em] mb-8">
                    <span className="h-2 w-2 rounded-full bg-[#7c3aed] dark:bg-purple-300 shadow-[0_0_8px_rgba(124,58,237,0.8)] animate-pulse" />
                    <span>Discover Zyvionix Solutions</span>
                </div>

                <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0f172a] dark:text-white mb-8 leading-tight">
                    Pioneering the Future of <br className="hidden md:block" />
                    <span className="text-[#7c3aed] dark:text-purple-400 font-extrabold">
                        Digital Experiences
                    </span>
                </h2>

                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-70 mb-10"></div>

                <p className="text-lg md:text-xl text-muted-foreground dark:text-gray-400 font-light leading-relaxed max-w-3xl">
                    At Zyvionix Solutions, we bring ideas to life through smart digital solutions that drive real results. Whether you're a startup, SME, or enterprise, our expertise in design, technology, and innovation keeps you ahead in a fast-changing world.
                </p>
            </div>
        </section>
    )
}

export default AboutIntro