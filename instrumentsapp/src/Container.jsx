import React from 'react'
import './App.css'
export const Container = () => {
  return (
    <div>
        <section class="intro">
        <h1>FreeInstruments</h1>
        <p>Hello ! Welcome to FreeInstruments enjoy free digital instruments with an evergrowing kit and much more exiting things cooming soon...</p>
    </section>
    <div class="container">
       <a href="piano/piano.html">
    <div id="div1"><div class="text">Piano</div><i class="fa-solid fa-piano-keyboard"></i></div>
    
</a>
<a href="guitar.html">
    <div id="div2"><div class="text">Guitar</div><i class="fa-solid fa-piano"></i></div>
   
</a>
<a href="trumpet.html">
    <div id="div3"><div class="text">Trumpet</div></div>
    <i class="fa-solid fa-trumpet"></i>
</a>
<a href="bells.html">
    <div id="div4"><div class="text">Bells</div></div>
    <i class="fa-solid fa-triangle-instrument"></i>
</a>
</div>
<section>
    <i class="fa-solid fa-triangle-instrument"></i>
</section>
    </div>
  )
}
