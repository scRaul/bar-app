"use client";
import Link from "next/link";
import Card from "../../components/card";
import { Mail, Instagram } from "lucide-react";
import './page.css'

const socials = [
	{
		icon: <Mail size={20} />,
		href: "mailto:sc.raul.17@gmail.com",
		label: "Email",
		handle: "sc.raul.17@gmail.com",
	},
	{
		icon: <Instagram size={20} />,
		href: "https://Instagram.com",
		label: "Instagram",
		handle: "@scRaul",
	},
];


function Contact(){

    return (
        <div className="contact-box">
            {socials.map((s) => (
                <Card>
                <Link
                    href={s.href}
                    target="_blank"
                >
                    <span
                        aria-hidden="true"
                    />
                    <span >
                        {s.icon}
                    </span>{" "}
                    <div >
                        <span >
                            {s.handle}
                        </span>
                        <span>
                            {s.label}
                        </span>
                    </div>
                </Link>
            </Card>
            ))}

        </div>
    )
}


export default Contact;