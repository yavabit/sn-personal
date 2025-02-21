import React, { memo, useEffect, useRef, useState } from 'react';
import { Slider } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import { Stack } from '@mui/material';
import { AudioObject } from '../../../shared/types/audio';
import "./Audio.scss"

interface AudioProps {
	items: AudioObject[]
}

export const Audio = memo(({ items }: AudioProps) => {
	const [playingTrack, setPlayingTrack] = useState<number | null>(null);
    const [volume, setVolume] = useState(100);
    const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);
    const [trackStates, setTrackStates] = useState(
        items.map(() => ({ currentTime: 0, duration: 0 }))
    );

    useEffect(() => {
        audioRefs.current = items.map((_, i) => audioRefs.current[i] || React.createRef<HTMLAudioElement>().current);
    }, [items]);

    const handlePlay = (index: number) => {
        if (playingTrack !== null && playingTrack !== index) {
            audioRefs.current[playingTrack]?.pause();
        }
        audioRefs.current[index]?.play();
        setPlayingTrack(index);
    };

    const handlePause = (index: number) => {
        audioRefs.current[index]?.pause();
        setPlayingTrack(null);
    };

    const handleTimeUpdate = (index: number) => {
        if (audioRefs.current[index]) {
            const currentTime = audioRefs.current[index].currentTime;
            const duration = audioRefs.current[index].duration;
            setTrackStates(prevStates => {
                const newStates = [...prevStates];
                newStates[index] = { currentTime, duration };
                return newStates;
            });
        }
    };

    const handleVolumeChange = (_: Event, newValue: number | number[]) => {
        const volumeValue = Number(newValue);
        setVolume(volumeValue);
        audioRefs.current.forEach(audio => {
            if (audio) {
                audio.volume = volumeValue / 100;
            }
        });
    };

    const handleSeek = (index: number, _: Event, newValue: number | number[]) => {
        if (audioRefs.current[index]) {
            audioRefs.current[index].currentTime = Number(newValue);
        }
    };

	const formatTime = (value: number) => {
		const minutes = Math.floor(value / 60);
		const seconds = Math.floor(value % 60);
		return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
	};

    return (
        items.length > 0 && 
        <div className='audio-items'>
            {items.map((track, index) => (
                <div key={index} className="audio-item">
                    <audio
                        ref={el => audioRefs.current[index] = el}
                        src={track.src}
                        onTimeUpdate={() => handleTimeUpdate(index)}
                    />
                    <div className="track-info">
                        <div className="track-control__button">
                            {playingTrack === index ? (
                                <PauseCircleIcon onClick={() => handlePause(index)} fontSize="large" style={{ cursor: "pointer" }} />
                            ) : (
                                <PlayCircleIcon onClick={() => handlePlay(index)} fontSize="large" style={{ cursor: "pointer" }} />
                            )}
                        </div>
                        <div className="track-info__descr">
                            <div>{track.name}</div>
                            <div>{track.artist}</div>
                        </div>
                    </div>
                    <div className="track-control">
                        <Slider
                            size="small"
                            value={trackStates[index].currentTime}
                            aria-label="Small"
                            valueLabelDisplay={"auto"}
							valueLabelFormat={formatTime}
                            onChange={(event, newValue) => handleSeek(index, event, newValue)}
                            min={0}
                            max={trackStates[index].duration}
                            step={0.01}
                        />
                    </div>
                    <Stack className="track-volume" spacing={2} direction="row" sx={{ alignItems: 'center' }}>
                        <VolumeDown />
                        <Slider 
                            size="small"
                            aria-label="Volume" 
                            value={volume} 
                            onChange={handleVolumeChange} 
                            valueLabelDisplay={"auto"} 
                        />
                        <VolumeUp />
                    </Stack>
                </div>
            ))}
        </div>
    );
});