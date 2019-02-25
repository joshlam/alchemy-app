import Sound from 'react-native-sound';

let backgroundMusic;

export function playSound(file, extension = 'wav') {
  const sound = new Sound(
    `${file}.${extension}`,
    Sound.MAIN_BUNDLE,
    error => sound.play(() => sound.release())
  );
}

export function loopSound(file, extension = 'wav') {
  if (backgroundMusic) backgroundMusic.stop().release();

  backgroundMusic = new Sound(
    `${file}.${extension}`,
    Sound.MAIN_BUNDLE,
    error => backgroundMusic.setNumberOfLoops(-1).play()
  );
}
