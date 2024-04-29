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
      }),
    ],
  },
  title: "Skyier Support",
  description: "Skyier support page",
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
          { text: "Pakiety", link: "/docs/bundle" },
          { text: "Społeczność", link: "/docs/community" },
          { text: "Konsultacje", link: "/docs/consultation" },
          { text: "Ebook", link: "/docs/ebook" },
          { text: "Integracje E-mail", link: "/docs/integrations-email" },
          { text: "Integracje Płatności", link: "/docs/integrations-payment" },
          { text: "Live", link: "/docs/live" },
          { text: "Kursy", link: "/docs/online-course" },
          { text: "Inne", link: "/docs/other" },
          { text: "Strony", link: "/docs/pages" },
          { text: "Ustawienia Strony", link: "/docs/platform-settings" },
          { text: "Sprzedaż", link: "/docs/sales" },
          { text: "Panel Studenta", link: "/docs/student-panel" },
          { text: "Studenci", link: "/docs/students" },
          { text: "Subskrypcja", link: "/docs/subscription" },
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
});
