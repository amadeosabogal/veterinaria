import React, { useState } from 'react';
import { 
  Search, User, Heart, ShoppingCart, 
  Truck, ShieldCheck, RefreshCw, Star, 
  ChevronLeft, ChevronRight, Phone, Gift, 
  Smile, Award, Dog, Cat, Bird, Menu, X
} from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* TopBar */}
      <div className="topbar">
        <div className="container">
          <div className="topbar-left">
            <span>Buscar una Tienda</span>
            <span>Rastrear Pedido</span>
          </div>
          <div className="topbar-center">
            <span className="topbar-badge">15% DSCTO</span>
            <span style={{marginLeft: '8px'}}>en compras mayores a S/ 150 online y recojo en tienda</span>
          </div>
          <div className="topbar-right">
            <span>PEN v</span>
            <span>Español v</span>
          </div>
        </div>
      </div>

      {/* NavBar */}
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <Dog size={32} color="var(--primary)" />
            <span>Ziggy</span>
          </div>
          
          <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <li className="active">Inicio</li>
            <li>Tienda v</li>
            <li>Páginas</li>
            <li>Blog v</li>
            <li>Contacto</li>
          </ul>

          <div className="nav-actions">
            <div className="search-bar">
              <input type="text" placeholder="Buscar productos..." />
              <button className="search-btn">
                <Search size={16} />
              </button>
            </div>
            
            <div className="icon-group">
              <button className="icon-btn">
                <User size={24} />
              </button>
              <button className="icon-btn">
                <Heart size={24} />
                <span className="badge">2</span>
              </button>
              <button className="icon-btn">
                <ShoppingCart size={24} />
                <span className="badge" style={{backgroundColor: 'var(--primary)', color: 'white'}}>3</span>
                <span className="cart-amount">S/ 0.00</span>
              </button>
              
              <button 
                className="mobile-menu-btn" 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                style={{display: 'none'}}
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container">
          <div className="hero-content">
            <h3 className="hero-subtitle">MASCOTAS FELICES, VIDA FELIZ</h3>
            <h1 className="hero-title">¡Mascotas más Sanas,<br/>Vidas más Felices!</h1>
            <p className="hero-desc">Comida natural, juguetes divertidos y cuidado amoroso<br/>para tu mejor amigo.</p>
            <button className="btn-primary">
              Comprar Ahora <Dog size={18} />
            </button>

            <div className="features" style={{border: 'none', padding: '40px 0 0 0', marginTop: '40px'}}>
              <div className="container" style={{padding: 0, gap: '32px'}}>
                <div className="feature-item">
                  <Truck size={32} className="feature-icon" />
                  <div className="feature-text">
                    <h4>Envío Gratis</h4>
                    <p>En pedidos mayores a S/ 149</p>
                  </div>
                </div>
                <div className="feature-item">
                  <ShieldCheck size={32} className="feature-icon" />
                  <div className="feature-text">
                    <h4>Pago Seguro</h4>
                    <p>100% Protegido</p>
                  </div>
                </div>
                <div className="feature-item">
                  <RefreshCw size={32} className="feature-icon" />
                  <div className="feature-text">
                    <h4>Devoluciones Fáciles</h4>
                    <p>Política de 30 días</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hero-image">
            <img src="/images/hero.jpg" alt="Corgi Feliz" />
            <div className="badge-natural">
              <span>Comida</span>
              <span>100%</span>
              <span style={{fontSize: '12px'}}>Natural</span>
            </div>
          </div>
        </div>
      </section>

      {/* Best Selling Products */}
      <section className="best-selling">
        <div className="container">
          <div className="section-header">
            <span className="section-title">Productos Más Vendidos</span>
          </div>
          
          <div className="products-grid-small">
            {[
              {name: 'Fuente de Agua Inteligente', price: 'S/ 120.00', reviews: 128, img: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=150&q=80'},
              {name: 'Collar LED para Mascotas', price: 'S/ 45.00', reviews: 95, img: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?auto=format&fit=crop&w=150&q=80'},
              {name: 'Champú Premium para Perros', price: 'S/ 35.00', reviews: 72, img: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=150&q=80'},
              {name: 'Bola Interactiva de Premios', price: 'S/ 49.90', reviews: 64, img: 'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?auto=format&fit=crop&w=150&q=80'},
              {name: 'Cama Acogedora', price: 'S/ 85.00', reviews: 89, img: 'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=150&q=80'}
            ].map((product, i) => (
              <div className="product-card-small" key={i}>
                <img src={product.img} alt={product.name} className="product-img-small" style={{objectFit: 'cover', borderRadius: '8px'}} />
                <div className="product-info-small">
                  <h4>{product.name}</h4>
                  <div className="price">{product.price}</div>
                  <div className="rating">
                    {'★★★★★'} ({product.reviews})
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banners */}
      <section className="banners">
        <div className="container">
          <div className="banners-grid">
            <div className="banner-card banner-blue">
              <div className="banner-content">
                <div className="banner-subtitle" style={{color: '#ef4444'}}>HASTA 50% DSCTO</div>
                <h2 className="banner-title">Comida y Accesorios</h2>
                <p style={{marginBottom: '16px', color: '#64748b'}}>Todo para tu mascota.</p>
                <button className="btn-small">Comprar Ahora</button>
              </div>
              <img src="/images/dog_food.jpg" alt="Comida de Perro" style={{width: '60%', height: '120%'}}/>
            </div>
            
            <div className="banner-card banner-teal">
              <div className="banner-content">
                <div className="banner-subtitle">ENVÍO GRATIS</div>
                <h2 className="banner-title" style={{color: 'white', fontSize: '48px'}}>30%</h2>
                <h3 style={{fontSize: '24px', marginBottom: '16px'}}>de Descuento</h3>
                <button className="btn-small" style={{backgroundColor: 'var(--primary)'}}>Comprar Ahora</button>
              </div>
              <img src="/images/teal_dog.jpg" alt="Perro" style={{width: '70%', height: 'auto', bottom: 0, borderRadius: '50%'}}/>
            </div>
            
            <div className="banner-card banner-yellow">
              <div className="banner-content">
                <h2 className="banner-title">Comida Premium para Aves</h2>
                <p style={{marginBottom: '16px', color: '#14b8a6', fontWeight: 600}}>Alta Nutrición<br/>para Aves Felices</p>
              </div>
              <img src="/images/bird_food.jpg" alt="Comida de Aves" style={{width: '70%', height: '120%'}}/>
            </div>
          </div>
          
          <div className="banners-grid-2">
            <div className="banner-card banner-orange">
              <div className="banner-content">
                <h3 style={{fontSize: '20px'}}>Artículos para Perros</h3>
                <h2 className="banner-title" style={{fontSize: '48px', color: 'white'}}>25%<span style={{fontSize: '20px'}}>DSCTO</span></h2>
                <p style={{marginBottom: '16px'}}>¡Tu Mascota Merece lo Mejor!</p>
                <button className="btn-small dark">Llama para Pedir<br/>(877) 834-1434</button>
              </div>
              <img src="/images/dog_supplies.jpg" alt="Artículos para Perros" style={{width: '65%', height: '120%'}}/>
            </div>
            
            <div className="banner-card banner-purple">
              <div className="banner-content">
                <div className="banner-subtitle">REGALO PARA MASCOTAS</div>
                <h2 className="banner-title" style={{color: 'white'}}>Comida Premium para Gatos</h2>
                <p style={{marginBottom: '16px', fontSize: '20px', fontWeight: 'bold'}}>Ahorra <span style={{color: '#fbbf24'}}>30%</span></p>
                <button className="btn-small white">Comprar Ahora</button>
              </div>
              <img src="/images/cat_food.jpg" alt="Comida de Gato" style={{width: '60%', height: '120%'}}/>
            </div>
          </div>
        </div>
      </section>

      {/* Spring Collection */}
      <section className="spring-collection">
        <div className="container">
          <div className="section-title-normal">
            Colección de Primavera <Cat />
            <div style={{marginLeft: 'auto', display: 'flex', gap: '8px'}}>
              <button style={{width: '40px', height: '40px', borderRadius: '50%', border: '1px solid var(--border)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><ChevronLeft /></button>
              <button style={{width: '40px', height: '40px', borderRadius: '50%', border: '1px solid var(--border)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><ChevronRight /></button>
            </div>
          </div>
          
          <div className="products-grid">
            {[
              {name: 'Comida de Gato Kitzy Salmón', price: 'S/ 89.90', reviews: 128, img: '/images/product_cat_salmon.jpg'},
              {name: 'Dieta Científica Hill\'s', price: 'S/ 115.00', reviews: 95, img: '/images/product_dog_diet.jpg'},
              {name: 'Comida para Gatos Nulo', price: 'S/ 135.00', reviews: 64, img: '/images/product_cat_indoor.jpg'},
              {name: 'Bocados Calmantes Zesty Paws', price: 'S/ 95.00', reviews: 72, img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=400&q=80'}
            ].map((product, i) => (
              <div className="product-card" key={i}>
                <img src={product.img} alt={product.name} className="product-img" />
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <div className="rating">
                    <span style={{color: 'var(--secondary)'}}>★★★★★</span> <span style={{color: 'var(--text-gray)', fontSize: '14px'}}>({product.reviews})</span>
                  </div>
                  <div className="product-bottom">
                    <span className="product-price">{product.price}</span>
                    <button className="btn-cart">
                      <ShoppingCart size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Features */}
      <div className="footer-features">
        <div className="container">
          <div className="footer-feature">
            <div className="ff-icon"><ShieldCheck /></div>
            <div className="ff-text">
              <h4>Aprobado por Veterinarios</h4>
              <p>Confiado por profesionales</p>
            </div>
          </div>
          <div className="footer-feature">
            <div className="ff-icon"><Award /></div>
            <div className="ff-text">
              <h4>Calidad Premium</h4>
              <p>Productos seleccionados</p>
            </div>
          </div>
          <div className="footer-feature">
            <div className="ff-icon"><Smile /></div>
            <div className="ff-text">
              <h4>Mascotas Felices</h4>
              <p>Nuestra principal prioridad</p>
            </div>
          </div>
          <div className="footer-feature">
            <div className="ff-icon"><Gift /></div>
            <div className="ff-text">
              <h4>Recompensas</h4>
              <p>Gana puntos y ahorra</p>
            </div>
          </div>
          <div className="footer-feature">
            <div className="ff-icon"><Phone /></div>
            <div className="ff-text">
              <h4>Soporte 24/7</h4>
              <p>Estamos aquí para ti</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="main-footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="footer-logo">
                <Dog size={32} color="var(--primary)" />
                <span>Ziggy</span>
              </div>
              <p>
                Ofrecemos la mejor comida natural y accesorios para asegurar que tu amigo peludo tenga una vida feliz y saludable. Todo lo que tu mascota necesita en un solo lugar.
              </p>
              <div className="social-icons">
                <a href="#" className="social-icon"><FaFacebook size={18} /></a>
                <a href="#" className="social-icon"><FaTwitter size={18} /></a>
                <a href="#" className="social-icon"><FaInstagram size={18} /></a>
                <a href="#" className="social-icon"><FaYoutube size={18} /></a>
              </div>
            </div>

            <div className="footer-col">
              <h4>Enlaces Rápidos</h4>
              <ul className="footer-links">
                <li>Inicio</li>
                <li>Acerca de Nosotros</li>
                <li>Nuestra Tienda</li>
                <li>Últimas Noticias</li>
                <li>Contacto</li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Atención al Cliente</h4>
              <ul className="footer-links">
                <li>Preguntas Frecuentes</li>
                <li>Rastrear Pedido</li>
                <li>Envíos y Entregas</li>
                <li>Política de Devolución</li>
                <li>Términos y Condiciones</li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Horario de Atención</h4>
              <ul className="footer-links" style={{cursor: 'default'}}>
                <li style={{cursor: 'default'}}>Lunes - Viernes: 8am - 8pm</li>
                <li style={{cursor: 'default'}}>Sábado: 9am - 6pm</li>
                <li style={{cursor: 'default'}}>Domingo: 9am - 4pm</li>
                <li style={{marginTop: '12px', color: 'white', fontWeight: 'bold'}}>Teléfono: (877) 834-1434</li>
                <li>Email: info@ziggypet.com</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Ziggy Pet Store. Todos los derechos reservados.</p>
            <div className="payment-methods">
              <span className="payment-icon">VISA</span>
              <span className="payment-icon">MasterCard</span>
              <span className="payment-icon">PayPal</span>
              <span className="payment-icon">Amex</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
