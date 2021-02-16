import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';


export default function Create(props) {

    const [isModal, setIsModal] = useState(false)
    const [newTitle, setNewTitle] = useState('')
    const [newStatus, setNewStatus] = useState('todo')
    const [newDescription, setNewDescription] = useState('')
    const [newPriority, setNewPriority] = useState(1)

    const createCardHandler = () => {
        props.createCards(newTitle)
    }


    return (
        <div>

            <button onClick={() => setIsModal(!isModal)}>Create</button>
            {isModal &&
            <div className="modal">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-body">
                            <label>Title</label>
                            <input  type="text" placeholder='Title' value={newTitle}
                                   onChange={(event) => setNewTitle(event.target.value)}/>
                            <label>Status</label>
                            <input type="select"
                                   onChange={(event) => setNewStatus(event.target.value)}>
                                <option value='todo'>To do</option>
                                <option value='in progress'>In progress</option>
                                <option value='review'>Review</option>
                                <option value='done'>Done</option>
                            </input>
                        <label>Description</label>
                        <input type="text" placeholder="Description" value={newDescription}
                               onChange={(event) => setNewDescription(event.target.value)}/>
                        <label>Priority</label>
                        <input type="select"
                               onChange={(event) => setNewPriority(event.target.value)}>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                            <option value='7'>7</option>
                            <option value='8'>8</option>
                            <option value='9'>9</option>
                            <option value='10'>10</option>
                        </input>
                        </div>
                        <div className="modal-footer">
                <button type="submit" className="btn btn-primary">Create</button>
                <button type="submit" className="btn btn-secondary">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
            }

        </div>

    )
}