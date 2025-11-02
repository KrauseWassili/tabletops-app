import Link from "next/link";

export default function EventsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>
    <nav>
        <Link href="/events/add-event">Add event</Link>    
    </nav>
    
    {children}</div>;
}