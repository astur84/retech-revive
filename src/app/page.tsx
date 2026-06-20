import Header from '../components/Header';
import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import { createClient } from '../lib/supabase/server';

export default async function Home() {
  const supabase = createClient();
  const { data: categories } = await supabase.from('categories').select('*');

  return (
    <main className="bg-bg min-h-screen text-text">
      <Header />
      <Hero />
      <section className="max-w-[1180px] mx-auto px-7 py-20">
        <h2 className="font-display text-4xl mb-12">Categorías del foro</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {categories?.map((cat) => (
            <CategoryCard key={cat.id} {...cat} />
          ))}
        </div>
      </section>
    </main>
  );
}
