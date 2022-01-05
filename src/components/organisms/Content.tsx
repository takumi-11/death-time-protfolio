import React, { useState, useEffect } from 'react'
import RegisterModal from './Modal'
import Button from '../atom/Button'
import Countdown from 'react-countdown'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { collection, addDoc, onSnapshot, getDocs, doc, deleteDoc, query, where } from 'firebase/firestore'
import db from '../../firebase'
import { timeGet } from '../../utils'

const Content = () => {
    const [openModal, setOpenModal] = useState(false)
    const [birthday1, setBirthday1] = useState(String)
    const [birthday2, setBirthday2] = useState(String)
    const [birthday3, setBirthday3] = useState(String)
    const [gender, setGender] = useState(String)
    const [name, setName] = useState(String)
    const [cards, setCards] = useState([])

    useEffect(
        () => 
            onSnapshot(collection(db, 'times'), (snapshot: any) => 
                setCards(snapshot.docs.map((doc: any) => ({ ...doc.data(), id: doc.id })))
            ),
        []
    )

    const addCard = async () => {
        const live = timeGet({gender, birthday1, birthday2, birthday3, name})

        const collectionRef = collection(db, 'times')
        const payload = { name: name, lifeSpan: live }
        await addDoc(collectionRef, payload)
        setOpenModal(!openModal)
    }

    const handleSubmit = () => {
        setOpenModal(!openModal)
    }

    const deleteClick = async (id: any) => {
        const docRef = doc(db, 'times', id)
        await deleteDoc(docRef)
    }

    return (
        <div className='flex justify-center items-center flex-wrap'>
            {cards.map((card: any) => {
                return (
                    <div className="m-2 p-10 rounded-lg w-96 h-40 shadow-lg border-2 bg-white" key={card.id}>
                        <div className='flex justify-between'>
                            <p>{card.name}</p>
                            <button onClick={() => deleteClick(card.id)}>
                                <DeleteOutlineIcon />
                            </button>
                        </div>
                        <Countdown className='flex justify-center m-4 text-3xl' date={Date.now() + (card.lifeSpan)} />
                    </div>
                )
            })}
            <Button onClick={handleSubmit} />
            <RegisterModal
                openModal={openModal}
                onClick={handleSubmit}
                setBirthday1={setBirthday1}
                setBirthday2={setBirthday2}
                setBirthday3={setBirthday3}
                setGender={setGender}
                setName={setName}
                addCard={addCard}
            />
        </div>
    )
}

export default Content