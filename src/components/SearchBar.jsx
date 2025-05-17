import React from 'react';
import { Search } from 'lucide-react';

export function SearchBar({ onSearch }) {
  return (
    <div className="relative">
      <input
        type="search"
        placeholder="Buscar perfumes..."
        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        onChange={(e) => onSearch(e.target.value)}
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
    </div>
  );
}