import { FaXTwitter, FaLinkedinIn, FaInstagram, FaFacebook } from "react-icons/fa6";
import { FOOTER_NAV, SOCIAL_LINKS } from "@/constants/landing";

const SOCIAL_ICON_MAP: Record<string, React.ReactNode> = {
  FaXTwitter: <FaXTwitter size={16} />,
  FaLinkedinIn: <FaLinkedinIn size={16} />,
  FaInstagram: <FaInstagram size={16} />,
  FaFacebook: <FaFacebook size={16} />,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">

            <a href="#" aria-label="Design Async" className="footer-logo-link">
              <img
                src="/images/design.ico"
                alt="Design Async"
                className="footer-logo-img"
                width={36}
                height={36}
              />
            </a>

            <p className="footer-brand-desc">
              Plataforma para la comunidad
              hispanohablante de diseño y tecnología.
            </p>

            <div
              className="footer-product-row"
              aria-label="Design Async, plataforma de Guanet"
            >
              <span className="footer-product-label">Empresa:</span>

              <a href="#" aria-label="Guanet — inicio" className="footer-product-logo-link">
                <img
                  src="/images/guanet.ico"
                  alt="Guanet"
                  className="footer-product-logo-img"
                  width={160}
                  height={60}
                />
              </a>
            </div>

            {/* Redes Sociales */}
            <div className="footer-social">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.platform}
                  href={s.href}
                  aria-label={`Seguirnos en ${s.platform}`}
                  className="footer-social-link"
                >
                  {SOCIAL_ICON_MAP[s.icon]}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <div className="footer-nav">
            {FOOTER_NAV.map((group) => (
              <div key={group.group} className="footer-nav-group">
                <p className="footer-nav-group-title">{group.group}</p>
                <ul className="footer-nav-list">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="footer-nav-link">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copy">
            © {year} DesignAsync. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}