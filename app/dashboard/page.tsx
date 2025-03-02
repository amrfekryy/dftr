import { MenuIcon } from "@/components/icons/menu";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Switch } from "@/components/ui/switch";

export default function Page() {
  return (
    <div className="p-10">
      <div className="flex gap-3">
        <div className="h-[57px] md:h-[111px] px-6 flex flex-1 items-center justify-between bg-[#3D8E41] text-white rounded-sm">
          <div className="flex flex-col gap-0.5 md:gap-1">
            <div className="text-[14px] md:text-2xl font-semibold">
              UI Designer in Egypt
            </div>
            <div className="text-sm font-light md:text-lg">
              70 job positions
            </div>
          </div>
          <div className="flex gap-3">
            <div className="text-sm font-light md:text-lg">Set alert</div>
            <Switch />
          </div>
        </div>
        <div className="rounded-sm hover:cursor-pointer block md:hidden w-[57px] h-[57px] border-2 border-[#F0F0F0] ">
          <SidebarTrigger />
        </div>
      </div>
    </div>
  );
}
