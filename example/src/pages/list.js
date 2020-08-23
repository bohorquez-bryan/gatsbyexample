import React, {useState, useEffect} from 'react'
//import getFirebase from '../utils/firebase'
import firebase from '../utils/firebase'


const useList = () =>{
    const [lists, setList] = useState([]) 
    useEffect(() => {
        const unsubscribe = firebase.firestore().collection("distributor")
        .onSnapshot(snapshot =>{
            const listItems = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
              }))
              setList(listItems)
              console.log(listItems)
        })      
        return () => unsubscribe
      }, [])
      return lists
}

const List = () =>{
    const lista = useList()
    return (
        <div>
            {lista.map(item => (
                <p key={item.id}>{item.name} {item.lastname}</p>
                

            ))}
        </div>
    )
}

export default List