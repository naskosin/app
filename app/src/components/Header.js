import styles from './header.module.css'; 


const Header =()=>{
    return (<header className={styles.header}>
    <h1>The biggest catches</h1>
    <p ></p>
    <nav  id="{{styles.not__logged}}">
      <ul>
        <li>
          <a routerLink="/home">Home</a>
        </li>
  
        <li><a routerLink="user/register">Register</a></li>
        <li>
          <a routerLink="user/login">Login</a>
        </li>
        <li>
          <a routerLink="/gallery">Gallery</a>
        </li>
  
        <li>
          <a routerLink="/gallery/catch/topFive">Top 5</a>
        </li>
      </ul>
    </nav>
  

      <nav class="isLogged">
        <ul>
          <li>
            <a routerLink="/home">Home</a>
          </li>
          <li>
            <a routerLink="/gallery">Gallery</a>
          </li>
          <li>
            <a routerLink="/gallery/catch/create">Create catch</a>
          </li>
          <li>
            <a >Logout </a>
          </li>
          <li>
            <a routerLink="/gallery/catch/topFive">Top 5</a>
          </li>
          <li><a routerLink="search">Search</a></li>
          <li>
            <a routerLink="user/mycatches">My catches</a>
          </li>
        </ul>
        
  
      </nav>
    <p className="notification"> </p>
  </header>
  )
};
export default Header;