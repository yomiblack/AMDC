"use client";
export default function Venue() {
  // Function to handle clicking the address
  const handleAddressClick = () => {
    window.open(
      "https://www.google.com/maps/place/2P2V%2B3PM,+Addis+Ababa,+Ethiopia/@9.0002125,38.7442969,17z/data=!3m1!4b1!4m5!3m4!1s0x164b85cef5ab402d:0x80e0415a00e3d295!8m2!3d9.0002125!4d38.7442969?entry=ttu",
      "_blank"
    );
  };

  return (
    <section className="font-universe-condensed flex flex-col md:flex-row w-full">
      {/* First Div: Venue Details */}
      <div className="w-full md:w-1/3 bg-[#083A51] pl-8 md:pl-24 pt-12 pb-8 md:pb-52 text-white">
        <h2 className="text-2xl text-[#CFA532]">Venue</h2>
        <p
          className="mt-4 text-lg cursor-pointer hover:underline"
          onClick={handleAddressClick}
        >
          African Union Commission (AUC) Headquarters, Addis-Ababa,
          <br /> Ethiopia.
        </p>
      </div>

      {/* Second Div: Embedded Google Map */}
      <div className="w-full md:w-2/3 h-[400px] md:h-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.869682766722!2d38.7442969!3d9.0002125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x80e0415a00e3d295!2s2P2V%2B3PM%2C%20Addis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2set!4v1633024000000!5m2!1sen!2set"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
