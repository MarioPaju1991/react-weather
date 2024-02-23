import { useStateContext } from '../Context'

const BackgroundLayout = () => {


  const  {weather} = useStateContext()

  console.log(weather)

  return (

    <div>BackgroundLayout</div>

  )

}


export default BackgroundLayout
