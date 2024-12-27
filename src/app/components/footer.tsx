import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
   return (
      <footer className="py-6">
         <div className="container mx-auto text-center">
            <p className="mb-4">&copy; {new Date().getFullYear()} <span className="font-bold">Felix.</span> All rights reserved.</p>
            <div className="flex justify-center space-x-4">
               <a href="https://www.linkedin.com/in/felix-ardy-mulya/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
               </a>
               <a href="https://github.com/felixxmulya" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
               </a>
               <a href="mailto:felixmulya777@gmail.com" className="hover:text-gray-400">
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
               </a>
            </div>
         </div>
      </footer>
   );
}