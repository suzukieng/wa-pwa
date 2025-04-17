import './style.css'
import {initPWA} from './pwa.ts'

initPWA(document.body);

function getBeepData(): ArrayBuffer {
    const beepBase64 = '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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+5LA/4AAAAEsAAAAAAAAJYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//uSwP+AAAABLAAAAAAAACWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7ksD/gAAAASwAAAAAAAAlgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=';
    const beepBinary = atob(beepBase64);
    const bytes = new Uint8Array(beepBinary.length);
    for (let i = 0; i < beepBinary.length; i++) {
        bytes[i] = beepBinary.charCodeAt(i);
    }
    return bytes.buffer;
}

let _audioCtx: AudioContext | undefined = undefined;
let _beepBuffer: AudioBuffer | undefined = undefined;


async function ensureAudioContext() {
    if (!_audioCtx) {
        _audioCtx = new AudioContext({latencyHint: 'interactive'});
        _audioCtx.addEventListener('statechange', () => {
            console.log(`AudioContext state is now: ${_audioCtx?.state}`);
        });
    }
    return _audioCtx;
}

async function getBeepBuffer(audioCtx: AudioContext): Promise<AudioBuffer | undefined> {
    if (_beepBuffer === undefined) {
        try {
            _beepBuffer = await audioCtx.decodeAudioData(getBeepData());
        } catch (e) {
            alert('MP3 decoding failed: ' + e);
        }
    }
    return _beepBuffer;
}

async function doBeep() {
    const audioCtx = await ensureAudioContext();
    console.log(`Audio context state is: ${audioCtx}`);

    const audioCtxStateLabel = document.getElementById('audio-ctx-state');
    if (audioCtxStateLabel) {
        audioCtxStateLabel.innerHTML = audioCtx.state;
    }
    const bufferSource = audioCtx.createBufferSource();
    const audioBuffer = await getBeepBuffer(audioCtx);
    if (audioBuffer) {
        bufferSource.buffer = audioBuffer;
        bufferSource.connect(audioCtx.destination);
        bufferSource.start();
    } else {
        alert(`No audio buffer`);
    }
}

document.addEventListener('visibilitychange', () => {
    if (document.visibilityState !== 'hidden') {
        setTimeout(() => {
            console.log(`Resuming audio context after document visibility state: ${document.visibilityState}`);
            _audioCtx?.resume();
        }, 100);
    }
}, false);

document.getElementById('beep-button')?.addEventListener('click', () => doBeep());
