import React, { createRef, useCallback, useState } from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactAudioPlayer from '../../dist/bundle';
import '../css/style.css';

const App = () => {
  const player = createRef(null);

  const [time, setTime] = useState(0);

  const currentPlayerTag = player.current?.audioEl?.current;

  useEffect(() => {
    player.current?.audioEl?.current.play();
  });

  const onPlay = useCallback(() => {
    player.current.audioEl.current.play();
  }, []);

  const onStop = useCallback(() => {
    player.current.audioEl.current.pause();
  }, []);

  const playFrom = (time) => () => {
    console.log(
      'PLAY FROM, play...',
      time,
      player.current?.audioEl?.current.play
    );
    setTime(time);
    player.current?.audioEl?.current.play();
  };

  return (
    <>
      <ReactAudioPlayer
        src="/files/1.mp3"
        controls
        currentTime={time}
        autoPlay={true}
        ref={player}
      />
      <button onClick={onPlay}>Play</button>
      <button onClick={onStop}>Stop</button>
      <ul>
        <li className="pointer">
          <button onClick={playFrom(100)}>Play from 100 ms</button>
        </li>
        <li className="pointer">
          <button onClick={playFrom(200)}>Play from 200 ms</button>
        </li>
      </ul>
    </>
  );
};

ReactDOM.render(<App />, document.querySelector('.app'));
