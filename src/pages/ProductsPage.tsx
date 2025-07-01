import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import image1 from '.././assets/images/wetransfer_hitech/products.png';
import TitleSection from '../components/Titlesection';
import GroupCompanies from '../components/home/GroupCompanies';



const ProductsPage: React.FC = () => {
  const products = [
    {
      id: 1,
      title: "HI-TECH RO",
      description:
        "High-performance RO Membrane elements that feature durable membrane chemistries for reliable and efficient operation",
      image: "/assets/images/hitech_ro.png",
    },
    {
      id: 2,
      title: "HI-TECH GBD",
      description:
        "High-performance RO Membrane elements that feature durable membrane chemistries for reliable and efficient operation",
      image: "/assets/images/hitech_gbd.png",
    },
    {
      id: 3,
      title: "HI-TECH ES",
      description:
        "High-performance RO Membrane elements that feature durable membrane chemistries for reliable and efficient operation",
      image: "/assets/images/hitech_es.png",
    },
    {
      id: 4,
      title: "HI-TECH BW",
      description:
        "High-performance RO Membrane elements that feature durable membrane chemistries for reliable and efficient operation",
      image: "/assets/images/hitech_bw.png",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <TitleSection
        title="Products"
        backgroundImage={image1}
        overlay={false}
        overlayOpacity={0.4}
        textColor="text-white"
        noBgColor={true}
      />

      {/* Product Range */}
      <section className="bg-white py-16 px-4 ml-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ml-[300px] mr-[100px]">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              {/* Image Wrapper with Rotation */}
              <div
                className="bg-[#F4F4F4] w-[239px] h-[458px] p-8 mb-6 ml-[88px] flex items-center justify-center"
                style={{
                  borderRadius: '50% / 50%',
                  transform: 'rotate(47deg)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-contain"
                  style={{
                    transform: 'rotate(-47deg)',
                    position: 'absolute',
                    marginLeft: "65px",
                    maxWidth: "296px"
                  }}
                />
              </div>

              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-3"
              >
                <h3 className="text-[36px] font-medium text-[#242424]">{product.title}</h3>
                <p className="w-[328px] h-[75px] text-[16px] text-[#464646]">{product.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>
      <GroupCompanies />
    </div>
  );
};

export default ProductsPage;
