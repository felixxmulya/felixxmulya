import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Jumbotron() {
   const socialLinks = [
      { href: 'https://github.com/felixxmulya', icon: faGithub, label: 'GitHub' },
      { href: 'https://www.linkedin.com/in/felix-ardy-mulya/', icon: faLinkedin, label: 'LinkedIn' },
   ];

   return (
      <section className="h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-between mx-auto max-w-6xl py-16 px-6">
         <div className="md:w-1/2 space-y-4">
            <span className='text-lg text-gray-600'>
               Hello, my name is
            </span>
            <h1 className="text-4xl font-bold">
               Felix Ardy Mulya.
            </h1>
            <p className="text-gray-600 mt-4">
               I'm a Software Engineer based in Jakarta, Indonesia. I have a passion for Software Engineering, especially in Full Stack Development, and love to create things that can help people.
            </p>
            <div className="flex space-x-4 mt-6">
               {socialLinks.map((link, index) => (
                  <a
                     key={index}
                     href={link.href}
                     aria-label={link.label}
                     className="text-black hover:text-gray-500"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <FontAwesomeIcon icon={link.icon} size="2x" />
                  </a>
               ))}
            </div>
         </div>
         <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <Image
               src="/doodles_jumping.png"
               alt="doodles jumping"
               width={800}
               height={800}
               className="w-full"
            />
         </div>
      </section>
   );
}