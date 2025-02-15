import { Container } from "@/components/organisms/container";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>
}
