const Typography = ({ tag: Tag = 'p', className = '', children, ...props }) => {
  const classNames = `${className}`;
  return <Tag className={classNames} {...props}>{children}</Tag>;
};

export default Typography;
