interface ScrollToLinkProps {
  targetId: string;
  label: string;
}
const ScrollToLink: React.FC<ScrollToLinkProps> = ({ targetId, label }) => {
  return (
    <a href={`#${targetId}`} >{label}</a>
  );
};

export default ScrollToLink;
