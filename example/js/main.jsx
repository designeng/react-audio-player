import React, { createRef, useCallback } from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactAudioPlayer from '../../dist/bundle';

const App = () => {
  const player = createRef(null);

  useEffect(() => {
    player.current?.audioEl?.current.play();
  });

  const onPlay = useCallback(() => {
    player.current.audioEl.current.play();
  }, []);

  const onStop = useCallback(() => {
    player.current.audioEl.current.pause();
  }, []);

  return (
    <>
      <ReactAudioPlayer
        src="/files/1.mp3"
        controls
        currentTime={100}
        autoPlay={true}
        ref={player}
      />
      <button onClick={onPlay}>Play</button>
      <button onClick={onStop}>Stop</button>
    </>
  );
};

ReactDOM.render(<App />, document.querySelector('.app'));
