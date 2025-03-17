import Header from "../nav/header";
import Footer from "../nav/footer";
import Life from "../../assets/life.jpg";


const boardMembers = [
  { title: 'Director', name: 'Ato Getachew Tadesse', image: Life },
  { title: 'Director', name: 'Ato Abdurahman Abdulbaki', image: Life },
  { title: 'Director', name: 'Ato Birhanu Tadesse', image: Life },
  { title: 'Director', name: 'W/ro Mekdes G/Tsadik', image: Life },
  { title: 'Director', name: 'W/ro Enewey G/Medhin', image: Life },
  { title: 'Director', name: 'Ato Fikadesilassie Beza', image: Life },
  { title: 'Director', name: 'W/ro Genet Argaw', image: Life },
  { title: 'Director', name: 'W/ro Firdosa Adus', image: Life },
  { title: "Company's Secretary", name: 'Ato Yisak Kebede', image: Life },
];

const managers = [
  { title: 'Deputy Managing Director', name: 'Ato Masahuri Bogashaw', image: Life },
  { title: 'HBM & Property Administration Department', name: 'Ato Tesfaye Orma', image: Life },
  { title: 'Reinsurance Service', name: 'Ato Masahuri Hawaiz', image: Life },
  { title: 'Engineering Service', name: 'Ato Estrilence Emiru', image: Life },
  { title: 'Legal Service', name: 'Ato Michael Naefin', image: Life },
  { title: 'Internal Audit Department', name: 'Ato Tesfaro Hofidu', image: Life },
  { title: 'Risk Management & AM-CFT Compliance Department', name: 'Ato Bieilli J.Netomeen', image: Life },
  { title: 'Claims Management Department', name: 'Ato Volhanves Hallu', image: Life },
  { title: 'Finance and Investment Department', name: 'Ato Damit Tewaldelreham', image: Life },
  { title: 'ICT Department', name: 'Ato Daimer Negreta', image: Life },
  { title: 'Life & Health Insurance Department', name: 'Ato Admrospad Meresa', image: Life }
];
function About() {
  return (
    <div>
      <Header />
      <div className="ml-12 mr-12">
        <div className="text-3xl mt-8 mb-4 text-[#343989] font-size-10 font-bold">
          <p>About Us</p>
        </div>
        <p className="text-lg text-[#373535] mb-4">Africa Insurance Company (AIC) is a privately owned Professional
          Insurance Company established in 1994 in accordance with the
          Licensing and Supervision of Insurance Business Proclamation
          No.8/1994, and the commercial code of Ethiopia.The company is set up with fully paid up capital of 30 million Ethiopian Birr.
          The capital is divided into 30,000 ordinary shares, each with a par value of 1000
          Ethiopian Birr. The capital base AIC utilizes makes it the Strongest Private Insurance Company in the Country.</p>

        <p className="text-lg text-[#373535] mb-4">Although AIC is a Young Company, its personnel who are implementing the day-to-day activities
          of the company are highly qualified in their particular job assignments which has enabled it to
          provide effective service to its clients.The Corporate Motto  <b> Committed to Excellence and Quality Services </b>
          has been adapted immediately on commencing its operation, as a guiding principle in all aspects of AIC’s activities.</p>

        <div className="flex justify-between p-4">
          {/* Vision Section */}
          <div className="flex-1 mx-2">
            <h2 className="text-center text-2xl text-[#343989] font-bold mb-2">Mission</h2>
            <div className="bg-[#343989]  text-white rounded-lg p-6">
              <p className="text-center">To provide reliable and quality general and
                long term insurance products and services in the best
                interests of our existing and potential customers at a
                competitive price. These will be attained by deploying
                highly competent and motivated employees, modern
                technology and ensuring long term and sustainable
                growth of profit, productivity and maximizing the
                overall wealth of its shareholders.
              </p>
            </div>
          </div>

          <div className="flex-1 mx-24">
            <h2 className="text-center text-2xl text-[#343989] font-bold mb-2">Vision</h2>
            <div className="bg-[#343989]  text-white rounded-lg p-6">
              <p className="text-center">Our goal is to shine as the most
                preferred, accessible, and market-leading insurance company
                in the nation, as measured by the satisfaction and loyalty
                of our customers, the engagement and development of our employees,
                and the confidence and returns of our shareholders,
                all while continuously striving for excellence in service
                delivery and operational efficiency.</p>
            </div>
          </div>
          <div className="flex-1 mx-2">
            <h2 className="text-center text-2xl text-[#343989] font-bold mb-2">Objective</h2>
            <div className="bg-[#343989] text-white rounded-lg p-6">
              <p className="text-center">To emerge as a leading insurance company
                in Ethiopia by exceeding client expectations through enhanced
                customer service and technical excellence, fostering
                employee professionalism and prosperity, ensuring consistent
                development and profitability,
                and contributing to societal well-being.</p>
            </div>
          </div>
        </div>


        <h1 className="text-3xl mt-8 text-[#343989] font-bold text-center mb-8">Board Of Directors</h1>
        <div className="container mx-auto py-3">
          <div className="grid grid-cols-1">
            <img
              src={Life}
              className="w-32 h-32 mx-auto rounded-full mb-4 text-center"
            />
            <h2 className=" text-[#343989] text-center text-xl font-semibold">Vice Chairman</h2>
            <p className="text-center text-gray-600 mb-8">Ato Alemu Berhe</p>
          </div>
          <div className="grid text-[#343989] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <h2 className="text-xl font-semibold">{member.title}</h2>
                <p className="text-gray-600">{member.name}</p>
              </div>
            ))}
          </div>
        </div>


        {/* MANAGERS */}
        <h1 className="text-3xl text-[#343989] font-bold text-center mt-12 mb-8">Execetive Management</h1>
        <div className="container mx-auto py-3">
          <div className="grid grid-cols-1">
            <img
              src={Life}
              className="w-32 h-32 mx-auto rounded-full mb-4 text-center"
            />
            <h2 className=" text-[#343989] text-center text-xl font-semibold">Managing Director CEO</h2>
            <p className="text-center text-gray-600 mb-8">Ato Kinoa Hamiro</p>
          </div>
          <div className="grid text-[#343989] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {managers.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <h2 className="text-xl font-semibold">{member.title}</h2>
                <p className="text-gray-600">{member.name}</p>
              </div>
            ))}
          </div>
        </div>


        <div className="flex justify-between p-4 mt-8">
          {/* Vision Section */}
          <div className="flex-1 mx-2 mr-12">
            <h2 className="text-center text-2xl text-[#343989] font-bold mb-2">Core Values</h2>
            <div className="bg-[#343989]  text-white rounded-lg p-6">
              <p className="text-center">Operating in accordance with a set
                of core values and beliefs including the provision of services
                with speed, efficiency and assurance, harmony and co-operating,
                courtesy and humanity with an all-around professionalism both
                to its clients and to its employees. These values are the
                corporate culture under which the Board of Directors,
                the Management and Employees of AIC are operating.
              </p>
            </div>
          </div>

          <div className="flex-1 mx-2">
            <h2 className="text-center text-2xl text-[#343989] font-bold mb-2">AIC Main Goals</h2>
            <div className="bg-[#343989] text-white rounded-lg p-6">
              <p className="text-center">The main goals of AIC are to
                engage in life insurance, annuities, pensions,
                permanent health insurance, personal accident
                insurance, sickness insurance, general insurance,
                and reinsurance; to invest in real estate, mortgage
                bonds, shares, and other investment opportunities;
                and to pursue any activities
                that may enhance its business objectives.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </div>
  )
}

export default About;