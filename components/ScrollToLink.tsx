interface ScrollToLinkProps {
  targetId: string;
  label: string;
  handleClick?:()=>void;
}
const ScrollToLink: React.FC<ScrollToLinkProps> = ({ targetId, label,handleClick }) => {
  return (
    <a href={`#${targetId}`} onClick={handleClick} >{label}</a>
  );
};

export default ScrollToLink;
