import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop - DESTROY",
  description: "Boutique en ligne DESTROY - Bientôt disponible",
};

export default function ShopPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="container-destroy section-padding text-center">
        <h1 className="section-title">Shop</h1>
        <p className="text-lg text-destroy-gray-600">
          Boutique en ligne bientôt disponible
        </p>
      </div>
    </main>
  );
} 