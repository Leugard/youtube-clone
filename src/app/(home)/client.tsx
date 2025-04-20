"use client";

import { trpc } from "@/trpc/client";

export const PageClient = () => {
  const [data] = trpc.hello.useSuspenseQuery({ text: "Leugard" });

  return <div>page client says: {data.greeting}</div>;
};
