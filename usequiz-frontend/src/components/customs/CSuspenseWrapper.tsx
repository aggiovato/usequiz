import { Suspense, ReactNode } from "react";

const SuspenseWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
      {children}
    </Suspense>
  );
};

export default SuspenseWrapper;
