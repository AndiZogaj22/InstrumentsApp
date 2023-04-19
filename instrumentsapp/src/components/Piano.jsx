import React from 'react'
import './Piano.css'
import '../Piano.js'

export const Piano = () => {
    return (
        <div>
            <div class="zgjidh">
                <label for="Themes" class="title">Themes</label>
                <select name="Themes" id="themes">
                    <option value="Dark">Dark</option>
                    <option value="Organo">Organo</option>
                    <option value="80s Synth">80s Synth</option>
                    <option value="Rumble">Rumble</option>
                </select>
            </div>
            <div class="piano">
                <button class="white-key C4-key"></button>
                <button class="black-key Db4-key"></button>
                <button class="white-key D4-key"></button>
                <button class="black-key Eb4-key"></button>
                <button class="white-key E4-key"></button>
                <button class="white-key F4-key"></button>
                <button class="black-key Gb4-key"></button>
                <button class="white-key G4-key"></button>
                <button class="black-key Ab4-key"></button>
                <button class="white-key A4-key"></button>
                <button class="black-key Bb4-key"></button>
                <button class="white-key B4-key"></button>
                <button class="white-key C5-key"></button>
                <button class="black-key Db5-key"></button>
                <button class="white-key D5-key"></button>
                <button class="black-key Eb5-key"></button>
                <button class="white-key E5-key"></button>
            </div>
        </div>
    )
}

