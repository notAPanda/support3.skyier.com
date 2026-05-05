import { defineConfig } from "vitepress";
import { pagefindPlugin } from "vitepress-plugin-pagefind";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    plugins: [
      pagefindPlugin({
        btnPlaceholder: "Szukaj",
        placeholder: "Szukaj",
        emptyText: "Nic nie znaleziono",
        heading: "Znaleziono: {{searchResult}} rezultatów",
        showDate: false,
        excludeSelector: ['img', 'a.header-anchor', 'div.aside', '.sidebar'],
        forceLanguage: 'pl',
      }),
    ],
  },
  lang: "pl-PL",
  title: "Skyier Support",
  description: "Dokumentacja platformy do sprzedaży kursów Skyier",
  head: [
    [
      "meta",
      {
        name: "google-site-verification",
        content: "y3QX1xBblL6NxEKaehxZb0G4RZiQgywEhv_D0DfJmSI",
      },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Strona główna", link: "/" },
      { text: "Dokumentacja", link: "/docs/bundle" },
    ],

    sidebar: [
      {
        text: "Dokumentacja",
        items: [
          { text: "Kursy online", link: "/docs/online-course" },
          { text: "Ebook", link: "/docs/ebook" },
          { text: "Konsultacje", link: "/docs/consultation" },
          { text: "Live", link: "/docs/live" },
          { text: "Pakiety", link: "/docs/bundle" },
          { text: "Społeczność", link: "/docs/community" },
          { text: "Produkty fizyczne", link: "/docs/physical-products" },
          { text: "Strony", link: "/docs/pages" },
          { text: "Sprzedaż", link: "/docs/sales" },
          { text: "Subskrypcja", link: "/docs/subscription" },
          { text: "Studenci", link: "/docs/students" },
          { text: "Panel Studenta", link: "/docs/student-panel" },
          { text: "Ustawienia Strony", link: "/docs/platform-settings" },
          { text: "Integracje E-mail", link: "/docs/integrations-email" },
          { text: "Integracje Płatności", link: "/docs/integrations-payment" },
          { text: "Inne", link: "/docs/other" },
          { text: "Kody JavaScript", link: "/docs/tracking-codes" },
          { text: "WooComeerce", link: "/docs/woocommerce" },
        ],
      },
    ],

    socialLinks: [],
  },
  locales: {
    root: {
      label: "Polski",
      lang: "pl",
    },
  },
  sitemap: {
    hostname: 'https://support.skyier.com'
  }
});
