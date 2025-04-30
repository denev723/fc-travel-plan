import Loading from "@/components/common/Loading";
import WideLayout from "@/components/common/WideLayout";
import PlanControler from "@/components/plan/PlanController";
import PlanMapContainer from "@/components/plan/PlanMapContainer";
import TravelPeriodModal from "@/components/plan/TravelPeriodModal";
import { planQueries } from "@/services/queryFactory";
import { usePlanStore } from "@/store";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export default function PlanCity() {
  const { status } = usePlanStore();
  const { city = "" } = useParams();
  const { data, isLoading } = useQuery(planQueries.city(city!));
  return (
    <>
      {status === "period_edit" && <TravelPeriodModal />}
      <WideLayout>
        {isLoading || !data ? (
          <Loading />
        ) : (
          <div className="flex h-full">
            <PlanControler city={data} />
            <div className="flex-1 bg-gray300">
              <PlanMapContainer coordinates={data.coordinates} />
            </div>
          </div>
        )}
      </WideLayout>
    </>
  );
}
