import Header from "../nav/header";
import { Card, Text, Flex, SimpleGrid, Spoiler, Anchor, Image, Title, AspectRatio,Grid, Container } from '@mantine/core';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Abdurahman from "../../assets/BOD/abdurahman.jpg";
import alemu from "../../assets/BOD/alemu.jpg";
import birhanu from "../../assets/BOD/birhanu.jpg";
import enewey from "../../assets/BOD/enewey.png";
import Fikadesilassie from "../../assets/BOD/Fikadesilassie.png";
import firdos from "../../assets/BOD/firdosa.jpg";
import genet from "../../assets/BOD/genet.jpg";
import getachew from "../../assets/BOD/getachew.jpg";
import mekdes from "../../assets/BOD/mekdes.png";
import yishak from "../../assets/BOD/yisak.jpg";
import alemseged from "../../assets/EM/alemseged.png";
import bedilu from "../../assets/EM/bedilu.png";
import daniel from "../../assets/EM/daniel.png";
import dejene from "../../assets/EM/dejene.png";
import demis from "../../assets/EM/demis.jpg";
import estifanos from "../../assets/EM/estifanos.png";
import kassahun from "../../assets/EM/kassahun.png";
import kiros from "../../assets/EM/kiros.png";
import mezmur from "../../assets/EM/mezmur.png";
import michael from "../../assets/EM/michael.png";
import tesema from "../../assets/EM/tesema.jpg";
import tesfaye from "../../assets/EM/tesfaye.jpg";
import yohannes from "../../assets/EM/yohannes.png";
import { useState } from "react";
import Footer from "../nav/footer";
import { title } from "framer-motion/client";


const boardMembers = [
  { title: 'Vice Chairman', name: 'Ato Alemu Tadesse', image: alemu },
  { title: 'Director', name: 'Ato Getachew Tadesse', image: getachew },
  { title: 'Director', name: 'Ato Abdurahman Abdulbaki', image: Abdurahman },
  { title: 'Director', name: 'Ato Birhanu Tadesse', image: birhanu },
  { title: 'Director', name: 'W/ro Mekdes G/Tsadik', image: mekdes },
  { title: 'Director', name: 'W/ro Enewey G/Medhin', image: enewey },
  { title: 'Director', name: 'Ato Fikadesilassie Beza', image: Fikadesilassie },
  { title: 'Director', name: 'W/ro Genet Argaw', image: genet },
  { title: 'Director', name: 'W/ro Firdosa Adus', image: firdos },
  { title: "Company's Secretary", name: 'Ato Yisak Kebede', image: yishak },
];

