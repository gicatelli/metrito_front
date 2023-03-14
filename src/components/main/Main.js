import logo from '../../assets/logo.jpeg';
import './Main.css'

const Main = () => {
    return (
        <main>
            <div className='main__container'>
                <div className='main__title'>
                    <img src={logo} alt="hello" />
                    <div className='main__greeting'>
                        <h1>Olá, Matheus!</h1>
                        <p>Bem vindo ao seu Dashboard</p>
                    </div>
                </div>

                <div className='main__cards'>
                    <div className='card'>
                        <i className='fa fa-file-text fa-2x text-lightblue'></i>
                        <div className='card_inner'>
                            <p className='text-primary-p'>Número de vendas</p>
                            <span className='font-bold text-title'>578</span>
                        </div>
                    </div>

                    <div className='card'>
                        <i className='fa fa-money fa-2x text-red'></i>
                        <div className='card_inner'>
                            <p className='text-primary-p'>Pagamentos</p>
                            <span className='font-bold text-title'>R$2.467</span>
                        </div>
                    </div>

                    <div className='card'>
                        <i className='fa fa-archive fa-2x text-yellow'></i>
                        <div className='card_inner'>
                            <p className='text-primary-p'>Número de produtos</p>
                            <span className='font-bold text-title'>670</span>
                        </div>
                    </div>

                    <div className='card'>
                        <i className='fa fa-bars fa-2x text-green'></i>
                        <div className='card_inner'>
                            <p className='text-primary-p'>Categorias</p>
                            <span className='font-bold text-title'>40</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;