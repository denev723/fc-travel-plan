import WideLayout from "@/components/common/WideLayout";
import PlanControler from "@/components/plan/PlanControler";
import TravelPeriodModal from "@/components/plan/TravelPeriodModal";
import { usePlanStore } from "@/store";

export default function PlanCity() {
  const { status } = usePlanStore();
  return (
    <>
      {status === "period_edit" && <TravelPeriodModal />}
      <WideLayout>
        <div className="flex h-full">
          <PlanControler />
          <div className="flex-1">지도 영역</div>
        </div>
      </WideLayout>
    </>
  );
}
