import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Sales AI",
  description: "Sign in to your account",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 