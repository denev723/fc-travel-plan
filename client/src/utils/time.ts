export const transformTimeToMinutes = (time: string) => {
  return parseInt(time.slice(0, 2), 10) * 60 + parseInt(time.slice(3), 10) * 1;
};

export const parseTime = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return {
    hours,
    mins,
  };
};

export const printTime = ({ hours, mins }: { hours: number; mins: number }) => {
  return `총 ${hours}시간 ${mins}분`;
};

export const getTotalTime = (
  times: { startTime: string; endTime: string }[]
) => {
  return times.reduce((acc, dailyTime) => {
    const dailyTotalTime =
      transformTimeToMinutes(dailyTime.endTime) -
      transformTimeToMinutes(dailyTime.startTime);
    return acc + dailyTotalTime;
  }, 0);
};
