import { Metadata } from "next";
import { NavBar } from "../components/navigation/NavBar";

export const metadata: Metadata = {
    title: "Titulo desde Layout de Paginas",
    description: "Esto es un objeto metadata desde el layout de paginas",
};

export default function PaginasLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <NavBar />
            {children}
        </div>
    );
}