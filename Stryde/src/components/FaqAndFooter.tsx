import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight, CheckCircle2, PhoneCall, Database } from "lucide-react";
import { EditorialReveal, EDITORIAL_EASE } from "./MotionPrimitives";
import { StrydeLogo } from "./StrydeLogo";
import { useDiagnosticBooking } from "../context/DiagnosticBookingContext";

const FAQ_ITEMS = [
  {
    q: "À qui s’adresse l’accompagnement Stryde ?",
    a: "Aux influenceurs, créateurs de contenu, infopreneurs et dirigeants développant leur marque personnelle pour transformer leur audience en clients réguliers.",
  },
  {
    q: "Pourquoi passer le test de positionnement avant l’appel ?",
    a: "Vos réponses (site web, âge, objectif, organique, Ads) nous permettent d’analyser votre écosystème en amont afin que nos 30 minutes d’appel aillent droit au but.",
  },
  {
    q: "Vos scripts risquent-ils de dénaturer ma façon de parler ?",
    a: "Jamais. Nous structurons les 3 premières secondes et le fil directeur autour de vos propres mots, pour gagner en clarté sans perdre votre spontanéité.",
  },
  {
    q: "Gérez-vous uniquement l’organique ou aussi les Ads ?",
    a: "Les deux en synergie : l’organique valide les meilleurs angles, puis nous amplifions ces contenus gagnants en acquisition payante (Meta, YouTube, TikTok).",
  },
  {
    q: "Comment se déroule l’appel une fois le test terminé ?",
    a: "Un échange téléphonique direct de 30 minutes au créneau choisi : diagnostic clair de vos priorités et présentation transparente du programme pertinent.",
  },
];

