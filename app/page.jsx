// app/page.js
import { Hero } from '@/components/Hero';
// import {Card} from '@/components/ProductsPage'
import ProductsPage from '@/components/ProductsPage';

export default function HomePage() {
  return (
    <main>
      <Hero />
      {/* <Card /> */}
      <ProductsPage />
    </main>
  );
}
