import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import { useDiagnosticBooking } from "../context/DiagnosticBookingContext";
import { Interactive3DStrydeLogo } from "./Interactive3DStrydeLogo";
import { EDITORIAL_EASE } from "./MotionPrimitives";

export const HeroSection: React.FC = () => {
  const { openDiagnosticPage } = useDiagnosticBooking();

  return (
    <section className="relative bg-white pt-10 pb-20 sm:pt-14 sm:pb-24 lg:py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column (50%): Crisp, Direct Editorial Copy + Primary Actions */}
          <div className="lg:col-span-6 space-y-7 text-left">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: EDITORIAL_EASE }}
              className="font-editorial text-[44px] sm:text-[58px] lg:text-[68px] leading-[1.03] tracking-[-0.03em] text-[#191919] font-normal"
            >
              Plus d’impact, <br />
              <span className="italic font-normal text-[#021B3A]">
                une vraie stratégie.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: EDITORIAL_EASE }}
              className="text-lg sm:text-[20px] leading-[1.58] text-[#4A4A4A] max-w-[490px]"
            >
              Nous structurons le positionnement, le contenu organique et l’acquisition des
              influenceurs et infopreneurs pour transformer l’attention en croissance durable.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18, ease: EDITORIAL_EASE }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <button
                type="button"
                onClick={() => openDiagnosticPage()}
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#021B3A] hover:bg-[#092C58] text-white text-[15px] font-semibold px-7 py-4 transition-all shadow-[0_12px_30px_rgba(2,27,58,0.18)] cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-[#7FE0EE]" />
                <span>Passer le test & prendre RDV</span>
                <ArrowRight className="w-4 h-4 text-[#7FE0EE] transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <a
                href="#organique"
                className="inline-flex items-center gap-2 rounded-full bg-[#F3F0EA] hover:bg-[#E9E5DC] text-[#191919] text-[15px] font-semibold px-6 py-4 transition-colors"
              >
                <span>Découvrir l’approche</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column (50%): Full-Scale 3D Stryde Token Balancing the Entire Hero Stage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.12, ease: EDITORIAL_EASE }}
            className="lg:col-span-6 flex items-center justify-center lg:justify-end"
          >
            <Interactive3DStrydeLogo />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
