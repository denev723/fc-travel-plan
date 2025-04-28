import { Place } from "@/types";
import DeleteIcon from "@/assets/icons/delete.svg?react";
import { categories } from "@/constants";
import { useState } from "react";
import { parseTime } from "@/utils/time";
import Button from "../common/Button";

interface Props {
  plannedPlace: {
    place: Place;
    duration: number;
  }[];
  onDeletePlace: (index: number) => void;
  onEditDuration: (index: number, duration: number) => void;
}

export default function PlannedPlaceList({
  plannedPlace,
  onDeletePlace,
  onEditDuration,
}: Props) {
  return (
    <div>
      {plannedPlace.map((plannedPlace, index) => (
        <PlannedPlace
          key={index}
          plannedPlace={plannedPlace}
          index={index}
          onDeletePlace={() => onDeletePlace(index)}
          onEditDuration={(duration: number) => onEditDuration(index, duration)}
        />
      ))}
    </div>
  );
}

function PlannedPlace({
  plannedPlace,
  index,
  onDeletePlace,
  onEditDuration,
}: {
  plannedPlace: { place: Place; duration: number };
  index: number;
  onDeletePlace: () => void;
  onEditDuration: (duration: number) => void;
}) {
  const [editing, setEditing] = useState(false);
  const { hours, mins } = parseTime(plannedPlace.duration);
  const [newHours, setNewHours] = useState(hours);
  const [newMins, setNewMins] = useState(mins);

  return (
    <div className="flex items-center mb-20" key={`${plannedPlace.place.name}`}>
      <span className="inline-block w-30 h-30 rounded-full bg-main text-white text-16 font-semibold leading-[30px] tracking-[0.16px] align-middle text-center mr-10">
        {index + 1}
      </span>
      <div className="rounded-10 w-[390px] h-68 border-gray200 border flex px-12 py-10 items-center">
        {!editing ? (
          <>
            <img
              className="shrink-0 w-48 h-48 rounded-6 bg-bg mr-12"
              src={plannedPlace.place.thumbnail}
            />
            <div className="flex-1 mr-12 overflow-hidden">
              <h6 className="text-15 font-semibold tracking-[0.15px] mb-8">
                {plannedPlace.place.name}
              </h6>
              <p className="text-14 tracking-[0.14px] text-gray500 overflow-hidden text-ellipsis whitespace-nowrap">
                <span className="text-main font-medium">
                  {categories[plannedPlace.place.category]}
                </span>
                {plannedPlace.place.address}
              </p>
            </div>
            <Button
              variant="action"
              onClick={() => setEditing(true)}
              className="mr-5 shrink-0"
            >
              {hours}시간 {mins}분
            </Button>
            <button onClick={() => onDeletePlace()}>
              <DeleteIcon />
            </button>
          </>
        ) : (
          <>
            <span className="text-15 font-semibold tracking-[0.15px]">
              머무는 시간
            </span>
            <div className="flex-1 text-center">
              <input
                type="number"
                value={newHours}
                className="text-20 font-semibold tracking-[0.2px] text-right"
                max={12}
                min={0}
                onChange={(e) => setNewHours(Number(e.currentTarget.value))}
              />
              <span className="text-15 font-medium tracking-[0.15px]">
                시간
              </span>
              <input
                type="number"
                value={newMins}
                className="text-20 font-semibold tracking-[0.2px] text-right"
                max={60}
                min={0}
                onChange={(e) => setNewMins(Number(e.currentTarget.value))}
              />
              <span className="text-15 font-medium tracking-[0.15px]">분</span>
            </div>
            <Button
              variant="action"
              onClick={() => {
                setEditing(false);
                onEditDuration(newHours * 60 + newMins);
              }}
            >
              완료
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
