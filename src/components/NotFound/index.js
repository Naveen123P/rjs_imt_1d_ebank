import './index.css'

const NotFound = () => (
  <div className="not-found-bg">
    <img
      src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png"
      alt="not found"
      className="not-found-img"
    />
    <h1 className="heading">Page Not Found</h1>
    <p className="para">
      We are Sorry, the page you requested could not be found
    </p>
  </div>
)

export default NotFound
