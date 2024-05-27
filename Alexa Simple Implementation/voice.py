import speech_recognition as sr
import pyaudio
import pyttsx3
import pywhatkit
import datetime
import wikipedia
import pyjokes
import textwrap

import google.generativeai as genai

from IPython.display import display
from IPython.display import Markdown

#-----------------------------------------------------
#Tạo các biến để sử dụng, trong đó có
listener = sr.Recognizer()
p = pyaudio.PyAudio()
engine = pyttsx3.init()
voices = engine.getProperty('voices')
engine.setProperty('voice', voices[1].id)

#-----------------------------------------------------
# Iterate through all devices and take Mic_index
for i in range(p.get_device_count()):
    # Get the device info
    device_info = p.get_device_info_by_index(i)
    # Check if this device is a microphone (an input device)
    if device_info['maxInputChannels'] > 0 and device_info['hostApi']==0:
        print(f"Microphone: {device_info.get('name')} , Device Index: {device_info.get('index')}")
try:
    # Get microphone index input with error handling
    while True:
      mic_index_str = input("""\n---
note: Not any devices are usable
Which Microphone do you want to use, type in Device Index: """)
      try:
        mic_index = int(mic_index_str)
        break  # Exit the inner loop if input is a valid integer
      except ValueError:
            print("Invalid input. Please enter an integer for the microphone index.")
    # Create microphone object only if mic_index is valid
    mic = sr.Microphone(device_index=mic_index)
    print('Starting...')
except sr.UnknownValueError:
    print("Could not understand audio from the microphone. Check if it's working.")
except sr.RequestError as e:
    print("Could not request results from Google Speech Recognition service; {0}".format(e))
#-----------------------------------------------------
def to_markdown(text):
  text = text.replace('•', '  *')
  return Markdown(textwrap.indent(text, '> ', predicate=lambda _: True))

GOOGLE_API_KEY = "AIzaSyD_-6XvEV2qharJIhf_ewdKjMt5MmfxCUk"

genai.configure(api_key=GOOGLE_API_KEY)
model = genai.GenerativeModel('gemini-1.5-pro-latest')

#-----------------------------------------------------
def alexa_talk(text = 'I am Alexa. What can I do for you?'):
    engine.say(text)
    engine.runAndWait()

#-----------------------------------------------------
def take_command():
    command=''
    try:
        with mic as source:
            listener.adjust_for_ambient_noise(source,duration=1)
            print("Listening...")
            voice = listener.listen(source)
            command = listener.recognize_google(voice)
            command = command.lower()
            if 'alexa' in command:
                command = command.replace('alexa','')
    except:
        pass
    return command

#-----------------------------------------------------
def run_alexa():
    command = take_command()
    print(command)
    if 'play' in command:
        song = command.replace('play', '')
        alexa_talk('playing' + song)
        pywhatkit.playonyt(song)
    elif 'time' in command:
        time = datetime.datetime.now().strftime('%I:%M %p')
        alexa_talk('The current time is ' + time)
        print(time)
    elif 'who is' in command:
        person = command.replace('who is', '')
        info = wikipedia.summary(person, 1)
        print(info)
        alexa_talk(info)
    elif 'joke' in command:
        alexa_talk(pyjokes.get_joke())
    elif 'hello' in command:
        alexa_talk('Hi!')
    elif 'hi' in command:
        alexa_talk('Hello!')
    elif 'how are you doing' in command:
        alexa_talk('I am doing good! Thanks for asking!')
    elif 'bye' in command or 'shut down' in command:
        alexa_talk('Shutting Down')
        print('Shutting Down...')
        exit()
    elif 'who are you' in command:
        alexa_talk()
    else:
        try:
            response = model.generate_content(command)
            print(response.text)
            alexa_talk(response.text)
        except:
            print('Can you repeat the command?')
            alexa_talk('Can you repeat the command?')

alexa_talk() 
while True:
    run_alexa()

