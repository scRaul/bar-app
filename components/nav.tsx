import "./nav.css";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/"> Home </Link>
        </li>
        <li>
          <Link href="/drinks"> Drinks </Link>
        </li>
        <li className="spacer">&nbsp;</li>
        <li>
          <Link href="/contact"> Contact </Link>
        </li>
        <li>
          <Link href="/admin"> Admin </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
