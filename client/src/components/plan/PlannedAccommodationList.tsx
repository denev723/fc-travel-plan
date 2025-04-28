import { Place } from "@/types";
import DeleteIcon from "@/assets/icons/delete.svg?react";
import { categories } from "@/constants";
import { addDays, format } from "date-fns";

interface Props {
  plannedAccommodations: Array<Place | null>;
  onDeleteAccommodation: (index: number) => void;
  startDate: Date;
}

export default function PlannedAccommodationList({
  startDate,
  plannedAccommodations,
  onDeleteAccommodation,
}: Props) {
  return (
    <div>
      {plannedAccommodations.map((plannedAccommodation, index) => {
        const targetDate = addDays(startDate, index);
        return plannedAccommodation ? (
          <PlannedAccommodation
            key={`${plannedAccommodation.name}_${index}`}
            plannedAccommodation={plannedAccommodation}
            index={index}
            onDeleteAccommodation={() => onDeleteAccommodation(index)}
            targetDate={targetDate}
          />
        ) : (
          <EmptyAccommodation index={index} targetDate={targetDate} />
        );
      })}
    </div>
  );
}

function EmptyAccommodation({
  index,
  targetDate,
}: {
  index: number;
  targetDate: Date;
}) {
  return (
    <div className="flex items-center mb-20">
      <span className="inline-block w-30 h-30 rounded-full bg-main text-white text-16 font-semibold leading-[30px] tracking-[0.16px] align-middle text-center mr-10">
        {index + 1}
      </span>
      <div className="rounded-10 w-[390px] h-68 border-gray200 border flex px-12 py-10 items-center">
        <div className="shrink-0 w-48 h-48 rounded-6 bg-bg mr-12" />
        <div className="flex-1 mr-12 overflow-hidden">
          <h6 className="text-15 font-semibold tracking-[0.15px] mb-8">
            숙소를 추가해 주세요.
          </h6>
          <p className="text-14 tracking-[0.14px] text-gray500 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="text-main font-medium">
              {categories["accommodation"]}
            </span>
            {format(targetDate, "MM.dd(EEE)")} -{" "}
            {format(addDays(targetDate, 1), "MM.dd(EEE)")}
          </p>
        </div>
      </div>
    </div>
  );
}

function PlannedAccommodation({
  plannedAccommodation,
  index,
  onDeleteAccommodation,
  targetDate,
}: {
  plannedAccommodation: Place;
  index: number;
  targetDate: Date;
  onDeleteAccommodation: () => void;
}) {
  return (
    <div className="flex items-center mb-20">
      <span className="inline-block w-30 h-30 rounded-full bg-main text-white text-16 font-semibold leading-[30px] tracking-[0.16px] align-middle text-center mr-10">
        {index + 1}
      </span>
      <div className="rounded-10 w-[390px] h-68 border-gray200 border flex px-12 py-10 items-center">
        <img
          className="shrink-0 w-48 h-48 rounded-6 bg-bg mr-12"
          src={plannedAccommodation.thumbnail}
        />
        <div className="flex-1 mr-12 overflow-hidden">
          <h6 className="text-15 font-semibold tracking-[0.15px] mb-8">
            {plannedAccommodation.name}
          </h6>
          <p className="text-14 tracking-[0.14px] text-gray500 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="text-main font-medium">
              {categories[plannedAccommodation.category]}
            </span>
            {format(targetDate, "MM.dd(EEE)")} -{" "}
            {format(addDays(targetDate, 1), "MM.dd(EEE)")}
          </p>
        </div>
        <button onClick={() => onDeleteAccommodation()}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}
