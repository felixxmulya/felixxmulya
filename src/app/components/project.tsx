import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Project() {
   const [showMore, setShowMore] = useState(false);

   const projects = [
      {
         title: 'Ackuretta E-commerce Website Platform',
         description: [
            'Developed and maintained a Vue.js and Shopify based E-commerce platform.',
            'Created localized markets with region-specific products and pricing.',
            'Implemented Google Tag Manager and optimized SEO.',
            'Built a CI/CD pipeline using Bitbucket.',
         ],
         imageUrl: '/images/ackuretta.png',
         link: 'https://www.ackuretta.com'
      },
      {
         title: 'BursaLens: IDX Stock Predictor',
         description: [
            'Developed machine learning stock prediction system using LSTM neural network, Python, TensorFlow, analyzing 5+ years market data for 23+ Indonesian blue chip stocks, achieving predictive accuracy for 30 days forecasts.',
            'Integrated technical indicators and fundamental metrics using Yfinance API for comprehensive market analysis.',
            'Created full stack application using Flask, AWS EC2, Next.js, TypeScript, and RESTful APIs for real-time stock market data visualization and analysis.',
            'Optimized model using RobustScaler and early stopping, achieving [Y]% reduction in prediction error.'
         ],
         imageUrl: '/images/bursalens.jpeg',
         link: 'https://www.bursalens.xyz/',
         github: 'https://github.com/felixxmulya/bursalens'
      },
      {
         title: 'Invoice System Management',
         description: [
            "Built using Angular, Tailwind, and Firebase for responsive design and real-time data management.",
            "Implemented secure user authentication, dynamic form handling, and efficient data synchronization for personalized invoice creation and accurate tracking of invoice information.",
            "Added full CRUD functionality, allowing users to create, edit, and delete invoices, with the option to download invoices as PDFs."
         ],
         imageUrl: '/images/invoice.png',
         link: 'https://mitrainvoice.vercel.app',
         github: 'https://github.com/felixxmulya/invoice-system'
      },
      {
         title: 'Spotify Clone',
         description: [
            'Developed a Spotify clone application using Vue.js and integrated the Spotify API to fetch and display music data, enabling users to play music and browse playlists.',
            'Implemented audio playback functionality that provided a seamless music listening experience, similar to Spotify.'
         ],
         imageUrl: '/images/spotify.png',
         link: 'https://vue-spotify88-clone.vercel.app',
         github: 'https://github.com/felixxmulya/vue-spotify'
      },
   ];

   return (
      <section data-aos="fade-up" id="project" className="h-auto text-gray-900 p-8">
         <h2 className="text-4xl font-light text-center mb-12">
            My <span className="font-bold">Projects</span>
         </h2>
         <div className="space-y-16">
            {projects.slice(0, 3).map((project, index) => (
               <div
                  key={index}
                  className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                     } items-center transition-transform duration-300`}
               >
                  <div className="w-full md:w-1/2">
                     <Link href={project.link} target="_blank">
                        <Image
                           src={project.imageUrl}
                           alt={project.title}
                           width={500}
                           height={500}
                           className="rounded-lg shadow-lg w-full transform transition-transform duration-300 hover:-translate-y-2"
                        />
                     </Link>
                  </div>

                  <div className="w-full md:w-1/2 md:p-8 mt-4 md:mt-0">
                     <h3 className="text-3xl font-bold text-gray-800 mb-2">{`0${index + 1}`}</h3>
                     <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
                     <ul className="mt-2 list-disc pl-5 text-gray-600">
                        {project.description.map((desc, i) => (
                           <li key={i} className="pl-1">{desc}</li>
                        ))}
                     </ul>
                     <div className="flex space-x-4 my-4">
                        {project.link && (
                           <Link
                              href={project.link}
                              className="text-gray-800 hover:text-gray-600"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              <FontAwesomeIcon icon={faUpRightFromSquare} className="mr-2" />
                           </Link>
                        )}
                        {project.github && (
                           <Link
                              href={project.github}
                              className="text-gray-800 hover:text-gray-600"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              <FontAwesomeIcon icon={faGithub} className="mr-2" />
                           </Link>
                        )}
                     </div>
                  </div>
               </div>
            ))}
            <div className={`transition-all duration-500 ease-in-out ${showMore ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
               {projects.slice(3).map((project, index) => (
                  <div
                     key={index + 3}
                     className={`flex flex-col md:flex-row ${(index + 3) % 2 === 0 ? 'md:flex-row-reverse' : ''
                        } items-center transition-transform duration-300`}
                  >
                     <div className="w-full md:w-1/2">
                        <Link href={project.link} target="_blank" rel="noopener noreferrer">
                           <Image
                              src={project.imageUrl}
                              alt={project.title}
                              width={500}
                              height={500}
                              className="rounded-lg shadow-lg w-full "
                           />
                        </Link>
                     </div>

                     <div className="w-full md:w-1/2 md:p-8 mt-4 md:mt-0">
                        <h3 className="text-3xl font-bold text-gray-800 mb-2">{`0${index + 4}`}</h3>
                        <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
                        <ul className="mt-2 list-disc pl-5 text-gray-600">
                           {project.description.map((desc, i) => (
                              <li key={i} className="pl-1">{desc}</li>
                           ))}
                        </ul>
                        <div className="flex space-x-4 my-4">
                           {project.link && (
                              <Link
                                 href={project.link}
                                 className="text-gray-800 hover:text-gray-600"
                                 target="_blank"
                                 rel="noopener noreferrer"
                              >
                                 <FontAwesomeIcon icon={faUpRightFromSquare} className="mr-2" size="xl" />
                              </Link>
                           )}
                           {project.github && (
                              <Link
                                 href={project.github}
                                 className="text-gray-800 hover:text-gray-600"
                                 target="_blank"
                                 rel="noopener noreferrer"
                              >
                                 <FontAwesomeIcon icon={faGithub} className="mr-2" size="xl" />
                              </Link>
                           )}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         {projects.length > 3 && (
            <div className="text-center">
               <button
                  onClick={() => setShowMore(!showMore)}
                  className="px-4 py-2 transition duration-300 animate-bounce"
               >
                  <FontAwesomeIcon icon={showMore ? faChevronUp : faChevronDown} size="xl" />
               </button>
            </div>
         )}
      </section>
   );
}