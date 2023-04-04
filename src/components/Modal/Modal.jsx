import React, {useState} from 'react';
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
const Modal = ({ setIsOpen }) => {
    const [popupcontent, setpopupcontent] = useState([]);
    const changecontent=(project)=>{
        setpopupcontent([project]);
    }
    return (
        <>
            <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
            {popupcontent.map((pop)=>{
                return(

                    // <div className="card"  key={pop.id}>
                    //     <button className="close-modal">x</button>
                    //     <h1>{pop.title}</h1>
                    //     <p>
                    //         {pop.description}
                    //     </p>
                    //     <img src={pop.details}/>
                    // </div>

                    // <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
                    <div className="centered">
                        <div className="modal">
                            <div className="modalHeader">
                                <h5 className="heading">{pop.title}</h5>
                            </div>
                            <button className="closeBtn" onClick={() => setIsOpen(false)}>
                                <RiCloseLine style={{ marginBottom: "-3px" }} />
                            </button>
                            <div className="modalContent">
                                {pop.description}
                            </div>
                            <div className="modalActions">
                                <div className="actionsContainer">
                                    <button
                                        className="cancelBtn"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    );
};

export default Modal;