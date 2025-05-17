import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Perfumes Elisa Catálogo</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Placeholder for perfume cards */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
              <img
                src="https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
                alt="Perfume placeholder"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <h2 className="mt-4 text-lg font-medium text-gray-900">Perfume Example</h2>
            <p className="mt-1 text-sm text-gray-500">Descripción del perfume</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App