export default async function getGalleryData() {
  const galleryImages = [
    {
      day: "Day 1",
      labelColor: "#CEA631",
      images: [
        "/gallery/day1/1.jpeg",
        "/gallery/day1/2.jpeg",
        "/gallery/day1/3.jpeg",
        "/gallery/day1/4.jpeg",
        "/gallery/day1/5.jpeg",
        "/gallery/day1/6.jpeg",
        "/gallery/day1/7.jpeg",
        "/gallery/day1/8.jpeg",
        "/gallery/day1/9.jpeg",
        "/gallery/day1/10.jpeg",
      ],
    },
    {
      day: "Day 2",
      labelColor: "#CEA631",
      images: [
        "/gallery/day2/1.jpg",
        "/gallery/day2/2.jpg",
        "/gallery/day2/3.jpg",
        "/gallery/day2/4.jpg",
        "/gallery/day2/5.jpg",
        "/gallery/day2/6.jpg",
        "/gallery/day2/7.jpg",
        "/gallery/day2/8.jpg",
        "/gallery/day2/9.jpg",
        "/gallery/day2/10.jpg",
      ],
    },
    {
      day: "Day 3",
      labelColor: "#CEA631",
      images: ["/gallery/day3/1.jpeg"],
    },
  ];

  return galleryImages;
}
