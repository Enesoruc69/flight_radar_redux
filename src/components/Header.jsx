import { useSelector } from "react-redux"

const Header = () => {
  const {isLoading, error, flights} = useSelector (
    (store) => store.flightReducer
)
  return (
   <header>
    <div>
    <img src="img/plane-logo.png" alt="" />
    <h3>Flight Radar</h3>
    </div>
    <h3>
      {isLoading ? "Uçuşlar aranıyor" 
     :  error ? "Hata oluştu" 
     : `${flights.length} Uçuş Bulundu`}
       </h3>
   </header>
  )
}

export default Header