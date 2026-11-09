import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const WHATSAPP_NUMBER = '5516991348643'

const photos = [
  {
    src: 'images/panetone-cortado.png',
    alt: 'Panetone de chocolate cortado em fatias',
    label: 'Macio por dentro',
  },
  {
    src: 'images/panetone-recheado.png',
    alt: 'Panetone recheado com chocolate',
    label: 'Muito recheio',
  },
  {
    src: 'images/panetone-inteiro.png',
    alt: 'Panetone artesanal inteiro com gotas de chocolate',
    label: 'Feito à mão',
  },
  {
    src: 'images/panetone-forno.png',
    alt: 'Panetone artesanal saindo do forno',
    label: 'Fornada fresca',
  },
]

const products = [
  {
    name: 'Pequeno',
    weight: '250 g',
    description: 'Ideal para presentear ou saborear sem pressa.',
    fillings: [
      { name: 'Sem recheio', price: 'R$ 20,90' },
      { name: 'Ninho', price: 'R$ 32,90' },
      { name: 'Chocolate', price: 'R$ 34,90' },
    ],
  },
  {
    name: 'Médio',
    weight: '500 g',
    description: 'O tamanho certo para dividir em bons encontros.',
    fillings: [
      { name: 'Sem recheio', price: 'R$ 39,90' },
      { name: 'Ninho', price: 'R$ 59,90' },
      { name: 'Chocolate', price: 'R$ 64,90' },
      { name: 'Mix', price: 'R$ 62,90' },
    ],
  },
  {
    name: 'Grande',
    weight: '1 kg',
    description: 'Para a mesa cheia e muitos pedaços generosos.',
    fillings: [
      { name: 'Sem recheio', price: 'R$ 76,90' },
      { name: 'Ninho', price: 'R$ 99,90' },
      { name: 'Chocolate', price: 'R$ 104,90' },
      { name: 'Mix', price: 'R$ 102,90' },
    ],
  },
]

const defaultWhatsappMessage = 'Olá, quero encomendar um panetone'
const hasWhatsApp = Boolean(WHATSAPP_NUMBER)

