"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";

export default function Page() {
  const length = 100;
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    divRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div>
      <div className="h-96">
        <PerfectScrollbar className="h-auto">
          {Array.from({ length }, (_, i) => (
            <div key={i}>This is item {i + 1}</div>
          ))}
          <div className="mt-4" ref={divRef}>
            hi
          </div>
        </PerfectScrollbar>
      </div>
      <Button>Hi</Button>
    </div>
  );
}
