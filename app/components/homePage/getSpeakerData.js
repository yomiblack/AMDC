"use server";
export default async function getSpeakerData() {
  const speakers = [
    {
      id: 1,
      image: "/speakers/speaker1.jpg",
      name: "Prof. Nellie Mutemeri",
      bio: "Founder and Mining Practice Director, MutConsult.",
    },
    {
      id: 2,
      image: "/speakers/speaker2.jpg",
      name: "Mr. Jerry Ahadjie",
      bio: "Chief Minerals Officer, African Natural Resources Management and Investment Center of the African Development Bank(AFDB).",
    },
    {
      id: 3,
      image: "/speakers/speaker3.jpg",
      name: "Prof. Olugbenga Okunlola",
      bio: "President of the Geological Society of Africa.",
    },
    {
      id: 4,
      image: "/speakers/speaker4.jpg",
      name: "Mr. Kossi Toulassi",
      bio: "Financial Strategist and economic Analyst.",
    },
    {
      id: 5,
      image: "/speakers/speaker5.jpg",
      name: "Ms. Nere Emiko",
      bio: "Founder of Kian Smith and SANU.",
    },
    {
      id: 6,
      image: "/speakers/speaker6.jpg",
      name: "Ms. Ada Thela",
      bio: "Founder and Managing Director, Zoe Diamonds.",
    },
    {
      id: 7,
      image: "/speakers/speaker7.jpg",
      name: "Prof. Meck Maideyi Lydia",
      bio: "Associate Professor, specializing in Geostatics, hydrogeology and environmental geochemistry.",
    },
    {
      id: 8,
      image: "/speakers/speaker8.jpg",
      name: "Prof. Prosper Mackenzie NUDE",
      bio: "Full Professor of Geology.",
    },
    {
      id: 9,
      image: "/speakers/speaker9.jpg",
      name: "Prof. Theophile Ndougsa Mbarga",
      bio: "Professor of Exploration Geophysics.",
    },
    {
      id: 10,
      image: "/speakers/speaker10.jpg",
      name: "Mr. Fabien Mayani",
      bio: "Presenter on mining assessments from DRC.",
    },
    {
      id: 11,
      image: "/speakers/speaker11.jpg",
      name: "Ms. Patricia Obiang",
      bio: "President of the Gabonese Association of the Extractive Sector.",
    },
    {
      id: 12,
      image: "/speakers/speaker12.jpg",
      name: "Mr. Kprigbene Wanda",
      bio: "Director of Geological and Mine Research, Ministry of Mines and Energy Resources, Republique of Togo.",
    },
    {
      id: 13,
      image: "/speakers/speaker13.jpg",
      name: "Ms. NIikoh Mefeugeng Cristelle",
      bio: "Senior Accountant/ Financial Technical Officer Ministry of Water Resources and Energy, Cameroon.",
    },
    {
      id: 14,
      image: "/speakers/speaker14.jpg",
      name: "Sadrack Dobe",
      bio: "Director General of Geology at the Ministry of Petroleum, Mines and Geology of Chad.",
    },
    {
      id: 15,
      image: "/speakers/speaker15.jpg",
      name: "Mr. Vusi Mabena",
      bio: "Executive Secretary of the Mining Industry Association of Southern Africa (MIASA).",
    },
    {
      id: 16,
      image: "/speakers/speaker16.jpg",
      name: "Ms. Alaka Lugonzo",
      bio: "Senior Civil Society Advisor, Transition Minerals Campaign at Global Witness.",
    },
    {
      id: 17,
      image: "/speakers/speaker17.jpg",
      name: "Ms. Balbine Pascaline Makani",
      bio: "National Coordinator of the Planet Gold Project.",
    },
    {
      id: 18,
      image: "/speakers/speaker18.jpg",
      name: "Dr. Tersoo Aga",
      bio: "Associate Professor of Economic Geology, University of Jos, Nigeria.",
    },
    {
      id: 19,
      image: "/speakers/speaker19.jpg",
      name: "Ms. Pauline Vande-Pallen",
      bio: "Programme Officer with TWN Africa.",
    },
    {
      id: 20,
      image: "/speakers/speaker20.jpg",
      name: "Mr. Mukasiri Sibanda",
      bio: "Coordinator stop the Bleeding Campaign.",
    },
    {
      id: 21,
      image: "/speakers/speaker21.jpg",
      name: "Thabani Mlilo",
      bio: "Managing Director of Moahi Sustainable Solutions.",
    },
    {
      id: 22,
      image: "/speakers/speaker22.jpg",
      name: "Mr. Sephela Makete Thema",
      bio: "General Manager for Trailings and Remining at Fraser Alexander’s South African and Namibian Operations.",
    },
    {
      id: 23,
      image: "/speakers/speaker23.jpg",
      name: "Ms. Lightness Mushi",
      bio: "Head of Communication for Tanzania Women in Mining and Mineral Industry.",
    },
    {
      id: 24,
      image: "/speakers/speaker24.jpg",
      name: "Lacina Pakoun",
      bio: "Technical Advisor ACP-EU Development Minerals Programme, UNDP.",
    },
    {
      id: 25,
      image: "/speakers/speaker25.jpg",
      name: "Engr. Clever Sithole",
      bio: "Mining Consultant.",
    },
    {
      id: 26,
      image: "/speakers/speaker26.jpg",
      name: "Mecktilder M. Mchomvu",
      bio: "Co-Founder and CCO of WOOW ME JEWEL LTD,",
    },
    {
      id: 27,
      image: "/speakers/speaker27.jpg",
      name: "Gibson Kawago",
      bio: "Founder of WAGA Technologies and WAGA Motion.",
    },
    {
      id: 28,
      image: "/speakers/speaker28.png",
      name: "Kundai Chikonzo Midzi",
      bio: "Businesswoman and mining industry pioneer.",
    },
  ];
  return speakers;
}
