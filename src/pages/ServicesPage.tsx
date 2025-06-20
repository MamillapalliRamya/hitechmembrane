import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Ruler, Wrench, BookOpen, Headphones, FlaskConical, ShoppingBag, 
  AlertCircle, ArrowRight, Phone, Mail, Users, Shield, Award 
} from 'lucide-react';
import TitleSection from '../components/Titlesection';
import image1 from '../assets/images/wetransfer_hitech/Reverse-Osmosis-Membrane.png';

const ServicesPage: React.FC = () => {
   console.log('Image import:', image1);
 return (
    <div>
      {/* Services Section */}
      <TitleSection
        title="Services"
        backgroundImage={image1}
        overlay={true}
        overlayOpacity={0.4}
        textColor="text-white"
      />
      
     
    </div>
  );
};
export default ServicesPage;