const managers = [
  { title: 'Managing Director - CEO', name: 'Ato Kiros Jiranie', image: kiros },
  { title: 'Deputy Managing Director', name: 'Ato Kassahun Begashaw', image: kassahun },
  { title: 'U/W & Branch Operations Department', name: 'Ato Demis Abera', image: demis },
  { title: 'HRM & Property Administration Department', name: 'Ato Tesfaye Girma', image: tesfaye },
  { title: 'Reinsurance Service', name: 'Ato Mezmur Hawaz', image: mezmur },
  { title: 'Engineering Service', name: 'Ato Estifanos Emiru', image: estifanos },
  { title: 'Legal Service', name: 'Ato Michael Mesfin', image: michael },
  { title: 'Internal Audit Department', name: 'Ato Tesema Hidetu', image: tesema },
  { title: 'Risk Management & AM-CFT Compliance Department', name: 'Ato Bedilu Mekonnen', image: bedilu },
  { title: 'Claims Management Department', name: 'Ato Yohannes Hailu', image: yohannes },
  { title: 'Finance and Investment Department', name: 'Ato Daniel Teweldebrehan', image: daniel },
  { title: 'ICT Department', name: 'Ato Dejene Megersa', image: dejene },
  { title: 'Life & Health Insurance Department', name: 'Ato Alemseged Meresa', image: alemseged }
];
const ReadMore = ({ text, limit }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => setIsExpanded(!isExpanded);

  return (
    <p className="text-center">
      {isExpanded ? text : text.slice(0, limit) + "..."}
      <button
        className="text-[#DECCFE] font-semibold ml-2 underline"
        onClick={toggleReadMore}
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </p>
  );
};
function About() {
  return (
    <div>
      <Header />
      <div className="ml-12 mr-12">
        <div className="text-3xl mt-8 mb-4 text-[#343989] font-size-10 font-bold">
          <p>About Us</p>
        </div>
        <p className="text-lg text-[#373535] mb-4">
          Africa Insurance Company (AIC) is a privately owned Professional Insurance Company established in 1994 in accordance with the Licensing and Supervision of Insurance Business Proclamation No.8/1994, and the commercial code of Ethiopia. The company is set up with fully paid up capital of 30 million Ethiopian Birr. The capital is divided into 30,000 ordinary shares, each with a par value of 1000 Ethiopian Birr. The capital base AIC utilizes makes it the Strongest Private Insurance Company in the Country.
        </p>
        <p className="text-lg text-[#373535] mb-4">
          Although AIC is a Young Company, its personnel who are implementing the day-to-day activities of the company are highly qualified in their particular job assignments which has enabled it to provide effective service to its clients. The Corporate Motto <b>Committed to Excellence and Quality Services</b> has been adapted immediately on commencing its operation, as a guiding principle in all aspects of AIC's activities.
        </p>
        <div className="flex flex-col md:flex-row md:space-x-4 mt-20 mb-20">
          {/* Mission */}
          <div className="flex-1 mx-2">
            <Card withBorder shadow="sm" radius="sm" padding="xl" style={{ borderLeftColor: "#343989", borderLeftWidth: 5 }}>
              <Flex gap={10} align="center">
                <Text fz="xl" fw={500} color="#343989">Mission</Text>
              </Flex>
              <Spoiler maxHeight={100} showLabel={<Flex mt="sm" align="center" justify="flex-end" gap={5}><Anchor size="sm">more </Anchor><ChevronDown size={10} /></Flex>} hideLabel={<Flex mt="sm" align="center" justify="flex-end" gap={5}><Anchor size="sm">less </Anchor><ChevronUp size={10} /></Flex>}>
                <Text fz="lg" c="dimmed" mt="sm">
                  To provide reliable and quality general and long-term insurance products and services in the best interests of our existing and potential customers at a competitive price. These will be attained by deploying highly competent and motivated employees, modern technology, and ensuring long-term and sustainable growth of profit, productivity, and maximizing the overall wealth of its shareholders.
                </Text>
              </Spoiler>
            </Card>
          </div>
          {/* Vision */}
          <div className="flex-1 mx-2">
            <Card withBorder shadow="sm" radius="sm" padding="xl" style={{ borderLeftColor: "#343989", borderLeftWidth: 5 }}>
              <Flex gap={10} align="center">
                <Text fz="xl" fw={500} color="#343989">Vision</Text>
              </Flex>
              <Spoiler maxHeight={100} showLabel={<Flex mt="sm" align="center" justify="flex-end" gap={5}><Anchor size="sm">more </Anchor><ChevronDown size={10} /></Flex>} hideLabel={<Flex mt="sm" align="center" justify="flex-end" gap={5}><Anchor size="sm">less </Anchor><ChevronUp size={10} /></Flex>}>
                <Text fz="lg" c="dimmed" mt="sm">
                  Our goal is to shine as the most preferred, accessible, and market-leading insurance company in the nation, as measured by the satisfaction and loyalty of our customers, the engagement and development of our employees, and the confidence and returns of our shareholders, all while continuously striving for excellence in service delivery and operational efficiency.
                </Text>
              </Spoiler>
            </Card>
          </div>
          {/* Objective */}
          <div className="flex-1 mx-2">
            <Card withBorder shadow="sm" radius="sm" padding="xl" style={{ borderLeftColor: "#343989", borderLeftWidth: 5 }}>
              <Flex gap={10} align="center">
                <Text fz="xl" fw={500} color="#343989">Objective</Text>
              </Flex>
              <Spoiler maxHeight={100} showLabel={<Flex mt="sm" align="center" justify="flex-end" gap={5}><Anchor size="sm">more </Anchor><ChevronDown size={10} /></Flex>} hideLabel={<Flex mt="sm" align="center" justify="flex-end" gap={5}><Anchor size="sm">less </Anchor><ChevronUp size={10} /></Flex>}>
                <Text fz="lg" c="dimmed" mt="sm">
                  To emerge as a leading insurance company in Ethiopia by exceeding client expectations through enhanced customer service and technical excellence, fostering employee professionalism and prosperity, ensuring consistent development and profitability, and contributing to societal well-being.
                </Text>
              </Spoiler>
            </Card>
          </div>
        </div>
        <div className="flex items-center justify-center mt-6 mb-6">
          <div className="w-1/3 border-t-2 border-[#343989] mx-4"></div>
          <h3 className="text-2xl font-semibold text-[#343989]">Board of Directors</h3>
          <div className="w-1/3 border-t-2 border-[#343989] mx-4"></div>
        </div>
        <Flex py="md" direction="column" align="center" gap="xl">
  {/* Top Person (e.g., Chairman/CEO) - Only the first in the array */}
  {boardMembers.length > 0 && (
    <Card 
      radius="lg" 
      withBorder 
      padding="lg" 
      ta="center" 
      style={{ width: '100%', maxWidth: '300px' }} 
      hover={{ shadow: '#EF1C33' }}
    >
      <AspectRatio ratio={4/5} miw={200} mx="auto">
        <Image 
          src={boardMembers[0].image} 
          alt={boardMembers[0].name} 
          mx="auto" 
          radius="md" 
          mb="md" 
          style={{ objectFit: 'cover', width: '100%' }} 
        />
      </AspectRatio>
      <Title order={4} style={{ color: '#343989' }}>{boardMembers[0].title}</Title>
      <Text size="md" color="dimmed">{boardMembers[0].name}</Text>
    </Card>
  )}

  {/* Rest of the members in a grid */}
  <SimpleGrid 
    cols={{ base: 1, sm: 2, md: 3, lg: 4 }}
    spacing={{ base: 20, sm: 30, md: 40, lg: 50 }}
    breakpoints={[
      { maxWidth: 'sm', cols: 1, spacing: 20 },
      { maxWidth: 'md', cols: 2, spacing: 30 },
      { maxWidth: 'lg', cols: 3, spacing: 40 },
    ]}
  >
    {boardMembers.slice(1).map((member, index) => ( // Skip first member
      <Card 
        key={index} 
        radius="lg" 
        withBorder 
        padding="lg" 
        ta="center" 
        style={{ width: '100%', maxWidth: '220px' }} 
        hover={{ shadow: '#EF1C33' }}
      >
        <AspectRatio ratio={4/5} miw={160} mx="auto">
          <Image 
            src={member.image} 
            alt={member.name} 
            mx="auto" 
            radius="md" 
            mb="md" 
            style={{ objectFit: 'cover', width: '100%' }} 
          />
        </AspectRatio>
        <Title order={4} style={{ color: '#343989' }}>{member.title}</Title>
        <Text size="md" color="dimmed">{member.name}</Text>
      </Card>
    ))}
  </SimpleGrid>


</Flex>
        {/* MANAGERS */}
        <div className="flex items-center justify-center mt-6 mb-6">
          <div className="w-1/3 border-t-2 border-[#343989] mx-4"></div>
          <h3 className="text-2xl font-semibold text-[#343989]">Executive Managers</h3>
          <div className="w-1/3 border-t-2 border-[#343989] mx-4"></div>
        </div>
        <Flex py="md" direction="column" align="center" gap="xl">
  {/* Top Manager (first in array) */}
  {managers.length > 0 && (
    <Card 
      shadow="md"
      radius="lg" 
      withBorder 
      padding="lg" 
      ta="center" 
      style={{ width: '100%', maxWidth: '300px' }}
    >
      <AspectRatio ratio={4/5} miw={220} mx="auto">
        <Image 
          src={managers[0].image} 
          alt={managers[0].name} 
          mx="auto" 
          radius="md" 
          mb="md" 
          style={{ objectFit: 'cover', width: '100%' }} 
        />
      </AspectRatio>
      <Title order={4} style={{ color: '#343989' }}>{managers[0].title}</Title>
      <Text size="md" color="dimmed">{managers[0].name}</Text>
    </Card>
  )}

  {/* Remaining Managers in Grid */}
  <SimpleGrid 
    cols={{ base: 1, sm: 2, md: 3, lg: 4 }}
    spacing={{ base: 20, sm: 30, md: 40, lg: 50 }}
    breakpoints={[
      { maxWidth: 'sm', cols: 1, spacing: 20 },
      { maxWidth: 'md', cols: 2, spacing: 30 },
      { maxWidth: 'lg', cols: 3, spacing: 40 },
    ]}
  >
    {managers.slice(1).map((member, index) => (
      <Card 
        key={index} 
        shadow="md"
        radius="lg" 
        withBorder 
        padding="lg" 
        ta="center" 
        style={{ width: '100%', maxWidth: '250px' }}
      >
        <AspectRatio ratio={4/5} miw={200} mx="auto">
          <Image 
            src={member.image} 
            alt={member.name} 
            mx="auto" 
            radius="md" 
            mb="md" 
            style={{ objectFit: 'cover', width: '100%' }} 
          />
        </AspectRatio>
        <Title order={4} style={{ color: '#343989' }}>{member.title}</Title>
        <Text size="md" color="dimmed">{member.name}</Text>
      </Card>
    ))}
  </SimpleGrid>
</Flex>


        <div className="flex flex-col md:flex-row md:space-x-4 mt-20 mb-20">
          <div className="flex-1 mx-2">
            <Card withBorder shadow="sm" radius="sm" padding="xl" style={{ borderLeftColor: "#343989", borderLeftWidth: 5 }}>
              <Flex gap={10} align="center">
                <Text fz="xl" fw={500} color="#343989">Core Values</Text>
              </Flex>
              <Spoiler maxHeight={100} showLabel={<Flex mt="sm" align="center" justify="flex-end" gap={5}><Anchor size="sm">more </Anchor><ChevronDown size={10} /></Flex>} hideLabel={<Flex mt="sm" align="center" justify="flex-end" gap={5}><Anchor size="sm">less </Anchor><ChevronUp size={10} /></Flex>}>
                <Text fz="lg" c="dimmed" mt="sm">
                  Operating in accordance with a set of core values and beliefs including the provision of services with speed, efficiency and assurance, harmony and co-operating, courtesy and humanity with an all-around professionalism both to its clients and to its employees. These values are the corporate culture under which the Board of Directors, the Management and Employees of AIC are operating.
                </Text>
              </Spoiler>
            </Card>
          </div>
          <div className="flex-1 mx-2">
            <Card withBorder shadow="sm" radius="sm" padding="xl" style={{ borderLeftColor: "#343989", borderLeftWidth: 5 }}>
              <Flex gap={10} align="center">
                <Text fz="xl" fw={500} color="#343989">AIC Main Goals</Text>
              </Flex>
              <Spoiler maxHeight={100} showLabel={<Flex mt="sm" align="center" justify="flex-end" gap={5}><Anchor size="sm">more </Anchor><ChevronDown size={10} /></Flex>} hideLabel={<Flex mt="sm" align="center" justify="flex-end" gap={5}><Anchor size="sm">less </Anchor><ChevronUp size={10} /></Flex>}>
                <Text fz="lg" c="dimmed" mt="sm">
                  The main goals of AIC are to engage in life insurance, annuities, pensions, permanent health insurance, personal accident insurance, sickness insurance, general insurance, and reinsurance; to invest in real estate, mortgage bonds, shares, and other investment opportunities; and to pursue any activities that may enhance its business objectives.
                </Text>
              </Spoiler>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;
