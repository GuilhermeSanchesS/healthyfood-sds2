import './styles.css';
import { ReactComponent as MainImagem } from './Imagem.svg';
function Home(){
    return (
        <div className="home-container">
          <div className="home-content">
            <div className="home-actions">
                <h1 className="home-title">
                    Faça seu pedido <br /> que entergamos <br /> para você!!!
                </h1>
                <h3 className="home-subtitle">
                Escolha o seu pedido e em poucos minutos<br /> levaremoss na sua porta
                </h3>
                <a href="orders" className="home-btn-order">
                    FAZER PEDIDO
                </a>
            </div>
            <div className="home-image">
                <MainImagem />
            </div>
          </div>  
        </div>
    )
}

export default Home;