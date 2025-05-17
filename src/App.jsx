import React, { useState } from 'react';
import { PerfumeCard } from './components/PerfumeCard';
import { SearchBar } from './components/SearchBar';
import { Menu } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Ejemplo de datos - NO modificamos la lógica de datos reales
  const examplePerfumes = [
    {
      id: 1,
      name: "Perfume Ejemplo 1",
      description: "Fragancia floral y dulce",
      image: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
    },
    {
      id: 2,
      name: "Perfume Ejemplo 2",
      description: "Aroma fresco y cítrico",
      image: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Fijo */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="text-xl font-bold text-gray-900">Perfumes Elisa</h1>
          </div>
          <div className="mt-3">
            <SearchBar onSearch={(value) => console.log(value)} />
          </div>
        </div>
      </header>

      {/* Menú lateral en móvil */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity md:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}>
        <div className={`fixed inset-y-0 left-0 w-64 bg-white transform transition-transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
          onClick={e => e.stopPropagation()}>
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Categorías</h2>
            {/* Aquí irían las categorías */}
          </div>
        </div>
      </div>

      {/* Contenido Principal */}
      <main className="max-w-7xl mx-auto px-4 pt-32 pb-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {examplePerfumes.map(perfume => (
            <PerfumeCard
              key={perfume.id}
              image={perfume.image}
              name={perfume.name}
              description={perfume.description}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;