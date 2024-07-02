import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <h1><Link href={"/pagina2"}>Ingresar al Sitio</Link></h1>
    </div>
  );
}
