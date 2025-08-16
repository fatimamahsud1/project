const MessageTextField = ({
  placeholder = 'Enter text',
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="m-textField h-[113px] sm:h-[95px] md:[167px] xl:h-[141px] 2xl:h-[168px] 3xl:h-[210px] rounded-[10px] md:rounded-[8px] xl:rounded-[15px] 3xl:rounded-[20px] mb-[25px] sm:mb-[0px] md:mb-[15px] xl:mb-[20px] 3xl:mb-[30px] w-[100%] p-[10px] pl-[15px] md:pl-[15px] xl:pl-[15px] pb-[80px] sm-pb-[60px] md:pb-[75px] xl:pb-[105px] 2xl:pb-[140px] 3xl:pb-[170px]"
    />
  );
};

export default MessageTextField;