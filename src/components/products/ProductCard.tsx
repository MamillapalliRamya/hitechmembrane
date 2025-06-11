import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, BarChart4, Eye, RotateCw } from 'lucide-react';
import { ProductType } from '../../types/ProductTypes';

interface ProductCardProps {
  product: ProductType;
  isComparing: boolean;
  onToggleCompare: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isComparing, onToggleCompare }) => {
  const [isRotating, setIsRotating] = useState(false);
  
  const toggleRotation = () => {
    setIsRotating(!isRotating);
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg group"
    >
      {/* Product Image with Rotation */}
      <div className="relative h-48 bg-gray-100 overflow-hidden">
        <motion.img 
          src={product.image} 
          alt={product.name}
          animate={{ rotateY: isRotating ? 360 : 0 }}
          transition={{ duration: 2, repeat: isRotating ? Infinity : 0, ease: "linear" }}
          className="w-full h-full object-cover"
        />
        
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleRotation}
          className="absolute bottom-3 right-3 p-2 bg-white rounded-full shadow-md opacity-70 hover:opacity-100 transition-opacity"
        >
          <RotateCw className="w-4 h-4 text-blue-600" />
        </motion.button>
        
        {/* Quick Actions Overlay */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end justify-between p-4"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-3 py-1.5 bg-white text-blue-700 rounded-md text-sm font-medium flex items-center gap-1"
          >
            <Eye className="w-3.5 h-3.5" />
            Quick View
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onToggleCompare(product.id)}
            className={`p-2 rounded-full ${isComparing ? 'bg-blue-600 text-white' : 'bg-white/90 text-gray-700'}`}
          >
            {isComparing ? <Check className="w-4 h-4" /> : <BarChart4 className="w-4 h-4" />}
          </motion.button>
        </motion.div>
      </div>
      
      {/* Product Details */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
          <span className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded">
            {product.material}
          </span>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600">Pore Size</span>
            <span className="font-medium">{product.poreSize}µm</span>
          </div>
          
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600">Max Temp</span>
            <span className="font-medium">{product.temperature}°C</span>
          </div>
          
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600">Flux Rate</span>
            <span className="font-medium">{product.fluxRate} LMH</span>
          </div>
          
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">pH Range</span>
            <span className="font-medium">{product.phRange[0]} - {product.phRange[1]}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {product.industry.map((ind, i) => (
            <motion.span 
              key={i}
              whileHover={{ scale: 1.05 }}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
            >
              {ind}
            </motion.span>
          ))}
        </div>
        
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors text-sm font-medium"
        >
          View Specifications
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;