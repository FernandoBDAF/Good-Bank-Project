import HorizontalBalanceCard from "@/app/(logged)/(bank-area)/components/BalanceCard";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (

    <div className="flex flex-col w-full">
      <HorizontalBalanceCard />
      {children}
    </div>
  );
}
