import { PlanState } from "@/store";
import Map, { MapMarker, MapPath } from "@/components/plan/Map";
import { Place } from "@/types";

interface Props {
  plannedPlaces: PlanState["plannedPlaces"];
  accommodation: Place;
}

export default function ItineraryMapContainer({
  plannedPlaces,
  accommodation,
}: Props) {
  const markers = plannedPlaces.map(
    (plannedPlace) => plannedPlace.place.coordinates
  );

  return (
    <Map center={plannedPlaces[0].place.coordinates}>
      {markers.map((marker, idx) => (
        <MapMarker
          key={idx}
          coordinates={marker}
          options={{ color: "#0095a9" }}
          label={`${idx + 1}`}
        />
      ))}
      {accommodation && (
        <MapMarker
          coordinates={accommodation.coordinates}
          options={{
            color: "#c730df",
          }}
          label="숙소"
        />
      )}
      <MapPath
        key={JSON.stringify(markers)}
        path={[
          ...markers,
          ...(accommodation ? [accommodation.coordinates] : []),
        ]}
        options={{ color: "#0095a9" }}
      />
    </Map>
  );
}
