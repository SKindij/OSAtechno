import {Link} from 'react-router-dom';
import img from '../../resources/commonImages/error.gif';

const ErrorMessage = () => {
  return (
    <img 
      style={{ display: 'block', width: "250px", height: "250px",objectFit: 'contain', margin: "0 auto"}}
      src={img} alt="Error"/>
  )
}


const NotFoundPage = () => {
  return (
    <div>
      <ErrorMessage/>
      <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}}>Page doesn't exist</p>
      <Link style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px'}} to="/">Back to main page</Link>
    </div>
  )
}

export default NotFoundPage;