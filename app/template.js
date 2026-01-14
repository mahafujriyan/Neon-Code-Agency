// app/template.js

import ClientMotion from "@/components/ClientMotion";

export default function Template({ children }) {
  return (
    <ClientMotion>
      {children}
    </ClientMotion>
  );
}