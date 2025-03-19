"use server";
export default async function getSpeakerData() {
  const speakers = [
    {
      id: 1,
      image: "/speakers/speaker1.jpg",
      name: "Prof. Nellie Mutemeri",
      bio: `Prof. Nellie Mutemeri, is a Mineral Resources Governance Expert with a PhD in Geology. She is an Adjunct Professor in the School of Mining Engineering, University of Witwatersrand, South Africa, and the Director of its Mineral Resources Governance Research Group. She is the Founder and Mining Practice Director of MutConsult an advisory service in minerals, energy and climate. She has more than 30 years’ experience in the minerals sector in Africa, Latin America and Asia, focusing on sustainability, mineral policy and strategy, ASM formalisation, skills and technology development and transfer, gender equality, and responsible supply chains. She is a scientific board member at the UNESCO International Geosciences Council Programme and is on the editorial board of EPISODES: Journal of International Geoscience. She has been recently appointed to the Editorial Advisory Board of the Mineral Economics-SpringerLink journal.
      `,
    },
    {
      id: 2,
      image: "/speakers/speaker2.jpg",
      name: "Mr. Jerry Ahadjie",
      bio: `
    Mr. Jerry Ahadjie, a mining specialist with 28 years’ experience in mineral resource management: research, policy analysis & implementation, investment facilitation and mineral sector regulation. 
    Jerry Ahadjie is currently the Chief Minerals Officer at the African Natural Resources Management and Investment Centre of the African Development Bank, where he is contributing his quota to the implementation of the Africa Mining Vision in several countries on the continent. Before joining the Bank, he worked with the Ghana Minerals Commission and rose to the position of Deputy Manager in charge of Sectoral Policy, Planning, Projects and Investment Promotion.

    Mr. Ahadjie holds a BSc (Hons) in Mining Engineering and an MSc in Mineral Exploration (GIS based) from the University of Twente in the Netherlands. Jerry has several professional certificates in mineral policy & economics, mineral value chains, strategic management, mine closure and project management. Jerry has to his credit a number of publications & presentations, especially on Africa’s mining sector.
  `,
    },
    {
      id: 3,
      image: "/speakers/speaker3.jpg",
      name: "Prof. Olugbenga Okunlola",
      bio: `Professor Olugbenga Okunlola holds a PhD degree in Economic Geology of the University of Ibadan, Nigeria, where he is currently a full Professor and former Head, Department of Geology. 
His 42 years’ experience straddles the public service, industry and academia. He is currently the President of the Geological Society of Africa. President of the Geoscience Information and Research in Africa Network (GIRAF) A Past President of The Nigerian Mining and Geosciences Society, He has handled numerous consultancy and advisory assignments for national and international governments and local agencies. He has about 106 publications to his credit in many reputable Journals, conference proceedings and book chapters. He holds Fellowships of the Geological Society of London and other numerous local scientific bodies. A member of the AMREC/PARC working group, Geological Society of South Africa, and of numerous boards of local and international professional associations, subgroups and technical committees.
`,
    },
    {
      id: 4,
      image: "/speakers/speaker4.jpg",
      name: "Mr. Kossi Toulassi",
      bio: `Mr. Kossi Toulassi is a recognised financial strategist and economic analyst leader with over 20 years of experience in driving complex financial operations, investment strategies, and sustainable growth initiatives. His vast understanding of global markets and his commitment to unlocking Africa’s vast economic potential have established him as a key figure in both private and public sector financial ecosystems. As a perceptive leader, Kossi’s career is marked by his ability to align investment strategies with sustainable growth objectives, positioning him as a trusted advisor and innovator in the financial world. Through his exemplary work ethic, comprehensive expertise, and excellent working professional relationships with key stakeholders, Kossi has established a reputation that serves Africa’s broader aspirations for success on the world stage.
`,
    },
    {
      id: 5,
      image: "/speakers/speaker5.jpg",
      name: "Ms. Nere Emiko",
      bio: `Ms.Nere Emiko is the Founder of Kian Smith and SANU, a tokenization product of Kian Smith for  the Precious metals market. SANU a digital token representing physical gold and silver for the  acquisition and allocation of digital assets. It also allows buying and selling of fractions of  tokens, making it possible to have ownership in fractions of physical gold bars. Kian Smith is an  African company in the mine to market gold value chain. It has pioneered initiatives including  the Kian Smith GoldSourcing Program (KSmith-GSP), the first gold refinery in Nigeria and has established its trading and marketing presence within Africa. All its precious metal sourcing adhere to OECD Guidance on Due Diligence for the Minerals Supply Chain.
`,
    },
    {
      id: 6,
      image: "/speakers/speaker6.jpg",
      name: "Ms. Ada Thela",
      bio: `Ms. Ada Thela is an entrepreneur in the diamond industry. She is the Founder and Managing Director of Zoe Diamonds which is based in Gaborone, Botswana. Zoe Diamonds is a diamond manufacturing services and rough trading services provider. She has over 7 years experience in the diamond industry. Ada is passionate about both diamonds and people, her company won 2nd place at the Facets 2023 pitch competition, and she won the AU-UNDP Youth in Trade Challenge in November 2022. She aims to grow Zoe Diamonds into a Pan-African brand with a global footprint. Ada is also a LEAD 2025 alumni.
`,
    },
    {
      id: 7,
      image: "/speakers/speaker7.jpg",
      name: "Prof. Meck Maideyi Lydia",
      bio: `Prof. Meck Maideyi Lydia is an Associate Professor at the University of Zimbabwe, specializing in Geostatistics, hydrogeology, and environmental geochemistry. With over two decades of experience in academia, research, and industry collaboration, she has contributed extensively to sustainable resource management, artisanal and small-scale mining (ASM), and groundwater quality assessment. She is a Council Member of the International Geoscience Programme (IGCP) and a member of the African Union Working Group on African Mineral Resources and Energy Classification (AMREC).  Prof. Maideyi has led multidisciplinary research projects and consultancy work in mineral resource evaluation, environmental impact assessments, and statistical modeling in  Geosciences.
`,
    },
    {
      id: 8,
      image: "/speakers/speaker8.jpg",
      name: "Prof. Prosper Mackenzie NUDE",
      bio: `Prof. Prosper Nude is a Full Professor of Geology at the Department of Earth Science, University Ghana (2000-date). Has over 33 years’ experience spanning industry and academia; broad-based experience in geology, with petrology, field geology, mineral projects evaluation as key specialization areas. Current research efforts are on the Precambrian Geology and Metallogeny of the Pan African Belt and the Birimian of West Africa. Worked prior at the  Council for Scientific and Industrial Research (CSIR), Ghana (1993-1996), and International Mining and Mineral Exploration Companies, Small and Private Mineral Exploration Tenements (1996-2000). Has over 150 publications in the field of geosciences, including Journal Articles, Technical Reports, Competent Person & Expert Reports. Serves as a Consulting Geoscientist to the private and public sectors in different operations, and as “Competent Person” in mineral evaluation projects. Fellow- Ghana Institution of Geoscientists, and Society of Economic Geologists. Member- European Association of Geochemistry, Australian Institute of Geoscientists, Nigerian Mining and Geosciences Society; Life Member/Council Member/Membership Secretary, Geological Society of Africa. Member, Pan African Resource Reporting Code (PARC) working group.
`,
    },
    {
      id: 9,
      image: "/speakers/speaker9.jpg",
      name: "Prof. Theophile Ndougsa Mbarga",
      bio: `Prof. Ndougsa Mbarga  has degrees in Mining Engineering and holds a PhD in Earth Geophysics. He has been a member of the Legal and Technical Commission, International Seabed Authority since 2015. Prof. Ndougsa Mbarga is a Professor of Exploration Geophysics at the University of Yaounde 1, Former Director of Mines & Geology (ai) and Former Director of Geology at the Ministry of Mines, Industry and Technological Development in Cameroon, as well as a Professional Geoscientist and Engineer for the Australasian Institute of Mining and Metallurgy working as a consultant. He is a PARC team Member and AMREC-PARC working group.
`,
    },
    {
      id: 10,
      image: "/speakers/speaker10.jpg",
      name: "Mr. Fabien Mayani",
      bio: `Mr. Fabien Mayani, is a Senior Human Rights Lawyer specializing in natural resources governance and climate justice. He has extensive experience in research, analysis, reporting, advocacy, capacity building and project management. Mayani conducted and supervised several case studies and research projects in the DRC extractive sector. He was member of the Commission in charge of revising the DRC Mining Code and coordinated the assessment of the African Mining Vision’s implementation in the DRC. Currently, he is Head of Human Rights and Just Transition Program for the Carter Center in the DRC and Lecturer at New Horizons University of Lubumbashi.
`,
    },
    {
      id: 11,
      image: "/speakers/speaker11.jpg",
      name: "Ms. Patricia Obiang",
      bio: `Ms. Patricia Obiang is a degree holder from the University of Science and Technology of Masuku (Franceville, Gabon), She continued her studies in mineral processing in Canada. 
After completing her bachelor’s degree in mining and mineral processing engineering in 2004, She obtained a master’s degree in mineral processing in 2007 at Laval University in order to confirm her affinity in the profession.
She has fifteen years of experience in both the private and public sectors, in research, operations and administration.

She is currently working as the Prime Minister’s Advisor to the Head of Department in charge of Mines and Energy, She is also the President of the Gabonese Association of the Extractive Sector.
`,
    },
    {
      id: 12,
      image: "/speakers/speaker12.jpg",
      name: "Mr. Kprigbene Wanda",
      bio: `Mr. Kprigbene Wanda is an exploration geologist and hold a master’s degree in applied geophysics. He is working with the Government of the Republique of Togo as the acting Director of Geological and Mine Research within the Ministry of Mines and Energy Resources. He is in charge of execution and monitoring of geological and mining exploration and the management of the mining cadastre.
He has over 15 years’ experience in geological and geophysical
exploration, mining law enforcement and geo-mining data management and preservation.
Prior to joining the Ministry of Mines an Energy Resources, he worked in the private sector as a Consultant geologist in several drinking water supply projects in Togo. He is advocate of sustainable mining and minerals beneficiation in his country and in Africa.
`,
    },
    {
      id: 13,
      image: "/speakers/speaker13.jpg",
      name: "Ms. NIikoh Mefeugeng Cristelle",
      bio: `Ms. Nikoh Mefeugeng Cristelle is a Cameroonian Senior Accountant with over ten years of experience advocating for tax justice, specializing in combating tax evasion and avoidance in the mining and energy sectors. Cristelle has a Master’s Degree in Finance and Tax Policy from Korea University and combines technical expertise in tax policy with a strong commitment to speaking at conferences to raise awareness of the impact of tax evasion and advocate for equitable tax systems that hold corporations accountable. Cristelle is currently the Financial Technical Officer at Cameroon’s Ministry of Water Resources and Energy, where she advocates for policy reforms to improve responsible resource management.
`,
    },
    {
      id: 14,
      image: "/speakers/speaker14.jpg",
      name: "Sadrack Dobe",
      bio: `Sadrack Dobe is the Director General of Geology at the Ministry of Petroleum, Mines and Geology of Chad. He completed his higher education at the Faculty of Sciences of the University of Bangui in the Central African Republic, where he obtained a Master’s degree in Geology,
with a specialization in applied geology.
He has also studied Geospatial Information Systems at the University of the Witwatersrand in South Africa and studies on Social and Environmental Impact Management of the Mining Sector at the University of Queensland in Australia. He began his career at the Ministry of Mines in 2006 where he held several technical responsibilities. He held positions including Head of the Monitoring and Evaluation Divisions of the Ministry of Petroleum, Mines and Energy, Director of Geological Research and Mining Cadastre, Director of Mines and Geology and currently Director General of Geology. He has a total of 19 years of experience in the public sector.
`,
    },
    {
      id: 15,
      image: "/speakers/speaker15.jpg",
      name: "Mr. Vusi Mabena",
      bio: `Mr. Vusi Mabena started his career in the public sector as a Teacher.
Thereafter he moved on to hold different positions at different companies in the private sector. He is a qualified Teacher with a Secondary Teachers’ Diploma and holds a BA (Hons). He furthered his studies by obtaining a Post Graduate Diploma in Management and a Master of Management Degree specializing in Human Resources at the Wits Business School. He also has a Master of Philosophy degree specializing in Applied Business Ethics.
 He has held management positions at various companies that include the following sectors: Industrial Gases, Banking, Development Finance and Mining. He is currently the Executive Secretary of the Mining Industry Association of Southern Africa (MIASA) and serves on the boards of a few companies as an Independent Director. He has also served as Chairperson of the SADC RCM-TIMS representing the Private Sector. Mr Mabena is also the current Secretary General of the Association of Chambers of Mines and other Mining Associations in Africa (ACMMAA).
`,
    },
    {
      id: 16,
      image: "/speakers/speaker16.jpg",
      name: "Ms. Alaka Lugonzo",
      bio: `Ms. Alaka Lugonzo is a seasoned programme management professional with over eleven years demonstrable experiences on the intersections of community and stakeholder engagement, law, policy, advocacy, gender, business and human rights, and environmental justice aspects
of the energy and extractives sector (Oil, Gas, and Mining, Just Transition and Climate Justice)
Alaka’s expertise over the years has included managing projects, strategic thinking, influencing, securing resources for programmes, piloting innovations by identifying, working with, and building key strategic partnerships with development organizations, donors, governments, oil, gas and mining companies, civil society organizations, coalitions, and networks in Kenya and the African Region.
She is an Advocate of the High Court of Kenya and hold a Master of Laws Degree (LLM) in Energy Law and Policy from the University of Dundee in Scotland and an Executive Certificate on Oil, Gas and Mining Governance from the Blavatnik School of Government, University of Oxford. 
She is currently the Senior Civil Society Advisor working for the Transition Minerals Campaign at Global Witness.
`,
    },
    {
      id: 17,
      image: "/speakers/speaker17.jpg",
      name: "Ms. Balbine Pascaline Makani",
      bio: `Ms. Balbine Pascaline OMGBA is Geologist, Specialist in mining issues and expert in QHSE
She spent 20 years Supporting and promoting Artisanal Small Scale Mining activities in Cameroon. 
She fonded in 2016, the Association of Women in Mining in Cameroon (AFEMIC).
In 2022, she was elected president of the Association of Women in Mining in Africa(AWIMA)for a two year mandate end in november 2024. 
She is currently, The National Coordinator of the Planet Gold  Project and  co-fonder of Natural Resource Gender Impact Alliance (NR-GIA),  an african think thank championing gender mainstreaming in Natural Resources sector.
She is co-author of many publications as Handbooks of ASM and Report on mining regimes in Africa with respect to the ESG objectives.
`,
    },
    {
      id: 18,
      image: "/speakers/speaker18.jpg",
      name: "Dr. Tersoo Aga",
      bio: `Dr. Tersoo Aga is an Associate Professor of Economic Geology at the University of Jos, Nigeria. 
He currently serves as the Publicity Secretary of the Nigerian Geoheritage Association (NGA) and has scholarly contributions that encompass over 40 peer-reviewed publications. Dr. Aga is also the Lead Partner at Aga Geoscience Consulting, where he provides expert geological services to a broad spectrum of mining enterprises. Additionally, he leads master classes for the Lagos Gold and Gemstones Conference and Exhibition. Passionate about mentorship and leadership development, Dr. Aga is dedicated to guiding the next generation of professionals in his field.
`,
    },
    {
      id: 19,
      image: "/speakers/speaker19.jpg",
      name: "Ms. Pauline Vande-Pallen",
      bio: `Ms.Pauline Vande-Pallen is a Programme Officer with TWN Africa, working on gender, extractives and economic policy issues. She has for over a decade been part of the team working on building a civil society constituency around the African Mining Vision (AMV). She is the lead Programme Officer at the Secretariat of the National Coalition for Mining (NCOM) a network of Ghanaian NGOs, community-based organizations in the communities affected by mining and individuals who have come together to work for mining policies, laws and practices that optimize the benefits of minerals for Ghanaians citizens and against negative impacts and outcomes.
`,
    },
    {
      id: 20,
      image: "/speakers/speaker20.jpg",
      name: "Mr. Mukasiri Sibanda",
      bio: `Mr. Mukasiri Sibanda  Coordinator Stop the Bleeding Campaign. He is an opinion shifter through research and blogging on mineral resource governance and socio-economic justice issues. Mukasiri is a qualified chartered governance and accounting expert. He has worked with the Zimbabwe Environmental Law Association and Tax Justice Network Africa.
`,
    },
    {
      id: 21,
      image: "/speakers/speaker21.jpg",
      name: "Thabani Mlilo",
      bio: `Thabani is the Managing Director of Moahi Sustainable Solutions, a boutique sustainability advisory company, and an Adjunct Professor at the University of Cape Town, Chemical Engineering Faculty, Mining to Minerals Department. He has over 23 years’ experience in the Sustainability field, primarily focused on Mining. Thabani’s previous roles have included Executive Head of Sustainability at KAP, Executive Head of Safety, Health and Sustainability at ERG Africa, Head of Sustainability at Anglo American Platinum, and Sustainability Manager at AngloGold Ashanti.
His main areas of work and research are, Decarbonisation and Low Carbon Economy, Critical Minerals, Artisanal and Small Scale Mining, Responsible Sourcing, and Leadership development. Thabani is a member of the African Union Technical committee on Mining and Extractive Model Law, a senior fellow at the Cambridge Institute of Sustainable Leadership and the Sustainable Development Lead for the G20 Values advocacy working Group.
`,
    },
    {
      id: 22,
      image: "/speakers/speaker22.jpg",
      name: "Mr. Sephela Makete Thema",
      bio: `Mr. Sephela Makete Thema is a mining engineer and mining sustainability executive with over 14 years of experience and currently employed as General Manager for Tailings and Remining at Fraser Alexander’s South African and Namibian operations. He also serves on the Board of a Fraser Alexander’s Joint Venture subsidiary with a mining host community in South Africa. Fraser Alexander is the largest outsourced tailings management service provider in the world. Sephela holds a BSc, MSc, Oxford Executive Leadership Program and a Postgraduate Diploma in Business Administration. He serves on the Southern Africa Institute of Mining and Metallurgy (SAIMM)’s Young Professionals Council.
`,
    },
    {
      id: 23,
      image: "/speakers/speaker23.jpg",
      name: "Ms. Lightness Mushi",
      bio: `Ms. Lightness Mushi is a passionate advocate for youth and women’s empowerment in Africa’s mining sector. As Head of Communication for Tanzania Women in Mining and Mineral Industry (TWiMMI), she drives impactful initiatives that have empowered over 2,400 women and youth with technical skills, business acumen, and mentorship. Through strategic advocacy and capacity-building programs, she fosters a more inclusive, sustainable, and innovative mining industry. A distinguished alumna of the LEAD Programme at the University of Cape Town, 
Lightness is dedicated to amplifying youth participation in mining, ensuring they play a pivotal role in shaping the sector’s future across Africa.
`,
    },
    {
      id: 24,
      image: "/speakers/speaker24.jpg",
      name: "Lacina Pakoun",
      bio: `Lacina Pakoun is the Technical Advisor to the ACP-EU Development Programme. Based in the UNDP Regional Service Center for Africa in Addis Ababa, his role includes providing technical oversight for programme implementation in 10 focus countries in Africa, the Caribbean and the Pacific covering the following key areas:

ARTISANAL AND SMALL-SCALE MINING formalization, capacity building, of ASMs and public institutions, strengthening ESG and safety practices in ASM. 

ENABLING ENVIRONMENT through supporting policies and regulations

BUSINESS AND VALUE CHAIN DEVELOPMENT including enhancing entrepreneurial skills, building skills for value-addition, promoting low-carbon, circular, and green value chains

WOMEN’S EMPOWERMENT in ASM 

KNOWLEDGE GENERATION AND SHARING

On the continental level, he supports the UNDP’s effort in implementing the African Mining Vision (AMV) through technical and policy advisory services to a dozen of African countries and collaborate closely with AMDC on continental minerals development agenda setting.   

Prior to joining UNDP, Lacina worked extensively to bridge the extractives sector with development in West and Central Africa (Burkina Faso, DRC, and Guinea) where worked at the crossroads with governments, parliaments, corporations, CSOs and INGOs and mining communities to improve sector governance and strengthen mines-community relations, environmental management systems and CSR. He contributed to mining sector’s legal and policy reforms across Africa. Lacina holds an MSc. in Development Sociology from the University of Ouagadougou, Burkina Faso. 
`,
    },
    {
      id: 25,
      image: "/speakers/speaker25.jpg",
      name: "Engr. Clever Sithole",
      bio: `Engr. Clever Sithole is a Mining Consultant with over 18 years of experience in the mining industry. He holds an MSc in Applied Entrepreneurship & Business Management, and a BEng (Hons) in Mining Engineering & Mineral Processing. Having served for 13 years as a Mineral Evaluator in Zimbabwe, Clever has a wealth of knowledge in mineral evaluation, diamonds and gemstones pricing. He furthered his expertise as the Head Gemologist at a USAID gemstones project in Afghanistan, working for DAI LLC, USA. Clever's extensive background underscores his proficiency and dedication to the mining industry.  
`,
    },
    {
      id: 26,
      image: "/speakers/speaker26.jpg",
      name: "Mecktilder M. Mchomvu",
      bio: `Mecktilder M. M stands as a distinguished strategist and innovator in the African mining sector, with a focus on sustainable practices and empowering women and youth. As Co-Founder and CCO of WOOW ME JEWEL LTD, she transforms ethically sourced gemstones into elegant jewelry, bridging the gap between African miners and global markets. Her role as Co-Founder and Executive Director at Tanzania Women in Mining & Mineral Industry (TWiMMI)  highlights her dedication to enhancing women and youth's participation in mining.
 
Mecktilder's influence extends across Tanzania, and Africa where she has significantly contributed to the economic empowerment of over 3900 women n youth in mining. Her initiatives have created pivotal market opportunities and fostered sustainable sector growth. Additionally, her work in health and safety training, Value addition, ASM particularly in Tanzania, has directly improved miners' well-being.
`,
    },
    {
      id: 27,
      image: "/speakers/speaker27.jpg",
      name: "Gibson Kawago",
      bio: `Gibson Kawago is a Tanzanian businessman and founder of WAGA Technologies and WAGA Motion, leading the development of a national EV charging station network for electric cars, two- and three-wheelers across Tanzania. He repurposes lithium-ion batteries to power rural communities and expand clean energy access. Recognized by the United Nations and the Royal Academy of Engineering, Gibson is a finalist in the Africa Prize for Engineering Innovation and ClimateLaunchpad. His work focuses on sustainable development, youth empowerment, and climate action, driving Africa toward a greener, low-carbon future through accessible energy solutions and inclusive e-mobility infrastructure.
`,
    },
    {
      id: 28,
      image: "/speakers/speaker28.jpg",
      name: "Kundai Chikonzo Midzi",
      bio: `Kundai Chikonzo Midzi is a Zimbabwean businesswoman and mining industry pioneer. She has established several companies and founded the Insiza Women In Mining trust. Chikonzo Midzi  holds various leadership positions, including Chairperson of the Zimbabwe Association of Women in Mining Associations (ZAWIMA) and Secretary General of the SADC Women in Mining Association and Executive  Board Member of Association of Women in Mining Associations (AWIMA)A recipient of several awards, Chikonzo Midzi has a strong educational background in accountancy, taxation, mining, and project management. She is a respected advocate for women's empowerment in mining.
`,
    },
    {
      id: 29,
      image: "/speakers/speaker29.jpg",
      name: "Maspalma Samson Stanley",
      bio: `MASPALMA Samson Stanley, Born: 18TH November, 1973 in, Pella Hong LGA Adamawa State, Nigeria. He is a Geologist, Assistant Director and Special Adviser to the Director General Nigerian Geological Survey Agency (NGSA), Abuja. His experience and expertise spans 18 years, of Field and research experience cutting across, Mineral Exploration, Geological Research, Environmental Management and Resource classification. He is a Co-Author of Nigerian case study on Uranium Resource Reporting, a Publication of the United Nations Framework Classification
(UNFC), 58 th Energy Series of the UNECE, UN, 2018. He is a Member of AMREC Working Group, a Young and Next generation Geologist that has been Advocating for the Pan African Resource Reporting Code (PARC), a continental framework for African People aimed at harmonizing minerals Resource Reporting across the continent for Sustainable Growth, Development, Environmental management of African Minerals Resource, Driven by, the Africans.
`,
    },
    {
      id: 30,
      image: "/speakers/speaker30.jpg",
      name: "Mr. Leshilo William",
      bio: `William has over 30 years’ experience in the Mining Industry and currently serves as the Vice President: Government Relations and Community Business Partner for AngloGold Ashanti since 2014 responsible for build strong relationships, maximize operating performance and facilitate the achievement of financial goals through strategic engagements, leadership and management of government relations and community groups across all AngloGold Ashanti Operations.
`,
    },
    {
      id: 31,
      image: "/speakers/speaker31.jpg",
      name: "Mr. Tatenda Mungofa",
      bio: `Tatenda Mungofa is a 37-year-old Zimbabwean entrepreneur and car manufacturer who is making waves in the African automotive industry. Born in Harare, Zimbabwe, Mungofa grew up in a family of modest means, but his passion for cars was evident from a young age. He would often sketch cars and watch his father, a mechanic, repair vehicles in their backyard workshop ¹.
 
Mungofa's entrepreneurial journey began when he was just 18 years old. Despite facing numerous challenges, including rejection from several car manufacturers, he persevered and eventually founded Mureza Auto Co Pty Ltd, a car manufacturing company headquartered in South Africa. The company's mission is to create vehicles made in Africa, for Africa
 
Under Mungofa's leadership, Mureza Auto Co has made significant strides in the industry. The company has launched its first car model, the Prim8, and has plans to expand its product line to include electric vehicles, pick-up trucks, and SUVs. Mungofa's vision is to create a pan-African car brand that is synonymous with quality, affordability, and reliability ¹.
 
Mungofa's achievements have not gone unnoticed. He has been featured in several media outlets, including The Entrepreneurial Magazine, and has been recognized as one of the most promising young entrepreneurs in Africa ¹.
 
Despite his success, Mungofa remains humble and committed to his vision of creating a sustainable and prosperous automotive industry in Africa. As he once said, "I encourage everyone to just start. Do not wait until you have enough money. Develop relationships that motivate and support your goals in life"
`,
    },
    {
      id: 32,
      image: "/speakers/speaker32.jpg",
      name: "Dr. Daniel Kwayisi",
      bio: `Dr. Daniel Kwayisi is a Senior Lecturer at the University of Ghana, Department of Earth Science. He specializes in petrology and tectonics, holding degrees from the University of Ghana and a PhD from the University of Johannesburg. With over a decade of research on the Precambrian geology of West Africa, he has numerous publications in local and international journals. He is a Life Member and Information Officer of the Geological Society of Africa and a member of the Ghana Institute of Geoscientists, AMREC Working Group, the Geological Society of South Africa, and the European Association of Geochemistry.
      `,
    },
    {
      id: 33,
      image: "/speakers/speaker33.jpg",
      name: "Mr. Emmanuel K. Bensah",
      bio: `E K Bensah Jr was trained for the diplomatic service, but he went rogue after completing post-graduate studies at a diplomatic school in Brussels, Belgium in 2003.

He opted for a career that was a nexus between international communication; regional integration research; and activism.

Today he is an author and regional integration expert with specific expertise on ECOWAS, AU & East Africa.

His expertise includes international moderator experience  at the AU and some of its agencies since 2016. 

Bènsah is Ghana rep & coordinator for AUDA-NEPAD's Agenda 2063 Media Network since 2018. He also supports the African Minerals Development Centre with communications in his capacity as Member of AMDC Media Forum.
He has been relentless on pushing for more ratifications of AU Freedom of Movement Protocol since 2018 in his capacity as Deputy Executive Director of Afcfta Policy Network, where in 2020, he single-handedly engaged IOM Special Liaison Office in Addis (SLO) to support APN to promote FMP, which was activated in August 2021. 
As a consequence, he was nominated as a Migration Health Advocacy Consultant in 2022 for a one-month project unpacking migration health; universal health coverage; and FMP for IOM's Regional Office in Nairobi.
`,
    },
    {
      id: 34,
      image: "/speakers/speaker34.jpg",
      name: "Ms. Zenzi Natasha Awases",
      bio: `Ms. Zenzi Natasha Awases is a geologist by profession and holds a B.Tech (Geology) degree from the Tshwane University of Technology, B.Sci (Honors) in Geology degree from the University of Stellenbosch as well as a Post Graduate Diploma in Business Administration and Management from the University of Stellenbosch Business School.
Zenzi's journey exemplifies a steadfast commitment to breaking barriers,advocating for gender equality, and driving positive change within the mining industry and beyond. She is a trailblazer in the mining industry, where she has excelled for nearly 2 decades. She is also a captivating public speaker who shares her insights and stories from her career, leadership and business with energy and enthusiasm.
She founded the Women in Mining Association of Namibia (WiMAN) in 2017 and since 2025, serves as the president of the Association of Women in Mining Africa (AWIMA).
Zenzi is currently the Founder and Principal Consultant of EmpowerMine Consulting Services.

The accolades bestowed upon Zenzi are a testament to her influential standing within the mining industry.
In 2020, The Mining Global Magazine honored her by ranking her as the third most inspirational woman in mining in their esteemed "Top 10 Global Women in Mining" list.
In 2021, she received the Most Excellent Order of the Eagle Award, First Class, from the Namibian President , Dr Hage Geingob, for her outstanding contribution to the country's socio-economic development and transformation.
`,
    },
    {
      id: 35,
      image: "/speakers/speaker35.jpg",
      name: "Ms. Noreen Kidunduhu",
      bio: `Ms. Noreen is the Founder of Noreen &amp; Co, an impact driven boutique law firm specializing in energy and extractives.
She holds a master’s in Energy and Natural Resources Law from the University of Dundee and has written on pathways to Africa’s energy transition and the criticality of minerals to this transition.
Noreen has offered her expertise to the International Bar Association’s Energy Transition
Working Group, the Energy and Infrastructure Taskforce of the America Chamber of Commerce (Kenya) and the Kenya Green Building Society.
She currently serves as Chairperson of the Association for Women in Energy and Extractives in Kenya.
`,
    },
    {
      id: 36,
      image: "/speakers/speaker36.jpg",
      name: "Mrs. Ron Osman",
      bio: `Mrs. Ron Osman serves as the Director for Industry, Minerals, Entrepreneurship and Tourism at the African Union Commission, leading initiatives that shape policy and drive innovation in the mining industry.
`,
    },
    {
      id: 37,
      image: "/speakers/speaker37.jpg",
      name: "Dr. Marit Kitaw",
      bio: `Dr. Marit Kitaw is an Experienced Economist working on natural resources for economic transformation and Sustainable development in Africa, with extended experience working on minerals for sustainable development. Skilled in Policy and Technical Advisory Services, Minerals, International Development, and Program Management. Strong analysis and policy advisory professional with a Doctor of Philosophy (Ph.D.) focused on Economics from Université Nice Sophia Antipolis. 
`,
    },
    {
      id: 38,
      image: "/speakers/speaker38.jpg",
      name: "Mr. Mkhululi Ncube",
      bio: `Mr. Mkhululi Ncube represents AU-AMDC and offers extensive experience in artisanal and small-scale mining, advising on strategic policies and community-centered approaches in the sector.
`,
    },
    {
      id: 39,
      image: "/speakers/speaker39.jpg",
      name: "Mr. Kojo Busia",
      bio: `An experienced Non-Executive Director (NED) with an extensive track record in shaping the future of corporate governance, strategy, and sustainability aligned with Environmental, Social, and Governance (ESG) principles. With three solid decades of professional experience spanning public, private sector and civil society domains, I have dedicated my career to addressing complex challenges in good governance, environmental stewardship, and ethical corporate leadership, particularly in the context of African mineral resources. My career trajectory has been diverse and impactful, reflecting my commitment to driving positive change and sustainability.
Currently, I serve as one of the Founding Directors of Green Africa Minerals (GAM) FZCO, a private company headquartered in Dubai, UAE, specializing in green minerals exploration and project development. Its operating subsidiary, Green Africa Minerals (Tanzania) Ltd., is incorporated in Tanzania. GAM has investment interests in green minerals in diverse jurisdictions such as Namibia, DRC, and Nigeria, in line with the company’s growth strategy.
I am also the founding Director of AMV Resources Partners Ltd., an investment facilitation and advisory firm based in Accra, Ghana. AMV Resources Partners is dedicated to bridging the capital gap for mining property license holders, facilitating equity investments in highly prospective green minerals projects across Africa.
In my role as a Non-Executive Director at AngloGold Ashanti Group Ltd., one of the world's largest gold mining companies, I chair the Board's Social, Ethics, and Sustainability Committee, and serve as a member of the Investment and Nominations Committees. I lead the Board’s oversight of the company's Climate Change, Sustainability, and Environment, Social, and Governance (ESG) strategies and disclosure responsibilities.
Prior to my corporate governance and private sector leadership roles, I held various leadership positions in both multilateral and bilateral organizations, including Chief of the Natural Resources Management Section at the United Nations Economic Commission for Africa (UNECA), Coordinator of the African Mineral Development Centre (AMDC), and Chief of Section of the African Peer Review Mechanism (APRM), a unit at the United Nations Economic Commission for Africa.
My career has been characterized by a commitment to strengthening good governance in public and private sectors, promoting sustainability and ESG, and fostering equitable socio-economic development
`,
    },
    {
      id: 40,
      image: "/speakers/speaker40.jpg",
      name: "Ms. Nancy Kgengwenyane",
      bio: `Nancy Kgengwenyane is a lawyer with specialization in environmental law; with experience in designing, implementing and management of programmes and projects in the areas of democratic governance and environmental governance from a human rights based approach to programming and development. The focus under the area of democratic governance includes human rights, anti-corruption, public sector reforms and access to justice. Focus areas under environmental governance include, water, energy, mineral, natural resources, climate change and environmental law.
Organizations which Nancy has previously worked for include Government of Botswana, UNDP and USAID Integrated River Basin Management Project. Nancy has also worked closely with civil society organizations and the private sector in the area of sustainable development.
Currently as a Regional Advisor at UNECA, responsibilities include advisory services to RECs, regional institutions and member states on natural resources development (minerals, water and energy) and cooperation with UNECA sister divisions dealing with climate change issues.
The broad aim is to continue contributing to the sustainable development initiatives and measures for further enhancement of human development and the environment.
`,
    },
    {
      id: 41,
      image: "/speakers/speaker41.jpg",
      name: "Mr. Theophilus Adoko",
      bio: `Mr. Theophilus Adoko delivers key presentations on AMGF Assessments, providing critical insights into mining evaluations across multiple African countries to inform effective strategic planning.
`,
    },
    {
      id: 42,
      image: "/speakers/speaker42.jpg",
      name: "Dr. Claude Kabemba",
      bio: `Dr. Claude Kabemba is an Executive Director of the Southern Africa Resource Watch (SARW), I lead a team of dedicated professionals who work to ensure that the natural resources of the continent are managed in a transparent, accountable, and equitable manner. He has over 26 years of experience in research, policy and advocacy on democratic governance, international politics, natural resource governance, ESGs and development in Africa.
He hold a PhD in International Relations from the University of the Witwatersrand, where he also obtained my Master's and Bachelor's degrees. He has edited couple of books, published book chapters and articles on the topics of democratization, African state, election politics, social policies and natural resource governance drawing on my field experience in Southern and Central Africa. He is  passionate about advancing the rights and interests of the communities affected by the exploitation of natural resources and climate change, and fostering dialogue and cooperation among various stakeholders.
`,
    },
    {
      id: 43,
      image: "/speakers/speaker43.jpg",
      name: "Mr. Maurice Miema",
      bio: `Mr. Maurice Miema is currently Director at Center of Expertise, Evaluation and Certification of minerals (CEEC), a state-owned Agency reporting to the Ministry of Mines in the DRC.

With a background in international trade and global political economy, he has extensive experience in in mining governance, more particularly in compliance and implementation of requirements in responsible mining and sourcing in reference with the Kimberly Process Certification Scheme, ICGLR Regional Certification Mechanism and OECD Due Diligence Guidance in High Risks Areas.

He represents the DRC in the Kimberley Process where he is serving as Chair of the Working Group on Artisanal and Alluvial Production. He has also recently served as Expert in the United Nations Secretary General Panel on Critical Energy Transition Minerals and is involved in developing priorities for the UN High Level Expert Advisory Group on Critical Energy Transition minerals

He holds an MBA in International Relations and Diplomacy from the University of Cumbria, UK.
`,
    },
    {
      id: 44,
      image: "/speakers/speaker44.jpg",
      name: "Mrs. Anna Nguno",
      bio: `Anna Nguno is a seasoned geologist and public servant with over 25 years of experience. Her contributions extend to global geoscience policy development, resource classification and management frameworks, and advisory roles in academia and government.

She holds leadership positions in several professional organizations, including Vice-President for Southern Africa at the Geological Society of Africa, President of the Geoscience Council of Namibia, Vice-President (Sub-commission for Africa Maps, Commission for the Geological Map of the World (CGMW), Committee Member and a member of multiple international technical working groups (i.e., AU- African Mineral and Energy Resources Classification and Management System (AMREC)-African Resource Reporting Code (PARC).
`,
    },
    {
      id: 45,
      image: "/speakers/speaker45.jpg",
      name: "Mr. Tresor Chovu",
      bio: `Mr. Tresor Chovu leads Chovu oversees the strategic development of Chovu International Holdings Ltd. The company is currently involved in the acquisition of precious and critical minerals licenses ( Gold, Copper, Nickel, Lithium, Vanadium, Cobalt) and oil & gas assets to be developed with strategic partners. Our goal is to create value and return for our stakeholders.
Mining
Namibia: Our core project is the fully owned EPL8956 gold exploration in Namibia. A mining property positioned within 120 km of B2gold Otjikoto mine and Osino Twin Hills gold discovery. EPL 8956 was previously explored by Rio Tinto and Teck Resources.
DRC: Mbanza-Ngungu Strategic Project (Vanadium and Lead). We have put an application to the government for a property located in a brownfield area which was explored by Falcon Bridge in the 1970s with reserve estimates at 20,000t @1.64% V205 and 3.22% Pb.
Oil and Gas
On the other hand, we are planning to acquire an onshore oil block with an estimate reserve of 186Mbbl that we have been analysing for the last two years in central Africa
`,
    },
    {
      id: 46,
      image: "/speakers/speaker46.jpg",
      name: "Dr. Amany Asfour",
      bio: `Dr. Amany Asfour serves as a senior advisor at the Africa Business Council, specializing in strategic business interventions and policy guidance that promote sustainable mining development.
`,
    },
    {
      id: 47,
      image: "/speakers/speaker47.jpg",
      name: "Mr. Tabi T. Tabi",
      bio: `Mr. Tabi T. Tabi is a visionary entrepreneur with over 20 years of experience in the renewable energy and technology industries. As the Founder and CEO of Granville Energy and Tabi Group, he is pioneering Africa’s transition to sustainable energy solutions and global digital transformation. With expertise in clean technology, IT service management (ITSM), enterprise service management (ESM), and business development, he is shaping the future of renewable energy and industrial transformation across the continent.
At Granville Energy, Tabi leads efforts to provide high-quality, efficient, and competitively priced solar power components, empowering EPCs and minigrid developers to scale sustainable energy solutions across Africa. His mission extends beyond distribution—he is actively driving local manufacturing initiatives to strengthen Africa’s clean energy value chain and reduce reliance on imports.
Through Tabi Group (www.tabi-group.com), Tabi has established a global leader in IT Service Management (ITSM) and Enterprise Service Management (ESM) technical consulting and education. The company provides cutting-edge solutions that help organizations optimize their IT operations, enhance service delivery, and achieve operational excellence. With a strong focus on digital transformation, Tabi Group empowers businesses worldwide with expert training, innovative strategies, and best-in-class consulting services in ITSM and ESM frameworks.
Previously, Tabi held leadership roles in technology consulting, energy infrastructure development, and digital transformation initiatives, working with multinational organizations to implement sustainable and scalable solutions. His strategic expertise has driven multi-million-dollar projects, advancing both energy accessibility and IT service excellence.
A thought leader in Africa’s renewable energy landscape and the global ITSM/ESM industry, Tabi is committed to solving critical challenges through innovative financing, strategic partnerships, and advanced technology deployment. He frequently speaks on energy transition, sustainable development, ITSM/ESM best practices, and unlocking Africa’s vast potential through clean power and industrial growth.
Driven by a vision of energy independence, digital transformation, and economic empowerment, Tabi T. Tabi is at the forefront of Africa’s clean energy revolution and global IT service innovation. Connect with him to collaborate on transformative energy, technology, and investment opportunities.
`,
    },
    {
      id: 48,
      image: "/speakers/speaker48.jpg",
      name: "Mr. Deng Ngang Denge",
      bio: `Mr. Deng Ngang Denge is a Professional geologist with mining and mineral exploration experiences. Always seeking new opportunities that will further develop my skills for a long-term career goal.
`,
    },
    {
      id: 49,
      image: "/speakers/speaker49.jpg",
      name: "Prof. Opafunso Zacheus",
      bio: `Prof. Opafunsho Zacheus brings extensive academic and field experience to moderate sessions on AMREC implementation, driving collaborative discussions that integrate digital strategies with sustainable mining practices.
`,
    },
    {
      id: 50,
      image: "/speakers/speaker50.jpg",
      name: "Paulo Tanganha",
      bio: `Paulo Tanganha is a consultant to the Secretary of States for Mines - provide technical support on the implementation of the Angolan´s government politics for the geology and mining sector.
Exposure to the Value Chain of all mineral resources being mined in Angola (diamonds, iron ore, gold, copper, phosphates, mineral water, semi-precious stones, ornamental rocks and other construction materials).
Highly experienced in Diamond prospecting techniques, Operation Management , Leadership and Performance Management in the Diamond Industry.
Experience in designing Prospecting Activity Work Programme and Budgeting. Exposure to Senior Management, allowed me to acquire skills on Senior Technical Management tasks and Business Management.
Highly motivated to continuously learn more about other commodities and Manage Mineral Resource Businesses.
Specialties: Diamond Exploration (From Reece to Resource Phase), Mineral Resource Industry.
`,
    },
    {
      id: 51,
      image: "/speakers/speaker51.jpg",
      name: "Mr. Kenneth Okwaroh",
      bio: `Kenneth Okwaroh is a Research Associate and Executive Director at Africa Centre for People Institutions and Society (ACEPIS) – an Afrocentric think-tank dedicated to bolstering access to and use of credible information to shape public dialogue and inform policy. He leads a team of public policy analysts researching the nexus between tax, sovereign debt and trade and engaging government, civil society, international organisations and private sector on policy proposals for financing sustainable development in Africa. Okwaroh is reader and commentator on fiscal and social policy in Africa. 
`,
    },
    {
      id: 52,
      image: "/speakers/speaker52.jpg",
      name: "Mr. Moses Tshetlane",
      bio: `Mr. Moses Tshetlane, Having acquired a Bachelor of Science Degree and a Diploma in Banking, he has a good appreciation of technical and business aspects of mining operations.My goal is to develop as a Business Analyst in the Mining or Financial Services sector.Currently doing Msc. in Mineral And Energy Economics at Curtin Graduate School of Business in Perth(Jan 2012 - Aug 2013).
Specialties: Mining & Economics,Finance & International Trade.
`,
    },
    {
      id: 53,
      image: "/speakers/speaker53.jpg",
      name: "Mr. Mohamed Stevens",
      bio: `Mr. Mohamed Stevens represents ALSF and is dedicated to driving innovation in the mining sector through strategic policy development and the adoption of sustainable practices.
`,
    },
    {
      id: 54,
      image: "/speakers/speaker54.jpg",
      name: "Gerald Mwila",
      bio: `Gerald Mwila is an experienced Water, Sanitation and Hygiene WASH-Specialist with a demonstrated history of working in the non-profit organization management industry.
Strong professional skilled in Mineral Exploration, Arcgis Products, Geology, Hydrogeology, Engineering geology and Environmental Management, Geological & geochemical Sampling, and MapInfo.
`,
    },
    {
      id: 55,
      image: "/speakers/speaker55.jpg",
      name: "Ms. Monica Gichuhi",
      bio: `Promoting responsible sourcing of minerals from Africa to ensure greater benefits of extraction to source countries. Advocating for value addition of minerals inline with the Africa Mining Vision through establishing linkages and collaborations in the minerals value chain. Passionate about supporting and working with artisanal and small scale miners(ASM) in attaining their formalization. Adept at advocating for the inclusion and participation of women in the mining industry.
`,
    },
    {
      id: 56,
      image: "/speakers/speaker56.jpg",
      name: "Dr. Alecia NDHLOVU",
      bio: `Dr. Alecia Ndhlovu is  a Senior Lecturer in the Department of Political Studies at the University of Cape Town. Her background is in International Relations, Comparative Politics, and Applied Economics, and my teaching and research interests are in the political economy of development, particularly how political institutions impact development outcomes in Africa’s resource economies. She also examine the geopolitics of energy and mining, including the complex relationships between resources, trade, and global governance.
`,
    },
    {
      id: 57,
      image: "/speakers/speaker57.jpg",
      name: "Mr. Bright Foli",
      bio: `Mr. Bright Foli With over 10 years of work experience in the oil and gas and mineral processing sectors, He is passionate and driven Program Manager at Amira Global, a leading provider of innovative solutions for the mining industry. I am responsible for delivering high-quality programs and projects across Africa, as well as providing global support for mineral processing operations. I am motivated by the mission of Amira Global to create sustainable value for the mining industry and its stakeholders, and I strive to contribute to its vision of transforming the sector through innovation and collaboration. I bring diverse perspectives and experiences to the team, and I value learning, excellence, and integrity.
`,
    },
    {
      id: 58,
      image: "/speakers/speaker58.jpg",
      name: "Mr. Maguwu Farai",
      bio: `Mr. Maguwu Farai With over 15 years of experience in research and advocacy, I specialize in human rights, natural resource governance, community rights, women's rights, environmental justice, animal welfare, and biodiversity protection. In 2012, I was honored with the Alison des Forges Award for Extraordinary Activism by Human Rights Watch in recognition of my impactful work. Read more here.
As the founder and leader of the Centre for Natural Resource Governance, I also provide consultancy services on sustainable natural resource management. My advocacy is rooted in empowering grassroots communities to build collective power and address the externalized costs of extractivism, while demanding fair compensation for the exploitation of their natural resources.
A passionate climate justice campaigner, I collaborate with a wide range of stakeholders to confront the urgent climate crisis. Through grassroots-driven actions such as organizing counter COP events, engaging in storytelling, and hosting conferences, I advocate for climate justice solutions that are inclusive, people-centered, and eco-friendly.
As a change-maker, I believe that an equitable, sustainable, and eco-conscious world is not only necessary but achievable within our lifetime.
`,
    },
    {
      id: 59,
      image: "/speakers/speaker59.jpg",
      name: "Wilson Mutagwaba",
      bio: `Wilson Mutagwaba is a result oriented manager believing in delivering for his clients on timely manner and good quality products of his work.
`,
    },
    {
      id: 60,
      image: "/speakers/speaker60.jpg",
      name: "Mutero Thekla",
      bio: `Thekla Mutero Founder and President of Emerging Mining Association of Namibia 
 Board Chairperson of Southern African Miners Consortium , Multiple Award winners | Motivational Speaker, Doer and Ready to from the heart.
`,
    },
  ];
  return speakers;
}
