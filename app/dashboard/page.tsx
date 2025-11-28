import { getSession } from "@/lib/get-session";
import { redirect } from "next/navigation";
import { SectionCards } from "@/components/dashboard/section-cards";

export default async function DashboardPage() {
  const session = await getSession();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="@container/main flex flex-1 flex-col gap-2">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <SectionCards />
      </div>
    </div>
  );
}

