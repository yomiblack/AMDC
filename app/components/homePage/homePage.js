import Header from "./header";
import Org from "./org";
import Timer from "./timer";
import Speakers from "./speakers";
import Venue from "./venue";
import Footer from "./footer";

export default function HomePage() {
  const eventDate = new Date("2025-03-15T20:00:00");
  return (
    <div className="w-screen">
      <Header />
      <Org />
      <Timer targetDate={eventDate} />
      <Speakers />
      <Venue />
      <Footer />
    </div>
  );
}
