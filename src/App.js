import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Columns from "./Columns";
import Create from "./Create";

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

    const createCards = (newTitle, newStatus, newDescription, newPriority) => {
        // const newCard = {
        //     title: newTitle,
        //     status: newStatus,
        //     description: newDescription,
        //     priority: newPriority
        // }
        return axios.post('http://localhost:5000/cards', newCard)
            .then(res => {
                getCards();
            })
            .catch( err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getCards()
    }, [])

    return (
        <div className='container'>

            <Create createCards={createCards}/>

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
