import Image from 'next/image';

export default function About() {
   const aboutText = [
      "Hello! I'm Felix Ardy Mulya. I'm a Software Engineer based in Jakarta, Indonesia. I have a passion for Software Engineering, especially in Full Stack Development, and love to create things that can help people.",
      "I started my journey in Software Engineering when I was in college 2019. I learned how to code and build websites and web applications. I have experience working with various technologies such as React, Node.js, Express, and MongoDB.",
      "I have worked on various projects from small websites to large-scale web applications such as E-commerce platform for Ackuretta Technology. I enjoy learning new technologies and continuously improving my skills."
   ];

   return (
      <section id="about" className="flex flex-col md:flex-row justify-center md:justify-between mx-auto max-w-6xl py-16 px-6 space-y-8 md:space-y-0 md:space-x-8">
         <div className="w-auto md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <Image
               src="/felix.jpg"
               alt="profile"
               width={800}
               height={800}
               className="w-full rounded-xl"
               />
         </div>
         <div className="md:w-1/2 space-y-4">
            <h1 className='text-4xl'>About <span className='font-bold'>Me</span></h1>
            {aboutText.map((paragraph, index) => (
            <p key={index} className='text-gray-600 mt-4'>
               {paragraph}
            </p>
            ))}
         </div>
      </section>
   );
}