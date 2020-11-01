import { useState, useEffect } from "react";

export default function useVerifyUser(userId, paramId) {
  const [verified, setVerified] = useState(false);

  if (userId && typeof userId !== "string") userId = userId.toString();

  useEffect(() => {
    if (userId === paramId) setVerified(true);
    // eslint-disable-next-line
  }, [userId]);

  return verified;
}
