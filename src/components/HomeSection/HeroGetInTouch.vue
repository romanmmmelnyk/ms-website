<template>
    <div class="contact-orbit">
      <!-- Сфера -->
      <div class="sphere">
        <div class="sphere-bg"></div>
        <div class="sphere-overlay"></div>
        <h2 class="sphere-text">GET<br />IN<br />TOUCH</h2>
        <div class="sphere-arc"></div>
      </div>
  
      <!-- Орбіти -->
      <div class="orbit orbit-1"></div>
      <div class="orbit orbit-2"></div>
      <div class="orbit orbit-3"></div>
  
      <!-- Кольорові точки -->
      <div class="dot dot-red"></div>
      <div class="dot dot-green"></div>
      <div class="dot dot-yellow"></div>
      <div class="dot dot-pink"></div>
    </div>
  </template>
  
  <script setup>
  // Нічого складного не потрібно, все робиться через стилі
  </script>
  
  <style scoped>
  .contact-orbit {
    position: relative;
    width: 500px;
    height: 500px;
    margin: 0 auto;
    background: radial-gradient(circle at center, #0a0a0f 0%, #0b0b10 100%);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  /* Сфера */
  .sphere {
    position: relative;
    width: 220px;
    height: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .sphere-bg {
    position: absolute;
    width: 120%;
    height: 120%;
    background: radial-gradient(circle at center, rgba(161, 75, 255, 0.3) 0%, rgba(161, 75, 255, 0.1) 50%, transparent 100%);
    border-radius: 50%;
    z-index: 1;
    top: -10%;
    left: -10%;
  }
  
  .sphere-text {
    position: relative;
    color: white;
    font-weight: 700;
    text-align: center;
    z-index: 3;
    font-size: 22px;
    line-height: 1.3em;
    letter-spacing: 1px;
  }
  
  /* Арка */
  .sphere-arc {
    position: absolute;
    width: 120%;
    height: 120%;
    border: 8px solid transparent;
    border-top: 8px solid #a14bff;
    border-radius: 50%;
    z-index: 2;
  }
  
  /* Орбіти */
  .orbit {
    position: absolute;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .orbit-1 {
    width: 300px;
    height: 300px;
  }
  
  .orbit-2 {
    width: 400px;
    height: 400px;
  }
  
  .orbit-3 {
    width: 500px;
    height: 500px;
  }
  
  /* Точки */
  .dot {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    box-shadow: 0 0 15px currentColor;
    top: 50%;
    left: 50%;
    margin-top: -10px;
    margin-left: -10px;
  }
  
  .dot-red {
    background: red;
    color: red;
    animation: orbit-red 8s linear infinite;
  }
  
  .dot-green {
    background: limegreen;
    color: limegreen;
    animation: orbit-green 12s linear infinite;
  }
  
  .dot-yellow {
    background: yellow;
    color: yellow;
    animation: orbit-yellow 10s linear infinite;
  }
  
  .dot-pink {
    background: deeppink;
    color: deeppink;
    animation: orbit-pink 15s linear infinite;
  }

  @keyframes orbit-red {
    0% { transform: rotate(0deg) translateX(120px) rotate(0deg); }
    100% { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
  }

  @keyframes orbit-green {
    0% { transform: rotate(0deg) translateX(140px) rotate(0deg); }
    100% { transform: rotate(360deg) translateX(140px) rotate(-360deg); }
  }

  @keyframes orbit-yellow {
    0% { transform: rotate(0deg) translateX(130px) rotate(0deg); }
    100% { transform: rotate(360deg) translateX(130px) rotate(-360deg); }
  }

  @keyframes orbit-pink {
    0% { transform: rotate(0deg) translateX(110px) rotate(0deg); }
    100% { transform: rotate(360deg) translateX(110px) rotate(-360deg); }
  }
  </style>
  