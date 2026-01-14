"use client";

import dynamic from "next/dynamic";

const PageLoader = dynamic(() => import("@/components/PageLoader"), { 
  ssr: false, 
  loading: () => null 
});

export default function DynamicPageLoader() {
  return <PageLoader />;
}
