@import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Merienda&family=Permanent+Marker&family=Sansita&display=swap');

/* font-family: 'Gloria Hallelujah', cursive;
font-family: 'Lilita One', cursive;
font-family: 'Merienda', cursive;
font-family: 'Permanent Marker', cursive;
font-family: 'Sansita', sans-serif; */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body,
#message-container {
  font-family: 'Permanent Marker', cursive;
  color: white;
}

i {
  font-size: clamp(0.5rem, 0.8rem);
  color: #f11818;
}
.wrapper {
  font-family: 'Gloria Hallelujah', cursive;
}

.buttons-container,
.modal-window {
  color: black;
  font-family: 'Sansita', sans-serif;
  font-size: 1.5rem;
}

#cover-image img {
  width: 100%;
  height: 100vh;
}

.txt-holder {
  position: absolute;
  top: 0;
  text-align: center;
  color: black;

  font-size: clamp(2.5rem, 5rem, 5rem);
  transform: translate(5%, -20%);
}

.game-name {
  line-height: 6rem;
}

.txt-holder p {
  font-size: clamp(0.5rem, 1.5rem, 1.5rem);
  line-height: 2rem;
}
.txt-holder img {
  width: 25%;
  transform: translate(-100%, 150%);
}

#instructions {
  display: none;
  width: 40%;
  padding: 5px;
  margin: auto;
}

#instruction-btn {
  border: none;
  background-color: transparent;
  margin-top: 20px;
  font-size: clamp(0.8rem, 1.5rem, 2rem);
}

.instruction-wrapper {
  font-size: 1rem;
  font-family: 'Sansita', sans-serif;
}

#reveal-button {
  padding: 15px 25px;
  font-size: 24px;
  cursor: pointer;

  color: #fff;
  background-color: #d21616;
  border: none;
  border-radius: 50%;
  box-shadow: 0 9px 0 5px #999;
}

#content {
  display: none;
}

.green-board {
  top: 0;
  bottom: 0;
  position: fixed;
  z-index: -1;
}
.green-board img {
  width: clamp(50vw, 100vw, 100vw);
  height: clamp(100vh, 100%, 100vh);
}

#letters-container {
  position: absolute;
  bottom: 25%;
  width: 25%;
  text-align: center;
  transform: translate(160%, 35%);
}

#letters-container .buttons-container {
  height: clamp(2rem, 3vw, 2rem);
  width: clamp(1rem, 3vw, 2rem);
  border-radius: 0.3em;
}

#word-container {
  padding: 25px;
  font-size: clamp(1rem, 2.5vw, 2rem);
}

.exit-button > img {
  width: clamp(25px, 40px, 40px);
  height: auto;
}

.exit-button {
  background-color: transparent;
  border: none;
  border-radius: 50%;
  position: fixed;
  z-index: 1;
}

.exit-wrapper {
  display: flex;
  justify-content: right;
  margin: 1% 1% 0 0;
}

#reset-button > img {
  margin-top: 10px;
  width: clamp(30px, 10%, 10%);
}

/*  Modal style*/
.modal-window {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;

  width: 100%;
  height: 100%;

  background-image: url(images/wood-ui-modal-bkg.svg);
  background-repeat: no-repeat;
  background-size: 60vw;
  background-position-y: 25%;
  background-position-x: 25%;
  background-color: rgba(0, 0, 0, 0.782);

  font-family: 'Permanent Marker', cursive;
}

.modal-content {
  margin: 5% auto;
  padding-bottom: 20px;

  border: 1px solid #888;
  width: 50%;
  line-height: 50px;
  max-width: 20vw;
  text-align: center;
}

#modal-button {
  width: 100px;
  background: 30%;
}

#modal-button img:hover {
  filter: drop-shadow(0 0 0.75rem crimson);
  transition: all 100ms linear ease-in-out;
}

#modal-button img {
  width: 40vw;
  height: auto;
  box-sizing: none;
}

/* small device */
@media screen and (min-width: 320px) and (max-width: 720px) {
  #instruction-btn,
  .txt-holder p,
  #reveal-button {
    font-size: 1rem;
  }

  #letters-container {
    bottom: 40%;
    width: 30%;
    transform: translate(-120%, -50%);
  }

  #hangman-image {
    width: 100%;
    transform: translate(50%, 0%);
  }

  .txt-holder {
    font-size: 2rem;
    transform: translate(-15%, 50%);
  }

  .txt-holder img {
    width: 25%;
    transform: translate(0, 0);
  }
  .txt-holder p {
    line-height: 0;
  }

  #reveal-button {
    padding: 0.5rem 0.8rem;
  }
  .game-name {
    line-height: 5rem;
  }
  .instruction-wrapper {
    font-size: 0.6rem;
  }
}
/* laptops */
@media screen and (min-width: 721px) {
  #letters-container {
    bottom: 45%;
    width: 30%;
  }

  #hangman-image {
    width: 50%;

    transform: translate(-200%, 100%);
    background-color: hsl(0, 25%, 98%);
  }
  #letters-container {
    transform: translate(120%, 100%);
  }
}