function getWhatsAppUrl(message = defaultWhatsappMessage) {
  return hasWhatsApp ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}` : undefined
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.5 11.1a8.5 8.5 0 0 1-12.6 7.5L3.5 20l1.4-4.2A8.5 8.5 0 1 1 20.5 11.1Z" />
      <path d="M8.4 7.4c.2-.3.4-.3.7-.3h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4-.1.6l-.5.6c-.1.1-.2.3-.1.5.3.6 1.1 1.5 1.7 1.9.2.1.4.2.5 0l.7-.8c.2-.2.4-.2.7-.1l1.6.8c.2.1.3.3.2.6-.1.5-.5 1.2-1 1.4-.5.3-1.2.2-2-.1-1.4-.6-2.7-1.5-3.7-2.7-.7-.8-1.6-2.2-1.7-3.1-.1-.6.1-1 .5-1.4Z" />
    </svg>
  )
}

function WhatsAppLink({ children, className, message }) {
  const whatsappUrl = getWhatsAppUrl(message)

  return (
    <a
      className={`${className}${hasWhatsApp ? '' : ' is-disabled'}`}
      href={whatsappUrl}
      target={hasWhatsApp ? '_blank' : undefined}
      rel={hasWhatsApp ? 'noreferrer' : undefined}
      aria-disabled={!hasWhatsApp}
      title={hasWhatsApp ? undefined : 'Configure seu número do WhatsApp para ativar este botão'}
      onClick={(event) => {
        if (!hasWhatsApp) event.preventDefault()
      }}
    >
      {children}
    </a>
  )
}

function App() {
  const [selectedPhoto, setSelectedPhoto] = useState(0)

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Panetones da Casa, início">
          <span className="brand-mark">P</span>
          <span>
            <strong>Panetones</strong>
            <small>da casa</small>
          </span>
        </a>
        <a className="header-link" href="#produtos">
          Ver produtos <ArrowIcon />
        </a>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Fornada artesanal · encomendas abertas</p>
          <h1>Um pedaço de carinho para <em>compartilhar.</em></h1>
          <p className="hero-description">
            Panetones macios, cheios de sabor e feitos em pequena escala para deixar seu fim de ano ainda mais gostoso.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#kit">
              Conheça o kit <ArrowIcon />
            </a>
            <span className="fresh-note"><span className="spark">✦</span> Feito sob encomenda</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-sticker">Feito<br />com afeto</div>
          <div className="hero-image-frame">
            <img src={photos[selectedPhoto].src} alt={photos[selectedPhoto].alt} />
          </div>
          <div className="hero-caption">
            <span>01 — 04</span>
            <strong>{photos[selectedPhoto].label}</strong>
          </div>
        </div>
      </section>

      <section className="trust-bar">
        <div className="section-shell trust-items">
          <span><b>01</b> Receita artesanal</span>
          <span><b>02</b> Ingredientes selecionados</span>
          <span><b>03</b> Tamanho para dividir</span>
        </div>
      </section>

      <section className="kit-section section-shell" id="kit">
        <div className="section-heading">
          <p className="eyebrow">A escolha da casa</p>
          <h2>Kit Família</h2>
          <p>Dois tamanhos para ter sempre um pedaço a mais na mesa.</p>
        </div>

        <div className="kit-card">
          <div className="kit-card-image">
            <img src="images/panetone-recheado.png" alt="Panetone recheado cortado ao meio" />
            <span className="image-note">Uma fornada, dois momentos.</span>
          </div>
          <div className="kit-card-content">
            <div className="kit-card-topline"><span>Kit promocional</span><span>Disponível sob encomenda</span></div>
            <h3>Para reunir<br /><em>todo mundo.</em></h3>
            <p className="kit-description">Os dois panetones do kit são recheados. Escolha Ninho ou Chocolate para dividir, presentear ou guardar um pouquinho para depois.</p>
            <div className="kit-details">
              <div><strong>01</strong><span>Panetone grande<br />1 kg</span></div>
              <div><strong>01</strong><span>Panetone pequeno<br />250 g</span></div>
              <div><strong>1,25 kg</strong><span>Peso total<br />do kit</span></div>
            </div>
            <div className="price-row">
              <div className="kit-prices">
                <WhatsAppLink className="kit-price-link" message="Olá, quero reservar o Kit Família recheado com Ninho.">
                  <small>Ninho</small><strong>R$ 110</strong>
                </WhatsAppLink>
                <WhatsAppLink className="kit-price-link" message="Olá, quero reservar o Kit Família recheado com Chocolate.">
                  <small>Chocolate</small><strong>R$ 115</strong>
                </WhatsAppLink>
              </div>
              <WhatsAppLink className="button button-dark">
                Reservar o kit <WhatsAppIcon />
              </WhatsAppLink>
            </div>
          </div>
        </div>
      </section>

      <section className="products-section section-shell" id="produtos">
        <div className="products-intro">
          <div>
            <p className="eyebrow">Escolha o seu</p>
            <h2>Tem um tamanho<br /><em>para cada mesa.</em></h2>
          </div>
          <p>Escolha o tamanho, clique no preço do sabor desejado e envie seu pedido direto pelo WhatsApp.</p>
        </div>
        <div className="product-grid">
          {products.map((product, index) => (
            <article className={`product-card ${index === 2 ? 'product-card-featured' : ''}`} key={product.name}>
              <div className="product-card-header"><span>{String(index + 1).padStart(2, '0')}</span><strong>{product.weight}</strong></div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="product-prices">
                {product.fillings.map((filling) => (
                  <WhatsAppLink
                    className="product-price-link"
                    key={filling.name}
                    message={`Olá, quero reservar o panetone ${product.name.toLowerCase()} de ${product.weight} com recheio ${filling.name}.`}
                  >
                    <span>{filling.name === 'Sem recheio' ? filling.name : `Recheio ${filling.name}`}</span>
                    <strong>{filling.price}</strong>
                  </WhatsAppLink>
                ))}
              </div>
              <WhatsAppLink className="product-order" message={`Olá, quero reservar o panetone ${product.name.toLowerCase()} de ${product.weight}.`}>Pedir este tamanho <ArrowIcon /></WhatsAppLink>
            </article>
          ))}
        </div>
        <div className="price-note"><span>Compra inteligente</span><strong>O médio sai mais em conta que 2 pequenos; o kit tem preço especial.</strong></div>
      </section>

      <section className="gallery-section section-shell">
        <div className="gallery-heading">
          <div><p className="eyebrow">Da nossa cozinha</p><h2>É de dar água na boca.</h2></div>
          <p>Textura macia, recheio generoso e aquele cheirinho de fornada recém-saída.</p>
        </div>
        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <button
              className={`gallery-photo ${index === selectedPhoto ? 'is-selected' : ''}`}
              type="button"
              key={photo.src}
              onClick={() => setSelectedPhoto(index)}
              aria-label={`Ver foto: ${photo.label}`}
              aria-pressed={index === selectedPhoto}
            >
              <img src={photo.src} alt={photo.alt} />
              <span>{String(index + 1).padStart(2, '0')}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="order-section section-shell">
        <div className="order-card">
          <div>
            <p className="eyebrow">A próxima fatia pode ser sua</p>
            <h2>Reserve seu pedido.</h2>
            <p>Chame no WhatsApp para escolher o tamanho, o recheio e combinar a entrega.</p>
          </div>
          <WhatsAppLink className="button button-light">
            Quero pedir <WhatsAppIcon />
          </WhatsAppLink>
        </div>
      </section>

      <footer className="site-footer section-shell">
        <span>Panetones da casa</span>
        <span>Pequenos lotes, grandes encontros.</span>
        <a href="#top">Voltar ao topo ↑</a>
      </footer>
    </main>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
