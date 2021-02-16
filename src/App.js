import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Columns from "./Columns";

function App() {
    const initColumns = [
        {id: Math.random(), title: 'ToDo', status: 'todo'},
        {id: Math.random(), title: 'In Progress', status: 'progress'},
        {id: Math.random(), title: 'Review', status: 'review'},
        {id: Math.random(), title: 'Done', status: 'done'}
    ]

    const [cards, setCards] = useState([]);
    const [columns, setColumns] = useState(initColumns);

    const getCards = () => {
        return axios.get('http://localhost:5000/cards')
            .then(res => {
                setCards(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getCards()
    }, [])

    return (
        <div className='container'>

            <button onClick={() => getCards()}>Get cards</button>

            <div className='row'>
                {columns.map(el =>
                    <Columns
                        key={el.id}
                        columns={el}
                        cards={cards}
                    />)}
            </div>

        </div>
    );
}

export default App;
