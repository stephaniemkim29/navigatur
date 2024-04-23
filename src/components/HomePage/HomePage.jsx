import LandbotChat from "../LandbotChat";
import style from "../HomePage/HomePage.module.css"
import FormComponent from '../HomePage/FormComponent'
const HomePage = () => {
    console.log('Home Page');
  
    return (
      <div className={style.HomePage}>
        <div className={style.queryContainer}>
            <FormComponent />
        </div>
        
        <LandbotChat />
      </div>
    );
  };
  

export default HomePage;
  