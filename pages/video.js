import { useEffect, useRef, useState } from 'react';
let stream;

export default function WebcamStream() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);


  const startVideoStream = async () => {
    stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.current.srcObject = stream;
    await videoRef.current.play();
    setIsPlaying(true);
  };

  const stopVideoStream = () => {
      console.log(stream);
      if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    startVideoStream();

    // Função de limpeza
    return () => {
      stopVideoStream();
    };
  }, []);

  const handleToggleVideo = () => {
    if (isPlaying) {
      stopVideoStream();
    } else {
      startVideoStream();
    }
  };

  return (
    <div>
      <h1>Webcam Stream</h1>
      <video ref={videoRef} autoPlay playsInline />
      <button onClick={handleToggleVideo}>{isPlaying ? 'Desligar' : 'Ligar'}</button>
    </div>
  );
}
