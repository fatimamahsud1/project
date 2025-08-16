import PropTypes from 'prop-types';
import Typography from '@/components/atoms/typography/typography';

const MetricsCard = ({ metrics }) => {
  return (
    <div className="card-colors pt-11 pb-11 md:pt-8 md:pb-8 xl:pt-11 xl:pb-11 w-full grid grid-cols-1 md:grid-cols-3 gap-8 text-center rounded-[15px] md:rounded-[20px] xl:rounded-[25px] 3xl:rounded-[30px]">
      <Typography tag="h2" className="col-span-full mb-6 md:mb-4">OUR METRICS</Typography>
      {metrics.map((metric, index) => (
        <div key={index} className="flex flex-col items-center">
          <Typography tag="h2" className="mb-2">{metric.value}</Typography>
          <Typography tag="h5" className="mb-5">{metric.label}</Typography>
        </div>
      ))}
    </div>
  );
};

MetricsCard.propTypes = {
  metrics: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MetricsCard;
