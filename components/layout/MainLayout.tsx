import { Navbar } from "./Navbar";
export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar    />
      <main>{children}</main>
    </>
  );
}
