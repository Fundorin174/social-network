import React, { useEffect } from 'react';
import classes from './NavBarFrends.module.css';
import Frend from './frend/Frend';




const NavbarFriends = React.memo((props) => {

  useEffect(() => {
    let savedFrends = JSON.parse(localStorage.getItem('frends'));
    savedFrends && props.setFrends(savedFrends);

    return () => {
      props.frends[0] && localStorage.setItem('frends', JSON.stringify(props.frends));  
    };
  }, [])

    const deleteFromFrends = (frendID) => {
        let frend = props
            .frends
            .filter(frend => frend.id === frendID);
        props.deleteFromFrends(frend[0]);
        props.fromFriends(frendID) //change button on users page
    }
    
    let allFriends = props.frends[0] ? props
        .frends
        .map(
            frend => <Frend
                key={frend.id}
                id={frend.id}
                name={frend.name}
                photo={frend.photos.small}
                urlAIGeneratedImage={props.urlAIGeneratedImage}
                deleteFromFrends={deleteFromFrends}/>
        ) : null;
    return (
        <div className={classes.frends_wrapper}>
            <div className={classes.title}>Друзья</div>
            <div className={classes.frends_items}>

                {allFriends}

            </div>
        </div>

    );
})

export default NavbarFriends;