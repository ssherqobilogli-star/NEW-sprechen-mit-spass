import { Outlet } from 'react-router-dom';
import Header from './Header';
import BottomNav from './BottomNav';
import Sidebar from './Sidebar';
import BlobShape from './BlobShape';

export default function Layout() {
  return (
    <div className="min-h-screen bg-[var(--background)] flex flex-col lg:flex-row relative overflow-hidden">
      <BlobShape type="1" />
      <BlobShape type="2" />

      <Sidebar />

      <div className="flex-1 flex flex-col z-10 w-full lg:ml-64">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 pb-24 lg:pb-8 animate-fade-in-up">
          <Outlet />
        </main>
      </div>

      <BottomNav />
    </div>
  );
}