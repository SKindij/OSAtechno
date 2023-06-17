
import {Link} from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}}>Page doesn't exist</p>
      <Link style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px'}} to="/">Back to main page</Link>
    </div>
  )
}

export default NotFoundPage;