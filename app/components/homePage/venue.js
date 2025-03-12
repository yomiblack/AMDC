"use client";
export default function Venue() {
  // Function to handle clicking the address
  const handleAddressClick = () => {
    window.open(
      "https://www.google.com/maps?q=African+Union+Commission+(AUC)+Headquarters,+Addis-Ababa,+Ethiopia",
      "_blank"
    );
  };

  return (
    <section className="flex flex-col md:flex-row w-full">
      {/* First Div: Venue Details */}
      <div className="w-full md:w-1/3 bg-[#083A51] pl-8 md:pl-24 pt-12 pb-8 md:pb-52 text-white">
        <h2 className="text-2xl text-[#CFA532]">Venue</h2>
        <p
          className="mt-4 text-lg cursor-pointer hover:underline"
          onClick={handleAddressClick}
        >
          African Union Commission (AUC)
          <br />
          Headquarters, Addis-Ababa,
          <br />
          Ethiopia.
        </p>
      </div>

      {/* Second Div: Embedded Google Map */}
      <div className="w-full md:w-2/3 h-[400px] md:h-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.869682766722!2d38.76321431536548!3d9.006975893547893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85f1a1d5f9f3%3A0x1f5b6b6b6b6b6b6b!2sAfrican%20Union%20Commission%20(AUC)%20Headquarters!5e0!3m2!1sen!2set!4v1633024000000!5m2!1sen!2set"
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
