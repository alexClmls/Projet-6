import { useParams } from 'react-router-dom'

function Rental() {
  const { rental } = useParams()

  return (
    <div>
      <h1>Locations</h1>
      <h2>Location n°{rental}</h2>
    </div>
  )
}

export default Rental