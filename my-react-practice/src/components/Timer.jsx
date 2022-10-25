import { format } from 'date-fns';

const Timer = ({calcFinish, calcStart, isClicked}) => {
  const breadReady = () => {
    format({calcFinish}, 'yyyy-dd-MM HH:mm')
  }
  const youStart = () => {
    format({calcStart},'yyyy-dd-MM HH:mm')
  }
  return (
    <>
     <p>{isClicked?  `Bread ready to eat at ${breadReady}` : ''}</p> 
     <p>{isClicked ?  `You start your first proces at  ${youStart}` : ''}</p>
    </>
  )
}

export default Timer