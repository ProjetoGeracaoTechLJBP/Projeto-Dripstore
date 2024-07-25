import { Link } from "react-router-dom"
import logoCollege from "../../assets/Logo-Digital.png"
import "./HeaderLoginCadastro.css"
function HeaderLoginCadastro() {
    return(
      <header className="HeaderLoginCadastro">´
            <Link to="/"><img src={logoCollege} alt=""/></Link>
            
      </header>  
      
    )
}

export default HeaderLoginCadastro