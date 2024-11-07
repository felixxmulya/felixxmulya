export default function Experience() {
   const experiences = [
      {
         company: 'Ackuretta Technologies Pvt. Ltd.',
         companyLink: 'https://www.ackuretta.com/',
         location: 'Taipei, Taiwan',
         title: 'Full Stack Developer',
         date: 'Aug 2023 - Nov 2024',
         description: [
            'Developed and maintained a Vue.js, JavaScript, and Shopify based E-commerce platform, integrating custom APIs with GraphQL for product management, cart functionality, and checkout. Improved site performance by 25%, resulting in a 15% increase in completed checkouts and an enhanced user experience.',
            'Created localized markets with region-specific products and pricing, driving a 20% increase in user engagement and a 15% boost in regional sales.',
            'Implemented Google Tag Manager and optimized SEO by reducing page load times with lazy loading and code splitting, increasing organic traffic by 12% and reducing bounce rates across key pages.',
            'Built a CI/CD pipeline using Bitbucket, automating deployments, improving system stability, and reducing deployment times by 30%.',
         ],
      },
   ];

   return (
      <section id="experience" className="h-auto md:h-[60vh] p-8">
         <h2 className="text-4xl font-light text-center mb-8">
            My <span className="font-bold">Experience</span>
         </h2>
         <div className="space-y-6">
            {experiences.map((exp, index) => (
               <div
                  key={index}
                  className="flex flex-col md:flex-row items-start md:items-center border-2 border-gray-800 p-6 rounded-lg shadow-lg"
               >
                  <div>
                     <div className="flex flex-col md:flex-row justify-between mb-2">
                        <a
                           className="text-xl text-gray-600 hover:text-gray-800"
                           href={exp.companyLink}
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           {exp.company}
                        </a>
                        <span className="text-sm">{exp.location}</span>
                     </div>
                     <div className="flex flex-col md:flex-row justify-between mb-2">
                        <h3 className="text-2xl font-semibold">{exp.title}</h3>
                        <span className="text-sm">{exp.date}</span>
                     </div>
                     <ul className="mt-2 list-disc pl-5 text-gray-600">
                        {exp.description.map((desc, i) => (
                           <li key={i} className="pl-1">{desc}</li>
                        ))}
                     </ul>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
}