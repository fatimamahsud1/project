import Link from 'next/link';
import Typography from '../../../atoms/typography/typography';

const Navbar = () => {
  return (
    <div className='col-span-12 '>
    <div className=" text-white h-[50px] rounded-[34px] flex items-center justify-around col-span-8">
      <Link href="#about" className='pl-12 cursor-pointer'>
        <Typography tag="h4">About Us</Typography>
      </Link>
      <Link href="#admissions" className='cursor-pointer'>
        <Typography tag="h4">Admissions</Typography>
      </Link>
      <Link href="#services" className='cursor-pointer'>
        <Typography tag="h4">Services</Typography>
      </Link>
      <Link href="#register" className='pr-12 cursor-pointer'>
        <Typography tag="h4">Register</Typography>
      </Link>
    </div>
  </div>
  
  );
};

export default Navbar;