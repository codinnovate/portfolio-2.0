export const metadata = {
  title: 'Portfolio CMS - Sanity Studio',
  description: 'Content management for portfolio projects',
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
} 