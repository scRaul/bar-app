import Link from "next/link";
import { JsxElement } from "typescript";





interface ContactBoxProps {
    key: number;
    className?: string;
    icon: JSX.Element;
    href: string;
    label:string;
    handle: string;
}

const ContactBox: React.FC<ContactBoxProps> = ({className,icon,href,label,handle}) =>{
    
    return (
        <aside className={`contact-box ${className}`}>
            <Link href={href} target="_blank">
              <span aria-hidden="true" />
              <div className="cb-icon">{icon}</div>
              <div className="cb-handle">{handle}</div>
              <div className="cb-label">{label}</div>
            </Link>
        </aside>
    )
}

export default ContactBox;