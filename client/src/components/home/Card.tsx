interface Props {
  title: string;
  description: string;
  image: string;
}

export default function Card({ title, description, image }: Props) {
  return (
    <div className="w-[316px]">
      <img className="w-full h-[190px] rounded-10 mb-20" src={image} alt={title} />
      <div className="px-11 text-left">
        <h3 className="text-22 text-gray900 font-medium mb-10">{title}</h3>
        <p className="text-16 text-gray600">{description}</p>
      </div>
    </div>
  );
}
