import React from "react";
import { SocialIcon } from "react-social-icons";

interface Props {
  socialIcons: SocialIcon[];
}

const Contact = ({ socialIcons }: Props) => {
  return (
    <section id="contact" className="p-5 sm:p-10">
      <div className="w-20 sm:w-40 h-1 bg-gradient-to-r from-rose-500 to-violet-500 rounded-full" />
      <h1 className="text-gradient py-10">Kontakt</h1>
      <p className="text-sm font-light">
        Ich habe genau das Richtige für Sie.{" "}
        <a
          href="mailto:codemitpaul@gmail.com"
          className="inline-flex underline"
        >
          Schreiben Sie eine Mail.
        </a>
      </p>
      <div className="border-b border-gray-500 w-full my-10"></div>
      <p className="font-bold text-gray-500 text-sm">E-Mail</p>
      <a href="mailto:codemitpaul@gmail.com" className="text-gradient text-sm">
        codemitpaul@gmail.com
      </a>
      <div className="flex items-center space-x-2 pt-10">
        {socialIcons.map((icon) => (
          <SocialIcon
            url={icon.url}
            bgColor="#18181B"
            fgColor="#F2F3F5"
            style={{ width: 30, height: 30 }}
          />
        ))}
      </div>
    </section>
  );
};

export default Contact;
