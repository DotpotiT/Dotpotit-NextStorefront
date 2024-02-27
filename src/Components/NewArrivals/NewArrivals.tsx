'use client'
import React, { useState, useEffect } from 'react';
import NewArrivalsCard from '../NewArrivalsCard/NewArrivalsCard';
import { fetchProducts } from '../../Actions/products'; 

// Product.ts
interface Product {
  id: string; // Change the type of 'id' to string if necessary
  name: string;
  price: number;
  image: string;
  // Add other properties as needed
}


interface Tab {
  label: string;
}

function TabComponent({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <a
      role="tab"
      className={`tab ${isActive ? 'tab-active [--tab-bg:#009DE4] [--tab-border-color:#009DE4] text-white' : ''}`}
      onClick={onClick}
    >
      {label}
    </a>
  );
}

// NewArrivals component
const NewArrivals: React.FC = () => {
  const [products, setProducts] = useState<{ label: string; products: Product[] }[]>([]);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        setError('Error fetching products');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <section className=" mt-16 mb-8">
      <div className="container mx-auto">
        <div className=" text-center">
          <h2 className=' text-4xl mb-6 font-bold'>ℕ𝕖𝕨 𝔸𝕣𝕣𝕚𝕧𝕒𝕝𝕤</h2>
        </div>

        <div>
          <div role="tablist" className="tabs tabs-lifted flex flex-wrap  lg:flex-row justify-center  mb-16">
            {products.map((tab, index) => (
              <TabComponent
                key={index}
                label={tab.label}
                isActive={index === activeTab}
                onClick={() => handleTabClick(index)}
              />
            ))}
          </div>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-3 w-full lg:max-w-7xl mx-auto justify-center items-center">
              {products[activeTab]?.products?.map((product) => (
                <NewArrivalsCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
