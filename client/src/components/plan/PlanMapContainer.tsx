import { usePlanStore } from "@/store";
import Map, { MapMarker, MapPath } from "./Map";

interface Props {
  coordinates: {
    lat: number;
    lng: number;
  };
}

export default function PlanMapContainer({ coordinates }: Props) {
  const { plannedPlaces } = usePlanStore();
  const markers = plannedPlaces.map(
    (plannedPlace) => plannedPlace.place.coordinates
  );
  return (
    <Map center={coordinates}>
      {markers.map((marker, idx) => (
        <MapMarker
          key={idx}
          coordinates={marker}
          options={{ color: "#0095a9" }}
          label={`${idx + 1}`}
        />
      ))}
      <MapPath path={markers} options={{ color: "#0095a9" }} />
    </Map>
  );
}
