import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {  FiPlus, FiMinus} from 'react-icons/fi';

import './styles.css';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className="shap">
        <div className="top">
          <img src="" alt="" />
          <h4>Titulo do lanche</h4>
          <h5>Descrição bunitinha</h5>
          <p>Preço</p>
        </div>
        <div className="middle"></div>
        <div className="bottom">
          <form className="bottomForm" action="">
            <button className="plusButton" onClick={() => { alert('alo') }} type="button">
              <FiMinus size={20} color="#e02041" />
            </button>
            <p className="counterB"></p>
            <p className="counterN">0</p>
            <button className="plusButton" onClick={() => { alert('alo') }} type="button">
              <FiPlus size={20} color="#e02041" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={()=>{handleOpen}}>
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}