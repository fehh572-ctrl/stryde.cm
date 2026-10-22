import React from "react";
import { motion } from "framer-motion";
import { EditorialReveal, EDITORIAL_EASE } from "./MotionPrimitives";
import { StrydeMountainMark } from "./StrydeLogo";

export const ManifestoSection: React.FC = () => {
  return (
    <section
      id="manifeste"
      className="bg-[#FAF9F6] border-y border-[#ECEAE3] py-24 sm:py-32 px-5 sm:px-8"
    >
      <div className="max-w-[700px] mx-auto text-center">
        <EditorialReveal className="flex justify-center mb-7">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.35, ease: EDITORIAL_EASE }}
            className="w-18 h-18 rounded-3xl bg-[#021B3A] shadow-[0_18px_40px_rgba(2,27,58,0.16)] flex flex-col items-center justify-center border border-[#4FA3B8]/30"
          >
            <StrydeMountainMark className="w-11 h-5" glossy />
            <div className="mt-2 flex flex-col gap-1 w-8">
              <span className="h-[2px] w-full rounded-full bg-[#7FE0EE]/85" />
              <span className="h-[2px] w-6 mx-auto rounded-full bg-[#4FA3B8]/65" />
            </div>
          </motion.div>
        </EditorialReveal>

        <EditorialReveal delay={0.08}>
          <h2 className="font-editorial text-[34px] sm:text-[46px] md:text-[52px] leading-[1.08] tracking-[-0.025em] text-[#191919] font-normal">
            Bienvenue dans la nouvelle ère <br className="hidden sm:inline" />
            de la stratégie de contenu.
          </h2>
        </EditorialReveal>

        <EditorialReveal delay={0.15}>
          <p className="mt-5 text-base sm:text-[19px] leading-[1.62] text-[#484848] font-normal">
            Publier au hasard épuise. Courir après les vues sans offre claire ne construit rien.
            Chez <strong className="font-semibold text-[#021B3A]">Stryde</strong>, chaque vidéo a
            un rôle précis : attirer la bonne audience, prouver votre expertise et amener
            naturellement vers vos offres.
          </p>
        </EditorialReveal>

        <EditorialReveal delay={0.2}>
          <p className="mt-6 text-xs leading-relaxed text-[#787878] max-w-[520px] mx-auto">
            Chaque accompagnement débute par un pré-diagnostic individuel de votre écosystème
            (site, contenu organique et acquisition) avant tout appel téléphonique.
          </p>
        </EditorialReveal>
      </div>
    </section>
  );
};
