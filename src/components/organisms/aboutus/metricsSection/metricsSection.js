import MetricsCard from '@/components/molecules/aboutus/cards/metricsCard/metricsCard';

const metricsData = [
  { value: '300+', label: 'Apartments Sold' },
  { value: '95%', label: 'Customer Satisfaction' },
  { value: '96%', label: 'Sustainability' },
];

const MetricsSection = () => {
  return (
    <div className='container'>
      <div className='grid grid-cols-12'>
        <div className='col-start-2 col-span-10 md:col-start-1 md:col-span-12 xl:col-start-2 xl:col-span-10'>
          <div className="container mx-auto">
            <MetricsCard metrics={metricsData}/>
          </div>
        </div>
        <div className='col-span-1 md:hidden xl:grid'></div>
      </div>
    </div>
  );
};

export default MetricsSection;