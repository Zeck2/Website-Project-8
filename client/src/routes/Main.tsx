import Sidebar from  "../components/Sidebar";
import Section from "../components/Section";

export default function Main() {
  return (
    <div className="flex relative box-border w-screen h-screen flex-row bg-[#F5F5F5]">
      <Sidebar/>
      <Section/>
    </div>
  );
}
