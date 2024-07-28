import * as Speech from 'expo-speech'

interface SpeechOptions {
    language: string
    pitch: number
    rate: number
    voice: string
}

type SpeechOptionsWithoutVoice = Omit<SpeechOptions, 'voice'>

const speechOptionsWithoutVoice: SpeechOptionsWithoutVoice = {
    language: 'es-MX',
    pitch: 0.9,
    rate: 0.8,
}

const getSpeechOptions = async (): Promise<
    SpeechOptions | SpeechOptionsWithoutVoice
> => {
    const voice =
        (await Speech.getAvailableVoicesAsync()).find(
            (voice) => voice.identifier === 'es-es-x-eef-local'
        ).identifier ?? ''
    if (!voice) return speechOptionsWithoutVoice
    return {
        ...speechOptionsWithoutVoice,
        voice: voice,
    }
}

export const speakParagraph = async ({ parrafos }) => {
    parrafos.forEach(async (parrafo) => {
        const paragraph = parrafo.texto.join('.')
        Speech.speak(paragraph, await getSpeechOptions())
    })
}
