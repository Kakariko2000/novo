
import React from 'react';
import PhoneIcon from './icons/PhoneIcon';
import InstagramIcon from './icons/InstagramIcon';
import WhatsappIcon from './icons/WhatsappIcon';

const ContactSection: React.FC = () => {
  const phoneNumber = '5513974237675';
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
  const instagramLink = `https://instagram.com/wandseven`;

  return (
    <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-black gradient-text">
          Disponível para Trabalhos e Colaborações
        </h2>
        <p className="mt-4 text-lg text-gray-400">
          Gostou do que viu? Vamos criar algo incrível juntos. Entre em contato para agendar uma sessão ou discutir um novo projeto.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-8">
          <div className="flex items-center gap-3 text-gray-300">
            <PhoneIcon />
            <span>(13) 97423-7675</span>
          </div>
          <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
            <InstagramIcon />
            <span>@wandseven</span>
          </a>
        </div>
        <div className="mt-12">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 font-bold text-black text-lg rounded-full transition-all duration-300 ease-in-out gradient-bg hover:shadow-lg hover:shadow-[#00FFAA]/20 hover:scale-105"
          >
            <WhatsappIcon />
            Entrar em Contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
