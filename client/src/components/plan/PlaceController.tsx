import { usePlanStore } from "@/store";
import PlannedPlaceList from "./PlannedPlaceList";
import { getTotalTime, parseTime, printTime } from "@/utils/time";

export default function PlaceController() {
  const {
    plannedPlaces,
    removePlannedPlace,
    setDurationFoPlannedPlace,
    dailyTimes,
  } = usePlanStore();

  const totalTime = getTotalTime(dailyTimes);
  const plannedTime = plannedPlaces.reduce(
    (acc, { duration }) => acc + duration,
    0
  );

  return (
    <div className="flex flex-col text-left">
      <h5 className="flex items-end mb-13">
        <span className="text-30 font-medium tracking-[0.3px] mr-8">
          {plannedPlaces.length}
        </span>
        <span className="text-15 tracking-[0.15px] mb-4">
          {printTime(parseTime(plannedTime))} /{" "}
          {printTime(parseTime(totalTime))}
        </span>
      </h5>
      <div>
        {plannedPlaces.length === 0 ? (
          <EmptyList />
        ) : (
          <PlannedPlaceList
            plannedPlace={plannedPlaces}
            onDeletePlace={removePlannedPlace}
            onEditDuration={setDurationFoPlannedPlace}
          />
        )}
      </div>
    </div>
  );
}

function EmptyList() {
  return (
    <div className="w-[430px] h-89 bg-bg rounded-10 pt-70">
      <p className="mx-auto text-gray500 text-14 text-center">
        장소를 선택해 주세요
      </p>
    </div>
  );
}
