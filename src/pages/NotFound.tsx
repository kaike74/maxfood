import { Link } from "react-router-dom";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export function NotFoundPage() {
  return (
    <div>
      <SiteHeader solid />
      <div className="site-container py-24 text-center">
        <p className="text-sm font-bold text-leaf">404</p>
        <h1 className="mt-2 text-3xl font-extrabold">Página não encontrada</h1>
        <p className="mt-3 text-ink/65">Esse endereço não existe no MaxFood.</p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-xl bg-forest px-5 py-3 text-sm font-bold text-white"
        >
          Voltar ao início
        </Link>
      </div>
      <SiteFooter />
    </div>
  );
}
