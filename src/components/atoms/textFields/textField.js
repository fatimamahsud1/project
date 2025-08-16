const TextField = ({
  placeholder = 'Enter text',
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="textField  h-[41px] md:h-[31px] xl:h-[51px] 2xl:h-[60px] 3xl:h-[70px] rounded-[10px] md:rounded-[8px] xl:rounded-[15px] 3xl:rounded-[20px] mb-[10px] xl:mb-[17px] 2xl:mb-[20px] 3xl:mb-[25px] w-[100%] p-[10px] pl-[15px]"
    />
  );
};

export default TextField;
