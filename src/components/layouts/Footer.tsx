import { FaXTwitter, FaLinkedinIn, FaInstagram, FaFacebook } from "react-icons/fa6";
import { FOOTER_NAV, SOCIAL_LINKS } from "@/constants/landing";

const SOCIAL_ICON_MAP: Record<string, React.ReactNode> = {
  FaXTwitter:   <FaXTwitter size={16} />,
  FaLinkedinIn: <FaLinkedinIn size={16} />,
  FaInstagram:  <FaInstagram size={16} />,
  FaFacebook:   <FaFacebook size={16} />,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">

        <div className="footer-top">

          {/* Marca */}
          <div className="footer-brand">
            <a href="#" aria-label="Guanet" className="footer-logo-link">
              <img
                src="/images/guanet.ico"
                alt="Guanet"
                className="footer-logo-img"
                width={36}
                height={36}
              />
              <span className="footer-brand-name">Guanet</span>
            </a>
            <p className="footer-brand-desc">
              Somos una empresa desarrolladora de software a la medida en Yucatán, México.
            </p>
          </div>

          {/* Columnas de nav + Síguenos como columna extra */}
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

            {/* Síguenos */}
            <div className="footer-nav-group">
              <p className="footer-nav-group-title">Síguenos</p>
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