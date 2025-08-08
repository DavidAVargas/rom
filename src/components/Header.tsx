import Logo from "./Logo";
import Link from "next/link";
import Container from "./Container";

export default function Header() {
  return (
    <header className="flex sticky top-0 items-center justify-between pt-14">
      <Container>
        <Link className="flex items-center gap-2" href="/">
          <Logo />
        </Link>
      </Container>
    </header>
  );
}
