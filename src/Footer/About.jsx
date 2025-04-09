/** @format */

import React from "react";
import Tilt from "react-parallax-tilt";

const teamMembers = [
  { name: "SHASHI RANJAN RAHI", id: "23BCS12325" },
  { name: "AASTHA KUMARI SINGH", id: "23BCS12310" },
  { name: "SHIVAM SHRIVASTAVA", id: "23BCS12332" },
  { name: "ANSHUMAN VATSA", id: "23BCS12208" },
  { name: "AYUSH LAL", id: "23BCS11460" },
];

const AboutPage = () => {
  return (
    <div className="relative overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-blue-50 to-pink-100 p-8">
      <div className="max-w-6xl mx-auto bg-white/70 backdrop-blur-md rounded-xl shadow-2xl p-10 border border-white/40 z-10">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          🚀 Meet Our Team
        </h1>
        <p className="text-center text-gray-600 mb-10 text-lg">
          We are a group of passionate developers working together on the{" "}
          <strong> Amazon Clone </strong> as a <b> 2nd year </b> college
          project. This team reflects hard work, creativity, and a vision to
          build something impactful.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <Tilt
              key={idx}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.05}
              transitionSpeed={1500}
              className="bg-gradient-to-br from-white to-gray-50 shadow-xl rounded-2xl p-6 border border-gray-200 hover:shadow-2xl"
            >
              <div className="text-center">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {member.name}
                </h2>
                <p className="text-gray-500">{member.id}</p>
              </div>
            </Tilt>
          ))}
        </div>

        <div className="mt-12 text-center text-gray-700 text-sm">
          <p>
            💻 This project was built with ❤️ as part of our B.Tech 2nd Year
            Submission.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
