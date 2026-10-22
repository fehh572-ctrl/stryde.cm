import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Layers,
  Sparkles,
  Check,
  PhoneCall,
  Play,
  Compass,
  TrendingUp,
  Megaphone,
  BarChart3,
  CalendarDays,
} from "lucide-react";
import { EditorialReveal, EDITORIAL_EASE } from "./MotionPrimitives";
import { useDiagnosticBooking } from "../context/DiagnosticBookingContext";
import { FuturisticMountainVisual } from "./FuturisticMountainVisual";

const SCRIPT_ANATOMY = [
  {
    id: "hook",
    time: "00:00 – 00:03",
    label: "Hook",
    title: "Capter l’acheteur dès la première seconde",
    detail:
      "Une accroche précise qui filtre les simples curieux pour ne retenir que votre cible.",
  },
  {
    id: "shift",
    time: "00:04 – 00:22",
    label: "Rupture",
    title: "Installer une perspective nouvelle",
    detail:
      "Déconstruit une idée reçue de votre marché pour asseoir votre autorité naturellement.",
  },
  {
    id: "mechanism",
    time: "00:23 – 00:50",
    label: "Méthode",
    title: "Délivrer une vraie valeur applicable",
    detail:
      "Structure rythmée qui maintient l’écoute jusqu’au bout sur Reels, TikTok et YouTube.",
  },
  {
    id: "bridge",
    time: "00:51 – Fin",
    label: "Pont",
    title: "Ouvrir la porte vers votre offre",
    detail:
      "Une transition fluide qui invite les profils qualifiés vers votre diagnostic et l’appel.",
  },
];

const FUNNEL_STEPS = [
  {
    step: "01",
    title: "Découverte ciblée",
    meta: "Reels • TikTok • Shorts",
    desc: "Capte une audience qualifiée autour d’un angle fort lié à votre expertise.",
  },
  {
    step: "02",
    title: "Preuve de compétence",
    meta: "YouTube • Carrousels",
    desc: "Bâtit la confiance et démontre votre méthode avant même le premier échange.",
  },
  {
    step: "03",
    title: "Pré-diagnostic filtrant",
    meta: "Portail Stryde",
    desc: "Qualifie le site, l’objectif et la maturité du prospect en moins d’une minute.",
  },
  {
    step: "04",
    title: "Appel de conversion",
    meta: "Rendez-vous téléphonique",
    desc: "Vous échangez uniquement avec des profils préparés et alignés avec votre offre.",
  },
];

const SUMMIT_TABS = [
  {
    id: "audit",
    code: "01",
    label: "Audit & Positionnement",
    icon: Compass,
    summary:
      "Définition de vos 3 piliers éditoriaux uniques et alignement direct entre vos sujets de vidéos, votre site et votre offre.",
  },
  {
    id: "content",
    code: "02",
    label: "Architecture de Scripts",
    icon: TrendingUp,
    summary:
      "Trames narratives sur mesure, hooks testés et recyclage structuré entre formats longs et courts pour tenir sur la durée.",
  },
  {
    id: "ads",
    code: "03",
    label: "Amplification Organique × Ads",
    icon: Megaphone,
    summary:
      "Transformation de vos meilleurs contenus organiques en publicités d’acquisition et retargeting vers la prise de RDV.",
  },
];

const PORTFOLIO_PROFILES = [
  {
    id: "infopreneur",
    label: "Infopreneur",
    subtitle: "Priorité conversion & appels qualifiés",
    mix: [
      { name: "Autorité & Preuve de méthode", pct: 42, color: "#021B3A" },
      { name: "Hooks découverte organique", pct: 24, color: "#358298" },
      { name: "Creative Ads & Retargeting", pct: 20, color: "#5CB6CB" },
      { name: "Ponts VSL & Qualification", pct: 14, color: "#90DCEB" },
    ],
  },
  {
    id: "influenceur",
    label: "Influenceur",
    subtitle: "Priorité audience & lancement d’offre",
    mix: [
      { name: "Autorité & Preuve de méthode", pct: 30, color: "#021B3A" },
      { name: "Hooks découverte organique", pct: 44, color: "#358298" },
      { name: "Creative Ads & Retargeting", pct: 12, color: "#5CB6CB" },
      { name: "Ponts VSL & Qualification", pct: 14, color: "#90DCEB" },
    ],
  },
  {
    id: "hybride",
    label: "Scale Hybride",
    subtitle: "Synergie intensive Organique × Paid",
    mix: [
      { name: "Autorité & Preuve de méthode", pct: 32, color: "#021B3A" },
      { name: "Hooks découverte organique", pct: 22, color: "#358298" },
      { name: "Creative Ads & Retargeting", pct: 32, color: "#5CB6CB" },
      { name: "Ponts VSL & Qualification", pct: 14, color: "#90DCEB" },
    ],
  },
];

