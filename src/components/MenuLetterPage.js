import React from "react";
import "../styles/menu-letter.css";
import { CARTA_TOTAL_PAGES } from "../data/cartaUnikoPages";
import unikoLogo from "../imagenes/uniko_vector.png";

function getHeadingTheme(title = "") {
  const t = title.toLowerCase();
  if (t.includes("cafeter") || t.includes("expresso") || t.includes("leche")) {
    return { tone: "coffee" };
  }
  if (
    t.includes("desayuno") ||
    t.includes("merienda") ||
    t.includes("combos")
  ) {
    return { tone: "breakfast" };
  }
  if (t.includes("sandwich") || t.includes("focaccia") || t.includes("ciabatta")) {
    return { tone: "sandwich" };
  }
  if (t.includes("bebida") || t.includes("limonada") || t.includes("alcohol")) {
    return { tone: "drinks" };
  }
  if (t.includes("té") || t.includes("te")) {
    return { tone: "tea" };
  }
  if (t.includes("pasteler") || t.includes("tortas") || t.includes("alfajores")) {
    return { tone: "bakery" };
  }
  return { tone: "classic" };
}

function RistrettoHeading({ title, subtitle, as: Tag = "h3" }) {
  const { tone } = getHeadingTheme(title);
  return (
    <div className={`menu-ristretto-block menu-tone--${tone}`}>
      <Tag className="menu-ristretto-block__title">{title}</Tag>
      {subtitle ? (
        <p className="menu-ristretto-block__subtitle">{subtitle}</p>
      ) : null}
    </div>
  );
}

function HeadingWithLines({
  title,
  subtitle,
  price,
  as: Tag = "h2",
  embedded = false,
}) {
  const { tone } = getHeadingTheme(title);
  const rootClass = [
    "menu-heading",
    "menu-heading--sheet",
    `menu-tone--${tone}`,
    embedded ? "menu-heading--embedded" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClass}>
      <div className="menu-heading__row">
        <span className="menu-heading__line" aria-hidden="true" />
        <Tag className="menu-heading__title">{title}</Tag>
        <span className="menu-heading__line" aria-hidden="true" />
      </div>
      {price ? <p className="menu-heading__price">{price}</p> : null}
      {subtitle ? (
        <p className="menu-heading__subtitle">{subtitle}</p>
      ) : null}
    </div>
  );
}

function BlockRenderer({ block }) {
  switch (block.kind) {
    case "feature":
      return (
        <header className="menu-feature">
          <h2 className="menu-feature__title">{block.title}</h2>
          {block.lines?.map((line, i) => (
            <p key={i} className="menu-feature__line">
              {line}
            </p>
          ))}
        </header>
      );
    case "note":
      return (
        <p
          className={
            block.centered ? "menu-note menu-note--centered" : "menu-note"
          }
        >
          {block.text}
        </p>
      );
    case "sectionTitle": {
      const isMajor =
        block.tier === "major" || block.style === "sheet";
      if (isMajor) {
        return (
          <HeadingWithLines
            title={block.text}
            subtitle={block.subtitle}
            as="h3"
            embedded
          />
        );
      }
      return (
        <RistrettoHeading
          title={block.text}
          subtitle={block.subtitle}
          as="h3"
        />
      );
    }
    case "sectionSubtitle":
      return <p className="menu-section-subtitle">{block.text}</p>;
    case "menuRows":
      return (
        <ul className="menu-list">
          {block.rows.map((row, i) => (
            <li key={i} className="menu-item">
              <div className="menu-item__main">
                <span className="menu-item__name">{row.name}</span>
                {row.price && (
                  <span className="menu-item__price">{row.price}</span>
                )}
              </div>
              {row.desc && (
                <p className="menu-item__desc">{row.desc}</p>
              )}
            </li>
          ))}
        </ul>
      );
    case "intro":
      return (
        <div className="menu-intro">
          {block.title ? (
            <HeadingWithLines title={block.title} as="h2" />
          ) : null}
          {block.body ? <p className="menu-intro__body">{block.body}</p> : null}
        </div>
      );
    case "teaList":
      return (
        <div className="menu-tea-block">
          {block.teas.map((t, i) => (
            <article key={i} className="menu-tea">
              <h4 className="menu-tea__name">{t.name}</h4>
              <p className="menu-tea__text">{t.text}</p>
            </article>
          ))}
        </div>
      );
    case "dessertList":
      return (
        <div className="menu-dessert-block">
          {block.items.map((d, i) => (
            <article key={i} className="menu-dessert">
              <h4 className="menu-dessert__name">{d.name}</h4>
              <p className="menu-dessert__text">{d.text}</p>
            </article>
          ))}
        </div>
      );
    case "bullets":
      return (
        <ul className="menu-bullets">
          {block.items.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      );
    default:
      return null;
  }
}

function MenuLetterPage({ pageIndex, sheetHeading, blocks }) {
  const pageNum = pageIndex + 1;

  return (
    <section
      className="menu-letter-page"
      aria-label={`Hoja ${pageNum} de ${CARTA_TOTAL_PAGES}`}
    >
      <div className={`menu-letter-sheet menu-letter-sheet--page-${pageNum}`}>
        <div className="menu-letter-brand">
          <img
            src={unikoLogo}
            alt="Úniko"
            className="menu-letter-brand__img"
            decoding="async"
          />
        </div>
        <div className="menu-letter-body">
          {sheetHeading ? (
            <HeadingWithLines
              as="h1"
              title={sheetHeading.title}
              subtitle={sheetHeading.subtitle}
              price={sheetHeading.price}
            />
          ) : null}
          {blocks.map((block, i) => (
            <BlockRenderer key={i} block={block} />
          ))}
        </div>
        <footer className="menu-letter-footer">
          <span className="menu-letter-page-num">
            {pageNum} / {CARTA_TOTAL_PAGES}
          </span>
        </footer>
      </div>
    </section>
  );
}

export default MenuLetterPage;
