import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Contact() {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');
   const [error, setError] = useState('');
   const [success, setSuccess] = useState('');

   const socialMedia = [
      { icon: faLinkedin, name: 'LinkedIn', link: 'https://www.linkedin.com/in/felix-ardy-mulya/' },
      { icon: faGithub, name: 'Github', link: 'https://github.com/felixxmulya' },
      { icon: faEnvelope, name: 'Email', link: 'mailto:felixmulya777@gmail.com' },
   ];

   async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      e.stopPropagation();

      try {
         const response = await fetch(`https://formcarry.com/s/${process.env.NEXT_PUBLIC_FORMCARRY_KEY}`, {
            method: 'POST',
            headers: {
               "Accept": "application/json",
               "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, message })
         });

         const result = await response.json();

         if (result.code === 200) {
            setSuccess("We received your submission, thank you!");
            setName('');
            setEmail('');
            setMessage('');
         } else if (result.code === 422) {
            setError("Please fill in all fields correctly.");
         } else {
            setError("An error occurred. Please try again later.");
         }
      } catch (error) {
         setError("An error occurred. Please try again later.");
      }
   }

   return (
      <div className="flex flex-col-reverse md:flex-row p-8 bg-white text-gray-900 items-center justify-center h-screen">
         <form onSubmit={onSubmit} className="flex-1 space-y-4 p-4 max-w-lg mx-auto">
            <div className="formcarry-block">
               <label htmlFor="name">Full Name</label>
               <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  placeholder="Your first and last name"
                  required
                  className="w-full p-2 border rounded"
               />
            </div>

            <div className="formcarry-block">
               <label htmlFor="email">Your Email Address</label>
               <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  placeholder="john@doe.com"
                  required
                  className="w-full p-2 border rounded"
               />
            </div>

            <div className="formcarry-block">
               <label htmlFor="message">Your Message</label>
               <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  id="message"
                  placeholder="Enter your message..."
                  required
                  className="w-full p-2 border rounded h-32"
               ></textarea>
            </div>

            <div className="formcarry-block">
               <button type="submit" className="w-full p-2 bg-black hover:bg-zinc-800 text-white rounded font-bold">
                  Get in Touch
               </button>
            </div>

            {error && <p className="text-red-500 mt-2">{error}</p>}
            {success && <p className="text-green-500 mt-2">{success}</p>}
         </form>
         <div className="flex-1 md:pl-12 mt-8 md:mt-0 flex-col text-center">
            <h2 className="text-6xl font-bold mb-2">Let's <span className="text-black">talk</span> for</h2>
            <h3 className="text-3xl font-bold mb-4">Something special</h3>
            <p className="text-gray-600 mb-6">
               I'm always open to new projects, collaborations, or employment opportunities. Feel free to reach out to me!
            </p>
            <div className="flex space-x-4 mt-4 justify-center">
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