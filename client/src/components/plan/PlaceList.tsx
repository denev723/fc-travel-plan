import { Place } from "@/types";
import { categories } from "@/constants";
import PlusIcon from "@/assets/icons/plus.svg?react";
import PlusRectIcon from "@/assets/icons/plus_rect.svg?react";
import FavoriteIcon from "@/assets/icons/favorite.svg?react";
import StarIcon from "@/assets/icons/grade.svg?react";

interface Props {
  places: Place[];
  onAddPlace: (place: Place) => void;
}

export default function PlaceList({ places, onAddPlace }: Props) {
  return (
    <div className="flex flex-col overflow-y-scroll h-full">
      {places.map((place) => (
        <PlaceItem key={place.name} place={place} onAddPlace={onAddPlace} />
      ))}
    </div>
  );
}

function PlaceItem({
  place,
  onAddPlace,
}: {
  place: Place;
  onAddPlace: (place: Place) => void;
}) {
  return (
    <div className="flex gap-x-11 mb-24">
      <img className="w-68 h-68 rounded-6 bg-bg" src={place.thumbnail} />
      <div className="flex-1 flex flex-col gap-y-8 items-start">
        <h6 className="text-17 font-semibold tracking-[0.17px]">
          {place.name}
        </h6>
        <p className="text-14 tracking-[0.14px] text-gray500">
          <span className="text-main font-medium inline-block mr-6">
            {categories[place.category]}
          </span>
          {place.address}
        </p>
        <div className="flex text-14 tracking-[0.14px] text-gray600">
          <span>
            <FavoriteIcon className="inline-block mr-4" />
            {place.likes}
          </span>
          <span>
            <StarIcon className="inline-block mr-4" />
            {place.rating}
          </span>
        </div>
      </div>
      <button className="relative" onClick={() => onAddPlace(place)}>
        <PlusRectIcon />
        <PlusIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </button>
    </div>
  );
}
