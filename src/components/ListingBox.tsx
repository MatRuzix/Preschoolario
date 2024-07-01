type ListingBoxProps = { text: string };

const ListingBox: React.FC<ListingBoxProps> = ({ text }) => {
  return <li className="bg-schoolarioOrange rounded-lg px-2 py-2">{text}</li>;
};

export default ListingBox;
