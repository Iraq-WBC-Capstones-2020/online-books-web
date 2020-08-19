import React from 'react';
import audioBook from './audioBook.mp3';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import '../../pages/AudioPage/style.scss';

const AudioPlayerPage = () => {
  const audio = audioBook;
  return (
    <AudioPlayer
      src={audio}
      className="height-200"
      customVolumeControls={[]}
      customAdditionalControls={[]}
      showFilledProgress={false}
    />
  );
};

export default AudioPlayerPage;
