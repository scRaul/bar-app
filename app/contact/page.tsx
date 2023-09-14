"use client";
import Link from "next/link";
import Card from "../../components/card";
import { Mail, Instagram, Linkedin } from "lucide-react";
import "./page.css";

const iconSize = 32;
const socials = [
  {
    icon: <Mail size={iconSize} />,
    href: "mailto:nav4rro@outlook.com",
    label: "Email",
    handle: "nav4rro@outlook.com",
  },
  {
    icon: <Instagram size={iconSize} />,
    href: "https://Instagram.com",
    label: "Instagram",
    handle: "@gera4n",
  },
  {
    icon: <Linkedin size={iconSize} />,
    href: "https://www.linkedin.com/in/gerardo-navarro-705339257/",
    label: "LinkedIn",
    handle: "/gerardo-navarro-705339257",
  },
];

function Contact() {
  return (
    <>
      <div className="contact-box">
        {socials.map((s) => (
          <Card key={s.href}>
            <Link href={s.href} target="_blank">
              <span aria-hidden="true" />
              <div className="icon">{s.icon}</div>{" "}
              <div className="user-id">{s.handle}</div>
              <div className="social">{s.label}</div>
            </Link>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Contact;
