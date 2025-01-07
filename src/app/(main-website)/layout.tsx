import { ThemeProvider } from "@mui/material";
// import { AppRouterCacheProvider } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import theme from "../theme";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
          <AppHeader />
          {children}
          <AppFooter />
          </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
    </html>
  );
}
