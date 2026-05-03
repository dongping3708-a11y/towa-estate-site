export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link rel="stylesheet" href="/globals.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}