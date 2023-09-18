import './ContactBox.css'
import Link from "next/link";
import { JsxElement } from "typescript";

interface ContactBoxProps {
    id?:string;
    className?: string;
    icon: JSX.Element;
    href: string;
    label:string;
    handle: string;
}

const ContactBox: React.FC<ContactBoxProps> = ({id,className,icon,href,label,handle}) =>{
    
    return (
        <aside id={id} className={`contact-box ${className}`}>
            <Link href={href} target="_blank">
              <div className="cb-icon">{icon}</div>
              </Link>
              <div className="cb-handle">{handle}</div>
              <div className="cb-label">{label}</div>
        </aside>
    )
}

export default ContactBox;