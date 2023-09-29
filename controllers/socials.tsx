import { Mail,Instagram,Linkedin,DollarSign } from "lucide-react";

const iconSize = 32;
export const socials = [
  {
    icon: <DollarSign size={iconSize}/>,
    href: "https://account.venmo.com/u/nvro93",
    label: "Venmo",
    handle: "@nvro93"
  
  },
  {
    icon: <Mail size={iconSize} />,
    href: "mailto:nav4rro@outlook.com",
    label: "Email",
    handle: "nav4rro@outlook.com",
  },
  {
    icon: <Instagram size={iconSize} />,
    href: "https://www.instagram.com/gera.nvro/",
    label: "Instagram",
    handle: "@gera.nvro",
  },
  {
    icon: <Linkedin size={iconSize} />,
    href: "https://www.linkedin.com/in/gerardo-navarro-705339257/",
    label: "LinkedIn",
    handle: "/gerardo-navarro-705339257",
  }
];