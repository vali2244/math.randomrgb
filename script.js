const section=document.querySelector("section")
const colorchange=document.querySelector('#mybt1')
const setIntervalId= setInterval(() => {
    // console.log(Math.random());
    const red=Math.floor(Math.random()*235);
    const green=Math.floor(Math.random()*235);
    const blue=Math.floor(Math.random()*235);
    const rgbcolor=`rgb(${red}, ${green},${blue})`;
    section.style.background=rgbcolor;
    mybt1.textContent=rgbcolor;
    
},5000)

const stop=()=>{
    clearInterval(setIntervalId)
}