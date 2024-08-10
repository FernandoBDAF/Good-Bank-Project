import HorizontalBalanceCard from "@/app/(logged)/components/BalanceCard";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="flex flex-col w-full min-h-[83vh]">
      <HorizontalBalanceCard />
      {children}
    </div>
  );
}
