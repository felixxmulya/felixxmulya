import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitAlt, faJsSquare, faNodeJs, faHtml5, faCss3Alt, faPython, faReact, faVuejs, faAngular, faAws, faLinux, faJira } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCloud, faCube, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function Skills() {
   const [showMore, setShowMore] = useState(false);

   const categories = [
      {
         title: 'Programming Languages',
         skills: [
            { icon: faJsSquare, label: 'JavaScript' },
            { icon: faNodeJs, label: 'Node.js' },
            { icon: faHtml5, label: 'HTML' },
            { icon: faCss3Alt, label: 'CSS' },
            { icon: faPython, label: 'Python' },
         ],
      },
      {
         title: 'Frameworks/Libraries',
         skills: [
            { icon: faReact, label: 'React' },
            { icon: faVuejs, label: 'Vue.js' },
            { icon: faAngular, label: 'Angular' },
            { icon: faCube, label: 'Redux' },
            { icon: faCube, label: 'GraphQL' },
         ],
      },
   ];

   const moreCategories = [
      {
         title: 'Databases',
         skills: [
            { icon: faDatabase, label: 'MySQL' },
            { icon: faDatabase, label: 'MongoDB' },
         ],
      },
      {
         title: 'Developer Tools',
         skills: [
            { icon: faGitAlt, label: 'Git/Github' },
            { icon: faGitAlt, label: 'Bitbucket' },
            { icon: faAws, label: 'AWS' },
            { icon: faCloud, label: 'Azure' },
            { icon: faLinux, label: 'Linux' },
            { icon: faJira, label: 'Jira' },
            { icon: faCube, label: 'Tailwind' },
            { icon: faCube, label: 'Bootstrap' },
         ],
      },
   ];

   return (
      <section id="skills" className="h-auto flex flex-col justify-center items-center mx-auto py-16 px-6">
         <h1 className="text-4xl text-center mb-12">
            My <span className="font-bold">Skills</span>
         </h1>
         <div className="space-y-12 w-full max-w-6xl">
            {categories.map((category, idx) => (
               <div key={idx}>
                  <h2 className="text-2xl font-semibold mb-5 text-center">{category.title}</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">
                     {category.skills.map((skill, index) => (
                        <div
                           key={index}
                           className="flex flex-col items-center justify-center w-28 h-28 border-2 border-gray-800 rounded-lg hover:bg-black hover:text-white transition duration-300"
                        >
                           <FontAwesomeIcon icon={skill.icon} size="2x" />
                           <span className="mt-2 text-sm font-medium text-center">{skill.label}</span>
                        </div>
                     ))}
                  </div>
               </div>
            ))}
            <div className={`transition-all duration-500 ease-in-out ${showMore ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
               {moreCategories.map((category, idx) => (
                  <div className='mt-5' key={idx}>
                     <h2 className="text-2xl font-semibold mb-5 text-center">{category.title}</h2>
                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">
                        {category.skills.map((skill, index) => (
                           <div
                              key={index}
                              className="flex flex-col items-center justify-center w-28 h-28 border-2 border-gray-800 rounded-lg hover:bg-black hover:text-white transition duration-300"
                           >
                              <FontAwesomeIcon icon={skill.icon} size="2x" />
                              <span className="mt-2 text-sm font-medium text-center">{skill.label}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               ))}
            </div>
         </div>
         <button
            onClick={() => setShowMore(!showMore)}
            className="mt-8 px-4 py-2 transition duration-300 flex items-center"
         >
            <FontAwesomeIcon icon={showMore ? faChevronUp : faChevronDown} size="xl" />
         </button>
      </section>
   );
}