import { useState, useEffect } from "react";
import getParsedDate from "../utils/getParsedDate";

export default (date, isSetToday = false) => {
  const [loading, setLoading] = useState(false);
  const [parsedDate, setParsedDate] = useState("");

  useEffect(() => {
    setLoading(true);
    const parsedDate1 = getParsedDate(date, isSetToday);
    setParsedDate(parsedDate1);
    setLoading(false);

    // eslint-disable-next-line
  }, []);

  return { loading, parsedDate };
};
