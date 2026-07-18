import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://korivo.com.br"), // trocar pelo domínio oficial

  title: {
    default: "Korivo | Sistema Financeiro e Gestão Empresarial",
    template: "%s | Korivo",
  },

  description:
    "Korivo é um sistema de gestão empresarial completo para pequenas e médias empresas. Controle financeiro, contas a pagar e receber, fluxo de caixa, relatórios inteligentes, dashboards, cadastro de clientes, produtos e estoque em um só lugar.",

  keywords: [
    "Sistema Financeiro",
    "Sistema Empresarial",
    "ERP",
    "Gestão Empresarial",
    "Gestão Financeira",
    "Fluxo de Caixa",
    "Contas a Pagar",
    "Contas a Receber",
    "Controle Financeiro",
    "Dashboard Financeiro",
    "Relatórios Financeiros",
    "Controle de Estoque",
    "Cadastro de Clientes",
    "Cadastro de Produtos",
    "Controle de Vendas",
    "Sistema para Empresas",
    "Software de Gestão",
    "ERP Online",
    "Sistema de Gestão Online",
    "Korivo"
  ],

  authors: [
    {
      name: "Korivo",
      url: "https://korivo.com.br",
    },
  ],

  creator: "Korivo",

  publisher: "Korivo",

  applicationName: "Korivo",

  category: "Business",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Korivo | Sistema Financeiro e Gestão Empresarial",

    description:
      "Organize sua empresa com o Korivo. Controle contas a pagar e receber, fluxo de caixa, estoque, clientes e acompanhe dashboards e relatórios em tempo real.",

    url: "https://korivo.com.br",

    siteName: "Korivo",

    locale: "pt_BR",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Korivo - Sistema Financeiro e Gestão Empresarial",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Korivo | Sistema Financeiro e Gestão Empresarial",
    description:
      "Sistema completo para controle financeiro, fluxo de caixa, clientes, estoque e relatórios empresariais.",
    images: ["/og-image.jpg"],
  },
};


export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className={``}>
      <body className="min-h-full flex flex-col">

        {children}

      </body>
    </html>
  );
}
