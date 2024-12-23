import Announcement from "@/components/Announcement/Announcement";
import BigCalendar from "@/components/BigCalendar/BigCalendar";
import EventCalendar from "@/components/EventCalendar/EventCalendar";


const Parents = () => {
  return (
    <div className=" h-screen p-4 flex gap-4 flex-col xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule (MubarakAd)</h1>
          <BigCalendar/>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <Announcement />
      </div>
    </div>
  );
};

export default Parents;