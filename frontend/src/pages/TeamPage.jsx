import SiteNavigation from "../components/SiteNavigation";
import { useLanguage } from "../i18n";

const teamPhotos = [
  {
    src: "/team/team-member-1.png",
    alt: "Evergreen team member speaking at a community event",
    position: "object-top",
  },
  {
    src: "/team/team-member-2.png",
    alt: "Evergreen team member",
    position: "object-center",
  },
];

export default function TeamPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-cream-50">
      <SiteNavigation />

      <main className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <section className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-forest-600">{t("team.eyebrow")}</p>
          <h1 className="mt-4 font-display text-4xl font-medium leading-tight tracking-tight text-forest-950 sm:text-6xl">
            {t("team.title")}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            {t("team.description")}
          </p>
        </section>

        <section aria-label="Evergreen team members" className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
          {teamPhotos.map((photo, index) => (
            <article key={photo.src} className="overflow-hidden rounded-3xl border border-forest-950/10 bg-white shadow-lg">
              <img
                className={`aspect-[4/5] w-full object-cover ${photo.position}`}
                src={photo.src}
                alt={photo.alt}
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="p-5 sm:p-6">
                <p className="eyebrow text-forest-600">{t("team.evergreen")}</p>
                <h2 className="mt-2 font-display text-xl font-semibold text-forest-950">
                  {t("team.ourTeam")}
                </h2>
              </div>
            </article>
          ))}
        </section>
      </main>

      <footer className="bg-forest-950 px-5 py-6 text-center text-xs text-white/55 sm:px-8">
        {t("team.footer").replace("{year}", new Date().getFullYear())}
      </footer>
    </div>
  );
}
