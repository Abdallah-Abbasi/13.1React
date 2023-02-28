import {useState, UseEffect, useEffect} from 'react'
const FavoriteColor = () => {
    const [FavoriteColor, setfavoritrColor] = useState('blue')
    useEffect(()=> {
        const timeid = setTimeout(()=> {
            setfavoritrColor('Purple')},
            1000)
            return (() => clearTimeout(timeid))
    }, [])
    return (
        <div>
        <h1>My favortie Color is {FavoriteColor}</h1>
        </div>
    )
}
export default FavoriteColor