export const FaqAndFooter: React.FC = () => {
  const { openDiagnosticPage, openAdminBackend } = useDiagnosticBooking();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setSubscribed(true);
    setNewsletterEmail("");
  };

  return (
    <>
      {/* =====================================================================
          EDITORIAL NEWSLETTER BAND (WEALTHSIMPLE TLDR CADENCE)
          ===================================================================== */}
      <section className="bg-white py-20 sm:py-24 px-5 sm:px-8">
        <div className="max-w-[1200px] mx-auto rounded-[28px] bg-[#EBF3F5] border border-[#D4E4EA] p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <EditorialReveal className="lg:col-span-7 space-y-2.5">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#358298]">
                La Note Stryde
              </span>
              <h2 className="font-editorial text-[28px] sm:text-[38px] leading-[1.1] tracking-[-0.025em] text-[#191919]">
                Une note hebdomadaire sur la rétention, le positionnement et l’acquisition.
              </h2>
            </EditorialReveal>

            <EditorialReveal delay={0.1} className="lg:col-span-5">
              {subscribed ? (
                <div className="rounded-2xl bg-white border border-[#4FA3B8]/40 p-4 flex items-center gap-3 text-[#021B3A]">
                  <CheckCircle2 className="w-5 h-5 text-[#358298] shrink-0" />
                  <div className="text-sm font-medium">
                    Inscription confirmée pour la prochaine édition mardi.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2.5">
                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <input
                      type="email"
                      required
                      placeholder="Votre adresse e-mail"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="flex-1 rounded-full bg-white border border-[#C8DCE3] px-5 py-3.5 text-sm text-[#191919] placeholder:text-[#7E8C93] focus:outline-none focus:border-[#021B3A]"
                    />
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#021B3A] hover:bg-[#092C58] text-white text-sm font-semibold px-6 py-3.5 transition-all shrink-0 cursor-pointer"
                    >
                      <span>S’inscrire</span>
                      <ArrowRight className="w-4 h-4 text-[#7FE0EE]" />
                    </button>
                  </div>
                  <p className="text-[11px] text-[#5B6B73] pl-2">
                    Zéro spam. Désinscription en un clic.
                  </p>
                </form>
              )}
            </EditorialReveal>
          </div>
        </div>
      </section>

      {/* =====================================================================
          CONCISE FAQ ACCORDION SECTION
          ===================================================================== */}
      <section id="faq" className="bg-white pb-24 sm:pb-32 px-5 sm:px-8">
        <div className="max-w-[820px] mx-auto">
          <EditorialReveal className="mb-9">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#358298]">
              Questions fréquentes
            </span>
            <h2 className="font-editorial text-[32px] sm:text-[42px] leading-[1.08] tracking-[-0.025em] text-[#191919] mt-2">
              L’essentiel avant de prendre rendez-vous.
            </h2>
          </EditorialReveal>

          <div className="divide-y divide-[#E6E3DC] border-y border-[#E6E3DC]">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={item.q} className="py-5">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-6 text-left group cursor-pointer"
                  >
                    <span className="text-base sm:text-[17px] font-semibold text-[#191919] group-hover:text-[#021B3A] transition-colors">
                      {item.q}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full border border-[#DFDDD7] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "rotate-45 bg-[#021B3A] text-white border-[#021B3A]"
                          : "text-[#191919]"
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: EDITORIAL_EASE }}
                        className="overflow-hidden"
                      >
                        <p className="pt-3 pr-8 text-sm sm:text-[15px] leading-[1.62] text-[#525252]">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          ARCHITECTURAL DARK NAVY FOOTER (STRYDE BRAND SIGNATURE)
          ===================================================================== */}
      <footer className="bg-[#021B3A] text-white pt-20 pb-14 px-5 sm:px-8">
        <div className="max-w-[1200px] mx-auto">
          {/* Single Bold Pre-Footer Callout Strip */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-16 border-b border-white/12">
            <div className="space-y-2 max-w-[560px]">
              <h3 className="font-editorial text-3xl sm:text-4xl text-white">
                Prêt à structurer votre prochain palier ?
              </h3>
              <p className="text-sm sm:text-base text-white/75">
                Passez le diagnostic en 60 secondes puis choisissez directement votre créneau
                d’appel téléphonique.
              </p>
            </div>

            <button
              type="button"
              onClick={() => openDiagnosticPage()}
              className="inline-flex items-center gap-2.5 self-start md:self-auto rounded-full bg-[#7FE0EE] hover:bg-white text-[#021B3A] text-sm font-bold px-7 py-4 transition-all cursor-pointer shrink-0"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Passer le test & Prendre RDV</span>
            </button>
          </div>

          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 py-14 border-b border-white/12">
            <div className="lg:col-span-4 space-y-4">
              <StrydeLogo layout="stacked" theme="light" className="items-start" />
              <p className="text-sm text-white/70 leading-relaxed max-w-[280px]">
                Agence de stratégie de contenu, de positionnement et d’acquisition pour
                influenceurs et infopreneurs.
              </p>
            </div>

            <div className="lg:col-span-3 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7FE0EE]">
                Ce que nous proposons
              </div>
              <ul className="space-y-2.5 text-sm text-white/80">
                <li>
                  <a href="#organique" className="hover:text-white transition-colors">
                    Stryde Organique & Scripts
                  </a>
                </li>
                <li>
                  <a href="#infopreneuriat" className="hover:text-white transition-colors">
                    Stryde Infopreneuriat & Tunnels
                  </a>
                </li>
                <li>
                  <a href="#summit" className="hover:text-white transition-colors">
                    Synergie Organique × Ads
                  </a>
                </li>
                <li>
                  <a href="#programmes" className="hover:text-white transition-colors">
                    Programmes Summit & Fondation
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7FE0EE]">
                Parcours client
              </div>
              <ul className="space-y-2.5 text-sm text-white/80">
                <li>
                  <a href="#manifeste" className="hover:text-white transition-colors">
                    Notre vision éditoriale
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => openDiagnosticPage()}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    Portail Test de positionnement
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => openDiagnosticPage()}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    Réserver un appel stratégique
                  </button>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    Questions fréquentes
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7FE0EE]">
                Informations
              </div>
              <ul className="space-y-2.5 text-sm text-white/80">
                <li>France • Belgique • Suisse • Canada</li>
                <li className="pt-1">
                  <button
                    type="button"
                    onClick={() => openAdminBackend()}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#7FE0EE] hover:text-white transition-colors cursor-pointer"
                  >
                    <Database className="w-3.5 h-3.5" />
                    <span>Espace Back-Office</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/55">
            <div>© {new Date().getFullYear()} Stryde Agency. Tous droits réservés.</div>
            <div className="max-w-[520px] sm:text-right">
              Communication authentique, sans faux avis ni promesses de revenus standardisées.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
