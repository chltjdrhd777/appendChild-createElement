window.addEventListener('load', ()=>{
    const sounds= document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div"); //I can select all the divs inside the parent "pads"
    const visual = document.querySelector(".visual");
    const colors = [
        "#311164",  
        "#da1818",
        "#c060d3",
        "#d3d160",
        "#6860d3",
        "#60b2d3",
    ];
    //music gets started
    pads.forEach((pad,index)=>{
        pad.addEventListener('click',function(){
            sounds[index].currentTime = 0; // This one makes the clicking event be reset by giving the value of currentTime =0;
            sounds[index].play();
            
            createBubbles(index);
        });//To access to each sound file, I wrote "pad" and ",index" which two parameter are used to specify each pad div and sound file.
    });

    const createBubbles = (index)=>{
        const bubble = document.createElement("div"); // which menas I would make the tag of "div"
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
    }

});