const FONDATION_PHASES = [
  {
    month: "Mois 01",
    title: "Positionnement & Matrice Éditoriale",
    cadence: "2 à 3 formats ciblés / sem.",
    focus:
      "Clarification de votre promesse centrale, mise à plat de votre site et création de vos 30 premiers angles.",
    bars: [38, 52, 68, 84],
  },
  {
    month: "Mois 02",
    title: "Rétention & Pont de Conversion",
    cadence: "3 à 4 formats calibrés / sem.",
    focus:
      "Optimisation des 3 premières secondes, fluidité face caméra et connexion directe vers la prise de RDV.",
    bars: [54, 70, 86, 94],
  },
  {
    month: "Mois 03",
    title: "Autonomie & Amplification",
    cadence: "Système régulier & prévisible",
    focus:
      "Sélection des contenus gagnants et lancement du retargeting sur votre audience engagée.",
    bars: [68, 82, 92, 100],
  },
];

/**
 * Top Alternating Feature Splits (Before Manifesto):
 * Split 1: Visual Left / Text Right (Stryde Organique)
 * Split 2: Text Left / Visual Right (Stryde Infopreneuriat)
 */
export const CorePillarsShowcases: React.FC = () => {
  const { openDiagnosticPage } = useDiagnosticBooking();
  const [activeScriptIdx, setActiveScriptIdx] = useState(0);
  const [activeFunnelStep, setActiveFunnelStep] = useState(2);

  return (
    <div>
      {/* =====================================================================
          SPLIT 1: STRYDE ORGANIQUE — [INTERACTIVE VISUAL LEFT / CONCISE TEXT RIGHT]
          ===================================================================== */}
      <section id="organique" className="bg-[#F7F5F0] border-t border-[#ECE9E1] py-20 sm:py-28 px-5 sm:px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: Interactive Script Anatomy Studio */}
          <EditorialReveal className="lg:col-span-6 order-2 lg:order-1">
            <div className="rounded-[28px] bg-white border border-[#E4E0D7] p-6 sm:p-7 shadow-[0_18px_50px_rgba(2,27,58,0.05)]">
              <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#EFECE6]">
                <span className="text-xs font-semibold uppercase tracking-[0.09em] text-[#021B3A] flex items-center gap-2">
                  <Play className="w-3.5 h-3.5 fill-[#4FA3B8] text-[#4FA3B8]" />
                  Anatomie d’un script Stryde
                </span>
                <span className="font-mono-data text-[11px] text-[#358298]">
                  4 temps clés
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-4">
                {SCRIPT_ANATOMY.map((item, idx) => {
                  const selected = activeScriptIdx === idx;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveScriptIdx(idx)}
                      className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer ${
                        selected
                          ? "bg-[#021B3A] border-[#021B3A] text-white"
                          : "bg-[#FAF9F6] hover:bg-[#F3F0EA] border-[#E7E4DC] text-[#191919]"
                      }`}
                    >
                      <div
                        className={`font-mono-data text-[10px] ${
                          selected ? "text-[#7FE0EE]" : "text-[#6E6E6E]"
                        }`}
                      >
                        {item.time}
                      </div>
                      <div className="text-xs font-semibold mt-0.5">{item.label}</div>
                    </button>
                  );
                })}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={SCRIPT_ANATOMY[activeScriptIdx].id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.22, ease: EDITORIAL_EASE }}
                  className="rounded-2xl bg-[#FAF9F6] border border-[#ECE9E2] p-4"
                >
                  <div className="text-sm font-semibold text-[#021B3A]">
                    {SCRIPT_ANATOMY[activeScriptIdx].title}
                  </div>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mt-1">
                    {SCRIPT_ANATOMY[activeScriptIdx].detail}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-4 pt-3 border-t border-[#EFECE6] flex items-center justify-between text-xs text-[#666666]">
                <span>YouTube • Instagram • TikTok • LinkedIn</span>
                <span className="font-mono-data text-[#021B3A] font-semibold">Rétention haute</span>
              </div>
            </div>
          </EditorialReveal>

          {/* Right: Crisp Editorial Copy */}
          <EditorialReveal delay={0.08} className="lg:col-span-6 order-1 lg:order-2 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#021B3A]">
              <Layers className="w-4 h-4 text-[#4FA3B8]" />
              Stryde Organique
            </div>

            <h2 className="font-editorial text-[34px] sm:text-[46px] leading-[1.07] tracking-[-0.025em] text-[#191919]">
              Un contenu conçu pour retenir l’attention jusqu’au bout.
            </h2>

            <p className="text-base sm:text-[18px] leading-[1.6] text-[#4F4F4F] max-w-[490px]">
              Plus de page blanche ni de vidéos qui tombent à plat. Nous structurons vos angles,
              vos hooks et vos scripts tout en gardant votre ton naturel.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => openDiagnosticPage()}
                className="group inline-flex items-center gap-2 rounded-full bg-[#021B3A] hover:bg-[#092C58] text-white text-sm font-semibold px-6 py-3.5 transition-all cursor-pointer"
              >
                <span>Auditer mon contenu organique</span>
                <ArrowRight className="w-4 h-4 text-[#7FE0EE] transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
            </div>
          </EditorialReveal>
        </div>
      </section>

      {/* =====================================================================
          SPLIT 2: STRYDE INFOPRENEURIAT — [CONCISE TEXT LEFT / INTERACTIVE VISUAL RIGHT]
          ===================================================================== */}
      <section id="infopreneuriat" className="bg-white py-20 sm:py-28 px-5 sm:px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: Crisp Editorial Copy */}
          <EditorialReveal className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#021B3A]">
              <Sparkles className="w-4 h-4 text-[#358298]" />
              Stryde Infopreneuriat
            </div>

            <h2 className="font-editorial text-[34px] sm:text-[46px] leading-[1.07] tracking-[-0.025em] text-[#191919]">
              Transformez vos vues en rendez-vous qualifiés.
            </h2>

            <p className="text-base sm:text-[18px] leading-[1.6] text-[#4F4F4F] max-w-[490px]">
              Une belle audience ne suffit pas sans tunnel clair derrière. Nous relions vos
              contenus gratuits à votre site et à vos accompagnements sans friction.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => openDiagnosticPage()}
                className="group inline-flex items-center gap-2 rounded-full bg-[#EAF2F5] hover:bg-[#DCE9EE] text-[#021B3A] text-sm font-semibold px-6 py-3.5 transition-colors cursor-pointer"
              >
                <span>Évaluer mon tunnel de conversion</span>
                <ArrowRight className="w-4 h-4 text-[#021B3A] transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
            </div>
          </EditorialReveal>

          {/* Right: Interactive Conversion Bridge Card */}
          <EditorialReveal delay={0.08} className="lg:col-span-6">
            <div className="rounded-[28px] bg-[#EAF2F5] border border-[#D5E4EA] p-6 sm:p-7">
              <div className="rounded-2xl bg-white border border-[#D8E6EC] p-5 sm:p-6 shadow-xs">
                <div className="flex items-center justify-between gap-2 pb-3.5 border-b border-[#EDF3F5]">
                  <span className="text-xs font-semibold uppercase tracking-[0.09em] text-[#021B3A]">
                    Chaîne de conversion éditoriale
                  </span>
                  <span className="font-mono-data text-[11px] text-[#358298]">
                    Formations • Coaching
                  </span>
                </div>

                <div className="space-y-2 mt-4">
                  {FUNNEL_STEPS.map((st, i) => {
                    const isSelected = activeFunnelStep === i;
                    return (
                      <button
                        key={st.step}
                        type="button"
                        onClick={() => setActiveFunnelStep(i)}
                        className={`w-full px-4 py-3 rounded-xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? "bg-[#021B3A] border-[#021B3A] text-white"
                            : "bg-[#F7FAFB] hover:bg-[#EDF4F7] border-[#E1ECF0] text-[#191919]"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs sm:text-sm font-semibold">
                            <span
                              className={`font-mono-data mr-2 ${
                                isSelected ? "text-[#7FE0EE]" : "text-[#358298]"
                              }`}
                            >
                              {st.step}
                            </span>
                            {st.title}
                          </span>
                          <span
                            className={`font-mono-data text-[10px] px-2 py-0.5 rounded-full ${
                              isSelected
                                ? "bg-[#4FA3B8]/25 text-[#7FE0EE]"
                                : "bg-white text-[#358298]"
                            }`}
                          >
                            {st.meta}
                          </span>
                        </div>
                        {isSelected && (
                          <p className="text-xs text-white/80 mt-1.5 leading-relaxed">{st.desc}</p>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </EditorialReveal>
        </div>
      </section>
    </div>
  );
};

/**
 * Bottom Alternating Sections (After Manifesto):
 * Split 3: Dark Summit Band — Unframed Futuristic 3D Mountains Left / Interactive Phases Right
 * Split 4: Programme Summit — Text Left / Allocation Simulator Right
 * Split 5: Programme Fondation — 90-Day Trajectory Left / Text Right
 */
export const ProductShowcases: React.FC = () => {
  const { openDiagnosticPage } = useDiagnosticBooking();
  const [summitTab, setSummitTab] = useState(0);
  const [portfolioIdx, setPortfolioIdx] = useState(0);
  const [fondationIdx, setFondationIdx] = useState(0);

  const currentPortfolio = PORTFOLIO_PROFILES[portfolioIdx];
  const currentFondation = FONDATION_PHASES[fondationIdx];

  return (
    <div>
      {/* =====================================================================
          SPLIT 3: DARK SIGNATURE BAND — [3D MOUNTAINS LEFT / CONCISE PHASES RIGHT]
          ===================================================================== */}
      <section
        id="summit"
        className="bg-[#02162E] text-white py-24 sm:py-32 px-5 sm:px-8 relative overflow-hidden"
      >
        <div
          className="pointer-events-none absolute -top-40 left-0 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, #4FA3B8 0%, rgba(2,22,46,0) 70%)",
          }}
        />

        <div className="max-w-[1200px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Clean Unobstructed Frameless 3D Connected Mountains */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex items-center justify-center">
            <FuturisticMountainVisual
              variant="dark"
              activePeak={summitTab as 0 | 1 | 2}
              className="h-[310px] sm:h-[390px] w-full"
            />
          </div>

          {/* Right: Crisp Title + Self-Contained Interactive 3-Phase Accordion */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <EditorialReveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#7FE0EE]">
                Stryde Active Growth
              </span>

              <h2 className="font-editorial text-[34px] sm:text-[46px] leading-[1.07] tracking-[-0.025em] text-white font-normal mt-2.5">
                Amplifiez uniquement ce qui fonctionne déjà.
              </h2>

              <p className="text-base sm:text-[17px] text-white/75 leading-relaxed mt-3 max-w-[500px]">
                L’organique identifie vos meilleurs angles. La publicité les déploie à grande
                échelle auprès de profils identiques.
              </p>
            </EditorialReveal>

            <div className="space-y-2.5 pt-1">
              {SUMMIT_TABS.map((t, index) => {
                const Icon = t.icon;
                const active = summitTab === index;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setSummitTab(index)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      active
                        ? "bg-white/10 border-[#7FE0EE]/50 shadow-sm"
                        : "bg-white/[0.03] hover:bg-white/[0.06] border-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3.5">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                            active ? "bg-[#7FE0EE] text-[#021B3A]" : "bg-white/10 text-white/70"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="font-semibold text-sm sm:text-base text-white">
                          <span className="font-mono-data text-xs text-[#7FE0EE] mr-2">
                            {t.code}
                          </span>
                          {t.label}
                        </div>
                      </div>
                      <ArrowRight
                        className={`w-4 h-4 shrink-0 transition-transform ${
                          active ? "text-[#7FE0EE] rotate-90" : "text-white/40"
                        }`}
                      />
                    </div>

                    {active && (
                      <p className="text-xs sm:text-sm text-white/75 leading-relaxed mt-3 pl-12">
                        {t.summary}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => openDiagnosticPage()}
                className="inline-flex items-center gap-2.5 rounded-full bg-white hover:bg-[#EBF4F6] text-[#021B3A] text-sm font-semibold px-7 py-3.5 transition-all cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-[#021B3A]" />
                <span>Tester mon potentiel Organique × Ads</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SPLIT 4: PROGRAMME SUMMIT — [CONCISE TEXT LEFT / SIMULATOR RIGHT]
          ===================================================================== */}
      <section id="programmes" className="bg-white py-22 sm:py-28 px-5 sm:px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <EditorialReveal className="lg:col-span-5 space-y-5">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#358298]">
              Programme Summit
            </span>

            <h2 className="font-editorial text-[34px] sm:text-[44px] leading-[1.08] tracking-[-0.025em] text-[#191919]">
              Direction éditoriale complète. Zéro dispersion.
            </h2>

            <p className="text-base sm:text-[17px] text-[#4F4F4F] leading-relaxed">
              Pensé pour les créateurs établis et infopreneurs en croissance qui veulent déléguer
              l’architecture des scripts, l’optimisation du tunnel et les créatives Ads.
            </p>

            <ul className="space-y-2.5 pt-1 text-sm text-[#191919]">
              {[
                "Positionnement d’autorité & trames hebdomadaires",
                "Optimisation page de vente, VSL & parcours RDV",
                "Pilotage créatif Meta / YouTube / TikTok Ads",
              ].map((tag) => (
                <li key={tag} className="flex items-center gap-2.5 font-medium">
                  <Check className="w-4 h-4 text-[#358298] shrink-0" />
                  <span>{tag}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => openDiagnosticPage()}
                className="inline-flex items-center gap-2 rounded-full bg-[#021B3A] hover:bg-[#0A2C58] text-white text-sm font-semibold px-7 py-3.5 transition-all cursor-pointer"
              >
                <span>Vérifier mon éligibilité</span>
                <ArrowRight className="w-4 h-4 text-[#7FE0EE]" />
              </button>
            </div>
          </EditorialReveal>

          <EditorialReveal delay={0.08} className="lg:col-span-7">
            <div className="rounded-[28px] bg-[#F3F0EA] border border-[#E5E1D8] p-5 sm:p-8">
              <div className="rounded-2xl bg-white border border-[#E5E1D8] p-5 sm:p-7 shadow-xs space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3.5 border-b border-[#EFECE6]">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#358298]">
                      <BarChart3 className="w-3.5 h-3.5" />
                      Répartition Éditoriale Cible
                    </div>
                    <div className="font-editorial text-xl sm:text-2xl text-[#191919] mt-0.5">
                      {currentPortfolio.subtitle}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 p-1 rounded-xl bg-[#FAF9F6] border border-[#E6E3DC]">
                  {PORTFOLIO_PROFILES.map((prof, idx) => {
                    const active = portfolioIdx === idx;
                    return (
                      <button
                        key={prof.id}
                        type="button"
                        onClick={() => setPortfolioIdx(idx)}
                        className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          active
                            ? "bg-[#021B3A] text-white shadow-xs"
                            : "text-[#5C5C5C] hover:text-[#191919]"
                        }`}
                      >
                        {prof.label}
                      </button>
                    );
                  })}
                </div>

                <div className="space-y-3.5 pt-1">
                  {currentPortfolio.mix.map((row) => (
                    <div key={row.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="font-medium text-[#191919]">{row.name}</span>
                        <span className="font-mono-data font-semibold text-[#021B3A]">
                          {row.pct}%
                        </span>
                      </div>
                      <div className="h-2.5 w-full rounded-full bg-[#F3F0EA] overflow-hidden">
                        <motion.div
                          initial={false}
                          animate={{ width: `${row.pct}%` }}
                          transition={{ duration: 0.5, ease: EDITORIAL_EASE }}
                          style={{ backgroundColor: row.color }}
                          className="h-full rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </EditorialReveal>
        </div>
      </section>

      {/* =====================================================================
          SPLIT 5: PROGRAMME FONDATION — [90-DAY TRAJECTORY LEFT / CONCISE TEXT RIGHT]
          ===================================================================== */}
      <section className="bg-[#F7F5F0] border-t border-[#ECE9E1] py-22 sm:py-28 px-5 sm:px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <EditorialReveal className="lg:col-span-7 order-2 lg:order-1">
            <div className="rounded-[28px] bg-[#EAF2F5] border border-[#D4E4EA] p-5 sm:p-8">
              <div className="rounded-2xl bg-white border border-[#D6E5EB] p-5 sm:p-7 shadow-xs space-y-5">
                <div className="flex items-center justify-between gap-3 pb-3.5 border-b border-[#EDF3F5]">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#358298]">
                      <CalendarDays className="w-3.5 h-3.5" />
                      Trajectoire 90 Jours
                    </div>
                    <div className="font-editorial text-xl sm:text-2xl text-[#191919] mt-0.5">
                      {currentFondation.title}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {FONDATION_PHASES.map((ph, idx) => {
                    const active = fondationIdx === idx;
                    return (
                      <button
                        key={ph.month}
                        type="button"
                        onClick={() => setFondationIdx(idx)}
                        className={`py-2 px-3 rounded-xl border font-mono-data text-xs font-semibold transition-all cursor-pointer ${
                          active
                            ? "bg-[#021B3A] text-[#7FE0EE] border-[#021B3A]"
                            : "bg-[#F7FAFB] hover:bg-[#EDF4F7] text-[#191919] border-[#DCE9EE]"
                        }`}
                      >
                        {ph.month}
                      </button>
                    );
                  })}
                </div>

                <div className="rounded-2xl bg-[#F7FAFB] border border-[#E1ECF0] p-5">
                  <div className="flex items-end justify-between gap-3 h-24 px-2">
                    {currentFondation.bars.map((val, idx) => (
                      <div
                        key={idx}
                        className="flex-1 flex flex-col items-center gap-2 h-full justify-end"
                      >
                        <motion.div
                          initial={false}
                          animate={{ height: `${val}%` }}
                          transition={{ duration: 0.48, ease: EDITORIAL_EASE }}
                          className="w-full max-w-[54px] rounded-t-xl bg-gradient-to-t from-[#021B3A] to-[#4FA3B8]"
                        />
                        <span className="font-mono-data text-[10px] text-[#5C6B73]">
                          Sem. {idx + 1}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#4F5D65]">
                  <span>{currentFondation.focus}</span>
                  <span className="shrink-0 font-semibold text-[#021B3A]">
                    {currentFondation.cadence}
                  </span>
                </div>
              </div>
            </div>
          </EditorialReveal>

          <EditorialReveal delay={0.08} className="lg:col-span-5 order-1 lg:order-2 space-y-5">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#358298]">
              Programme Fondation
            </span>

            <h2 className="font-editorial text-[34px] sm:text-[44px] leading-[1.08] tracking-[-0.025em] text-[#191919]">
              Un cadre clair sur 90 jours, calibré à votre rythme.
            </h2>

            <p className="text-base sm:text-[17px] text-[#4F4F4F] leading-relaxed">
              Idéal pour poser des fondations solides : clarifier votre offre, maîtriser vos
              accroches et installer un système de rendez-vous régulier sans vous épuiser.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => openDiagnosticPage()}
                className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-[#EAE6DC] border border-[#DFDDD6] text-[#191919] text-sm font-semibold px-7 py-3.5 transition-colors cursor-pointer"
              >
                <span>Découvrir le format adapté</span>
                <ArrowRight className="w-4 h-4 text-[#021B3A]" />
              </button>
            </div>
          </EditorialReveal>
        </div>
      </section>
    </div>
  );
};
