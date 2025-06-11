import React, { useState } from 'react';
import { Filter, RotateCw, ChevronDown, BarChart4 } from 'lucide-react';
import ProductCard from '../products/ProductCard';
import { ProductType } from '../../types/ProductTypes';

const ProductsSection: React.FC = () => {
  const [activeFilters, setActiveFilters] = useState({
    industry: 'all',
    material: 'all',
    poreSize: [0.1, 1.2],
    temperature: 'all'
  });
  
  const [compareList, setCompareList] = useState<string[]>([]);
  
  // Sample product data
  const products: ProductType[] = [
    {
      id: '1',
      name: 'CeraFlow™ Ultra',
      image: 'https://example.com/images/products/ceramflow-ultra.jpg',
      material: 'Ceramic',
      poreSize: 0.2,
      temperature: 120,
      industry: ['Water Treatment', 'Oil & Gas'],
      fluxRate: 150,
      phRange: [2, 14],
      burstPressure: 20
    },
    {
      id: '2',
      name: 'PolyPure™ PVDF',
      image: 'https://example.com/images/products/polypure-pvdf.jpg',
      material: 'PVDF',
      poreSize: 0.45,
      temperature: 80,
      industry: ['Pharmaceutical', 'Food & Beverage'],
      fluxRate: 200,
      phRange: [3, 10],
      burstPressure: 12
    },
    {
      id: '3',
      name: 'HiTemp™ Ceramic',
      image: 'https://example.com/images/products/hitemp-ceramic.jpg',
      material: 'Ceramic',
      poreSize: 0.1,
      temperature: 220,
      industry: ['Chemical', 'Oil & Gas'],
      fluxRate: 100,
      phRange: [1, 14],
      burstPressure: 25
    },
    {
      id: '4',
      name: 'DuraFlow™ PES',
      image: 'https://example.com/images/products/duraflow-pes.jpg',
      material: 'PES',
      poreSize: 0.65,
      temperature: 75,
      industry: ['Pharmaceutical', 'Water Treatment'],
      fluxRate: 180,
      phRange: [4, 9],
      burstPressure: 10
    }
  ];
  
  const toggleCompare = (id: string) => {
    if (compareList.includes(id)) {
      setCompareList(compareList.filter(itemId => itemId !== id));
    } else if (compareList.length < 4) {
      setCompareList([...compareList, id]);
    }
  };
  
  // Filter products based on active filters
  const filteredProducts = products.filter(product => {
    if (activeFilters.industry !== 'all' && !product.industry.includes(activeFilters.industry)) return false;
    if (activeFilters.material !== 'all' && product.material !== activeFilters.material) return false;
    if (product.poreSize < activeFilters.poreSize[0] || product.poreSize > activeFilters.poreSize[1]) return false;
    if (activeFilters.temperature === '≤80°C' && product.temperature > 80) return false;
    if (activeFilters.temperature === '>80°C' && product.temperature <= 80) return false;
    return true;
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Membrane Solutions</h2>
            <p className="text-lg text-gray-600 mt-2">Engineered for extreme performance in demanding environments</p>
          </div>
          <button className="text-blue-600 flex items-center gap-2">
            <RotateCw className="w-4 h-4" />
            Reset Filters
          </button>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters - Sticky on scroll */}
          <div className="lg:w-1/4 bg-white p-6 rounded-lg shadow-md h-fit lg:sticky lg:top-24">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold">Filters</h3>
            </div>
            
            {/* Industry Filter */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
              <div className="relative">
                <select 
                  className="block w-full p-3 bg-gray-50 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                  value={activeFilters.industry}
                  onChange={(e) => setActiveFilters({...activeFilters, industry: e.target.value})}
                >
                  <option value="all">All Industries</option>
                  <option value="Water Treatment">Water Treatment</option>
                  <option value="Pharmaceutical">Pharmaceutical</option>
                  <option value="Oil & Gas">Oil & Gas</option>
                  <option value="Chemical">Chemical</option>
                  <option value="Food & Beverage">Food & Beverage</option>
                </select>
                <ChevronDown className="absolute top-3.5 right-3 w-4 h-4 text-gray-500" />
              </div>
            </div>
            
            {/* Material Filter */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Material</label>
              <div className="relative">
                <select 
                  className="block w-full p-3 bg-gray-50 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                  value={activeFilters.material}
                  onChange={(e) => setActiveFilters({...activeFilters, material: e.target.value})}
                >
                  <option value="all">All Materials</option>
                  <option value="Ceramic">Ceramic</option>
                  <option value="PVDF">PVDF</option>
                  <option value="PES">PES</option>
                </select>
                <ChevronDown className="absolute top-3.5 right-3 w-4 h-4 text-gray-500" />
              </div>
            </div>
            
            {/* Pore Size Filter */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pore Size: {activeFilters.poreSize[0]}µm - {activeFilters.poreSize[1]}µm
              </label>
              <input 
                type="range" 
                min="0.1" 
                max="1.2" 
                step="0.05"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                value={activeFilters.poreSize[1]}
                onChange={(e) => setActiveFilters({
                  ...activeFilters, 
                  poreSize: [activeFilters.poreSize[0], parseFloat(e.target.value)]
                })}
              />
            </div>
            
            {/* Temperature Range */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Temperature Range</label>
              <div className="flex gap-2">
                <button 
                  className={`flex-1 py-2 px-4 rounded-md border transition-all ${activeFilters.temperature === '≤80°C' ? 'bg-blue-50 border-blue-500 text-blue-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                  onClick={() => setActiveFilters({...activeFilters, temperature: '≤80°C'})}
                >
                  {'≤80°C'}
                </button>
                <button 
                  className={`flex-1 py-2 px-4 rounded-md border transition-all ${activeFilters.temperature === '>80°C' ? 'bg-blue-50 border-blue-500 text-blue-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                  onClick={() => setActiveFilters({...activeFilters, temperature: '>80°C'})}
                >
                  {'>80°C'}
                </button>
              </div>
            </div>
            
            {/* Compare Products */}
            {compareList.length > 0 && (
              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-medium text-blue-800">Comparing {compareList.length} products</span>
                  <button className="text-sm text-blue-600 hover:text-blue-800">Clear</button>
                </div>
                <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-all flex items-center justify-center gap-2">
                  <BarChart4 className="w-4 h-4" />
                  Compare Selected
                </button>
              </div>
            )}
          </div>
          
          {/* Product Cards */}
          <div className="lg:w-3/4">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard 
                  key={product.id}
                  product={product}
                  isComparing={compareList.includes(product.id)}
                  onToggleCompare={toggleCompare}
                />
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <p className="text-gray-600 mb-4">No products match your filter criteria.</p>
                <button 
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2 mx-auto"
                  onClick={() => setActiveFilters({
                    industry: 'all',
                    material: 'all',
                    poreSize: [0.1, 1.2],
                    temperature: 'all'
                  })}
                >
                  <RotateCw className="w-4 h-4" />
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;