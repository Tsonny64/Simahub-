// src/app/page.js
import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Welcome to My Website</h1>
      <nav>
        <Link href="/admin/dashboard">Go to Admin Dashboard</Link>
      </nav>
    </div>
  );
}
