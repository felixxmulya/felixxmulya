import { useState, ChangeEvent, FormEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';


type FormData = {
   name: string;
   email: string;
   message: string;
};

const socialMedia = [
   { icon: faLinkedin, name: 'LinkedIn', link: 'https://www.linkedin.com/in/felix-ardy-mulya/' },
   { icon: faGithub, name: 'Github', link: 'https://github.com/felixxmulya' },
   { icon: faEnvelope, name: 'Email', link: 'mailto:felixmulya777@gmail.com' },
];

export default function Contact() {
   const [formData, setFormData] = useState<FormData>({
      name: '',
      email: '',
      message: '',
   });

   const [status, setStatus] = useState<string>('');

   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
   };

   const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();
      setStatus('Sending...');

      try {
         const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
         });

         if (res.status === 200) {
            setStatus('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
         } else {
            setStatus('Failed to send message.');
         }
      } catch (error) {
         setStatus('Error sending message.');
      }
   };

   return (
      <div className="flex flex-col md:flex-row p-8 bg-white text-gray-900">
         {/* Form Section */}
         <form onSubmit={handleSubmit} className="flex-1 space-y-4">
            <input
               type="text"
               name="name"
               value={formData.name}
               onChange={handleChange}
               placeholder="Your name"
               required
               className="w-full p-3 border rounded-lg"
            />
            <input
               type="email"
               name="email"
               value={formData.email}
               onChange={handleChange}
               placeholder="Email"
               required
               className="w-full p-3 border rounded-lg"
            />
            <textarea
               name="message"
               value={formData.message}
               onChange={handleChange}
               placeholder="How can I help?"
               required
               className="w-full p-3 border rounded-lg h-32"
            />
            <button type="submit" className="w-full p-3 bg-black hover:bg-zinc-800 text-white rounded-lg font-semibold">
               Get In Touch
            </button>
            <p>{status}</p>
         </form>

         {/* Text Section */}
         <div className="flex-1 md:pl-12 mt-8 md:mt-0">
            <h2 className="text-3xl font-bold mb-2">Let's <span className="text-black">talk</span> for</h2>
            <h3 className="text-2xl font-bold mb-4">Something special</h3>
            <p className="text-gray-600 mb-6">
               I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.
            </p>
            <div className="flex space-x-4 mt-4">
               {socialMedia.map((platform) => (
                  <Link key={platform.name} href={platform.link} target="_blank" rel="noopener noreferrer">
                     <button key={platform.name} className="hover:text-gray-500 space-x-4">
                        <FontAwesomeIcon icon={platform.icon} size="2x" />
                     </button>
                  </Link>
               ))}
            </div>
         </div>
      </div>
   );
}