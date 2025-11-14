"use client";

import { useEffect, useState } from "react";

export const DynamicDate = () => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p className="text-black/60 text-xs font-normal">
        {now.toLocaleDateString()} {now.toLocaleTimeString()}
      </p>
    </div>
  );
};
