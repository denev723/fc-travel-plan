import { usePlanStore } from "@/store";
import ControllerHeader from "../shared/ControllerHeader";
import Tabs from "../common/Tabs";
import DayItineraryView from "./DayItineraryView";
import ItineraryMapContainer from "./ItineraryMapContainer";
import { ItineraryItem } from "@/types";

interface Props {
  itinerary: ItineraryItem[][];
}

export default function ItineraryController({ itinerary }: Props) {
  const { startDate, endDate, plannedAccommodations } = usePlanStore();
  return (
    <div className="h-full flex">
      <div className="h-full flex-1">
        <Tabs
          className="h-full"
          tabs={itinerary.map((day, index) => ({
            title: `${index + 1}일차`,
            content: () => (
              <div className="flex h-full flex-1">
                <div className="px-24 py-30 flex flex-col gap-y-18 overflow-y-hidden h-full shrink-0">
                  <ControllerHeader startDate={startDate} endDate={endDate} />
                  <DayItineraryView plannedPlaces={day} />
                </div>
                <ItineraryMapContainer
                  plannedPlaces={day}
                  accommodation={plannedAccommodations[index]!}
                />
              </div>
            ),
          }))}
        />
      </div>
    </div>
  );
}
