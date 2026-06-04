import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Personal Trainer Woo | 1:1 개인 건강관리 코칭",
  description:
    "단순한 운동 지도를 넘어 영양, 수면, 마음 챙김까지. 당신의 일상이 지속 가능한 건강함으로 채워지도록 설계합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/fill/style.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
