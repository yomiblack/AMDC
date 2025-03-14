import Header from "./header";
import Org from "./org";
import Timer from "./timer";
import Speakers from "./speakers";
import Venue from "./venue";
import Footer from "./footer";
import Download from "./download";
import Attendees from "./attendees";
import Gallery from "./gallery";
import getSpeakerData from "./getSpeakerData";
import Attending from "./attending";

export default async function HomePage() {
  const eventDate = new Date("2025-03-19T10:00:00");
  const speakers = await getSpeakerData();
  return (
    <div className="w-screen">
      <Header />
      <Org />
      <Timer targetDate={eventDate} />
      <Download />
      <Attendees />
      <Speakers speakers={speakers} />
      <Attending />
      <Gallery />
      <Venue />
      <Footer />
    </div>
  );
}
