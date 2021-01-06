import TextCard from '../../components/textCard/textCard.js'

import './home.css';

function Home() {
    return (
        <div>
            <div className="container">
                <div>
                    <h1>React</h1>
                    <p>Uma biblioteca JavaScript para criar interfaces de usuário</p>
                </div>
                <div className="container-button">
                    <a>Comece a Usar</a>
                    <a>Faça o Tutorial {">"}</a>
                </div>
            </div>
            <TextCard></TextCard>
        </div>
    )
}

export default Home;