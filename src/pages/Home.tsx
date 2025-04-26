import React, { useState } from "react";
import Header from '../components/Header';
import ChatBot from "./ChatBot";
import samplePDF from '../resources/sample.pdf'
const Home: React.FC = () => {

  const [chatOpen, setChatOpen] = useState(true);

  return (
    <>
      <Header />

      <div className="flex h-screen">
        {/* Left - Chat Section */}
       
         <ChatBot isOpen={chatOpen} setIsOpen={setChatOpen} />

         {!chatOpen && <div className="w-[110px]"></div>}

        {/* Right - PDF Viewer */}
        <div className="w-full p-4">
          <h2 className="text-xl font-bold mb-4">PDF Viewer</h2>
          <div className="h-[90%] border rounded shadow">
            <embed
              src={samplePDF}
              type="application/pdf"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
