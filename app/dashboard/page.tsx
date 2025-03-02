import { CalendarIcon, CalendarMobileIcon } from "@/components/icons/calendar";
import { HeartIcon, HeartMobileIcon } from "@/components/icons/heart";
import { LocationIcon, LocationMobileIcon } from "@/components/icons/location";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";

type CardProps = {
  title: string;
  company: string;
  location: string;
  date: string;
  tags: string[];
  fields: string[];
  img: string;
};

const data: CardProps[] = [
  {
    title: "Gaming UI designer",
    company: "Rockstar Games",
    location: "ElMansoura, Egypt",
    date: "10 days ago",
    tags: ["0 - 3y of exp", "Full time", "Remote"],
    fields: ["Creative / Design", "IT / Software development", "Gaming"],
    img: "/company1.png",
  },
  {
    title: "Senior UX UI Designer",
    company: "Egabi",
    location: "Cairo, Egypt",
    date: "month ago",
    tags: ["0 - 3y of exp", "Full time", "Hybrid"],
    fields: ["Creative / Design", "IT / Software development"],
    img: "/company2.png",
  },
  {
    title: "React Frontend developer",
    company: "Magara",
    location: "ElMansoura, Egypt",
    date: "10 days ago",
    tags: ["5 - 7y of exp", "Freelance", "Remote"],
    fields: ["Creative / Design", "IT / Software development", "Gaming"],
    img: "/company3.png",
  },
];

export default function Page() {
  return (
    <div className="flex flex-col gap-5 p-10">
      <div className="flex gap-3">
        <div className="h-[57px] md:h-[111px] px-3 md:px-10 flex flex-1 items-center justify-between bg-[#3D8E41] text-white rounded-sm">
          <div className="flex flex-col gap-0.5 md:gap-1">
            <div className="text-[14px] md:text-2xl font-semibold">
              UI Designer in Egypt
            </div>
            <div className="text-[11px] font-light md:text-lg">
              70 job positions
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="text-[11px] font-light md:text-lg">Set alert</div>
            <Switch />
          </div>
        </div>
        <div className="rounded-sm hover:cursor-pointer block md:hidden w-[57px] h-[57px] border-2 border-[#F0F0F0] ">
          <SidebarTrigger />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {[...data, ...data].map((item) => (
          <Card
            key={item.company}
            title={item.title}
            company={item.company}
            location={item.location}
            date={item.date}
            tags={item.tags}
            fields={item.fields}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
}

function Card(props: CardProps) {
  return (
    <div className="group border border-[#F0F0F0] hover:border-[#48A74C] rounded-sm h-[135px] md:h-[310px] bg-white hover:bg-[#F3FDF3]">
      {/* Top Section */}
      <div className="flex flex-col gap-1 md:gap-3.5 px-4 pt-2 md:px-10 md:pt-10">
        <div className="flex justify-between">
          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden md:block">
              <Image src={props.img} alt="Avatar" width={70} height={70} />
            </div>
            <div className="block md:hidden">
              <Image src={props.img} alt="Avatar" width={33} height={33} />
            </div>
            <div className="flex flex-col gap-0.5 md:gap-2">
              <div className="font-medium text-[14px] md:text-2xl text-[#161616]">
                {props.title}
              </div>
              <div className="font-bold text-[11px] md:text-lg text-[#14A077]">
                {props.company}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center md:h-[55px] md:w-[55px] h-[25px] w-[25px] border border-[#C4C3C3] rounded-full bg-white hover:cursor-pointer">
            <div className="hidden md:block">
              <HeartIcon />
            </div>
            <div className="block md:hidden">
              <HeartMobileIcon />
            </div>
          </div>
        </div>
        <div className="flex gap-4 font-normal text-[11px] md:text-lg text-[#707070]">
          <div className="flex gap-2 items-center">
            <div className="hidden md:block">
              <LocationIcon />
            </div>
            <div className="block md:hidden">
              <LocationMobileIcon />
            </div>
            <div>{props.location}</div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="hidden md:block">
              <CalendarIcon />
            </div>
            <div className="block md:hidden">
              <CalendarMobileIcon />
            </div>
            <div>{props.date}</div>
          </div>
        </div>
        <div className="flex gap-2">
          {props.tags.map((tag) => (
            <div
              key={tag}
              className="font-medium text-[9px] md:text-[16px] text-[#707070] bg-[#F7F7F7] group-hover:bg-white px-2 py-1 rounded-sm"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className="border-b border-[#F0F0F0] my-2 md:my-6" />
      {/* Footer */}
      <div className="gap-2 px-4 pb-2 md:px-10 md:pb-10 flex">
        <div className="font-normal text-[10px] md:text-lg text-[#707070]">
          {props.fields.join("\u00A0\u00A0-\u00A0\u00A0")}
        </div>
      </div>
    </div>
  );
}
