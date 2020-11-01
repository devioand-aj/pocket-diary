import { useEffect, useState } from "react";

// @ desc      function (date: '2020-08-31T04:15:14.268Z', delay: seconds, isSetTimeOut?: boolean)
// @ params    date: any date e.g., '2020-08-31T04:15:14.268Z' , delay: time to till show latest , isSetTimeOut: to remove latest after given delay,
// @ return    isLatest: boolean;
export default (date, delay, isSetTimeOut = false) => {
  const [isLatest, setIsLatest] = useState(false);

  console.log("useIsLatestItem Custom Hook!");

  // const archiveTime = new Date(date).getTime();
  // const newTime = Date.now();

  // const timeElapsed = newTime - archiveTime;
  useEffect(() => {
    // if (timeElapsed <= delay) setIsLatest(true);
    // eslint-disable-next-line
  }, []);

  // if (isSetTimeOut)
  //   setTimeout(() => {
  //     setIsLatest(false);
  //   }, delay);

  return isLatest;
};
