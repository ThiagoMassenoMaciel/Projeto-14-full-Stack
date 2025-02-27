import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePause,
  faCirclePlay,
  faBackwardStep,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60)
    .toString()
    .padStart(2, "0"); // sempre 2 caracteres, se tiver só um preenche com o zero a esquerda , se tiver nenhum caractere preenche 00
  const seconds = Math.floor(timeInSeconds - minutes * 60)
    .toString()
    .padStart(2, "0");

  return `${minutes}:${seconds}`;
};

const timeInSeconds = (time) => {
  const splitArray = time.split(":");
  const minutes = Number(splitArray[0]) * 60;
  const seconds = Number(splitArray[1]) + minutes;

  return seconds;
};

// Estou recenbendo pelo parametros dois numeros , cada numero se refere ao indice da
// array (que contem todas as musicas deste especifico artista)
// cada numero serve para indicar qual a musica vai ser carregada depois que for clicado no botao Forward ou Backward
const Player = ({ random, random2, duration, audio }) => {
  const audioPlayer = useRef(); // coloca o elemento referenciado dentro da chave current dentro de um objeto que esta dentro dessa variavel
  //console.log(audio)
  //console.log(audioPlayer.current) // acessando diretamente aquele elemento que o useRef faz referência

  const progressBar = useRef();

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(formatTime(0));

  const durationInSeconds = timeInSeconds(duration);

  console.log(durationInSeconds);

  const playPause = () => {
    isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();
    setIsPlaying(!isPlaying); // depois de qualquer toque é trocado o valor boleano

    console.log(formatTime(audioPlayer.current.currentTime));
  };

  // este useEffect eu consegui digitando useeffectSnnipet
  // o return dentro do useEffect vai executar quando este componente for desmontado
  // first = o que ele vai fazer é colocar um contador de um em 1 segunto mudar variavel de estado react
  // second é o que ele vai limpar é este contador quando este componente for desmontado
  // third é aquela variavel que vai motivar uma nova execução do useEffect executar denovo effect quando variavel estado isPlaying mudar

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isPlaying) { // so vai incrementar os segundos enquanto musica tiver tocando
        // n executar depois de ter clicado no pause
        setCurrentTime(formatTime(audioPlayer.current.currentTime));

        progressBar.current.style.setProperty(
          "--_progress",
          (audioPlayer.current.currentTime / durationInSeconds) * 100 + "%"
        );
      }
    }, 1000);

    return () => {
      clearInterval(intervalId); // toda vez que este componente for desmontado vai executar isso pois tem que parar o setInterval
    };
  }, [isPlaying]); // motivo para executar useEffect de novo sera quando variavel de estado mudar, so quero executar este useEffect quando musica tocar
  //quando a musica tiver parada n quero que execute esse hook effect

  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${random}`}>
          <FontAwesomeIcon className="player__icon " icon={faBackwardStep} />
        </Link>

        <FontAwesomeIcon
          className="player__icon player__icon--play "
          icon={isPlaying ? faCirclePause : faCirclePlay}
          onClick={() => {
            playPause();
          }}
        />

        <Link to={`/song/${random2}`}>
          <FontAwesomeIcon className="player__icon " icon={faForwardStep} />
        </Link>
      </div>

      <div className="player__progress">
        <p>{currentTime}</p>
        <div className="player__bar">
          <div ref={progressBar} className="player__bar-progress"></div>
        </div>
        <p>{duration}</p>
      </div>

      <audio ref={audioPlayer} src={audio}></audio>
    </div>
  );
};

export default Player;
