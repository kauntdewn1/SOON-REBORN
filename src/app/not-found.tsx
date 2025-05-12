import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "Página não encontrada | FLOW//REBORN",
  description: "A página que você está procurando não existe.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#DC0000] mb-4">404</h1>
        <p className="text-xl mb-8">Página não encontrada</p>
        <a href="/" className="text-[#DC0000] hover:text-[#DC0000]/80 transition-colors">
          Voltar para a página inicial
        </a>
      </div>
    </div>
  );
} 