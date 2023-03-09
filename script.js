const images = [
    'https://c4.wallpaperflare.com/wallpaper/1018/601/139/apple-computer-ios11-original-wallpaper-preview.jpg', 
        'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg', 
        'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&w=1000&q=80', 
        'https://images.unsplash.com/photo-1678114842860-620d83cfd083?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60' 
    ];
    // <div id="slides-container"> </div>
    const slideContainer = document.getElementById('slides-container');
    
    let counter = 0;
    const slide = document.createElement('div');
    slide.classList.add('slide');
    slide.classList.add(`slide-${counter}`); // slide-0
    slide.classList.add('active');
    slide.innerText = counter + 1;
    const image = images[counter];
    slide.style.backgroundImage = `url(${image})`;
    
    slideContainer.appendChild(slide);
    
    
    function showPreviousImg() {
        counter--;
        if(counter > 0) { // counter < 4
            console.log(counter);
            
            // hide previous slide
            const previousSlide = document.querySelector(`.slide-${counter + 1}`);
            // previousSlide.remove();
            // previousSlide.style.display = 'none';
            // console.log(previousSlide.classList);
            previousSlide.classList.remove('active')
            // next slide
            const nextSlide = document.createElement('div');
            nextSlide.classList.add('slide');
            nextSlide.classList.add('active');
            nextSlide.classList.add(`slide-${counter}`);
            nextSlide.innerHTML = counter + 1;
            const nextImage = images[counter];
            nextSlide.style.backgroundImage = `url(${nextImage})`;
            slideContainer.appendChild(nextSlide);
        }
        if(counter === 0) { // counter == 4
            const nextButton = document.querySelector('#next');
            nextButton.style.display = 'block';
            const prev = document.getElementById('previous');
            prev.style.display = 'none';
        }
    }
    
    function showNextImg() {
        counter++; // 0 + 1 
        if(counter < images.length) { // counter < 4
            console.log(counter)
            
            // hide previous slide
            // counter is 1. my previous slide is counter - 1. 
            const previousSlide = document.querySelector(`.slide-${counter - 1}`);
            previousSlide.classList.remove('active');
            previousSlide.classList.add('fadeout');
            
            // next slide is working. 
            const nextSlide = document.createElement('div');
            nextSlide.classList.add('slide');
            nextSlide.classList.add('active');
            nextSlide.classList.add(`slide-${counter}`);
            nextSlide.innerHTML = counter + 1;
            const nextImage = images[counter];
            nextSlide.style.backgroundImage = `url(${nextImage})`;
            slideContainer.appendChild(nextSlide);
        }
    
        if(counter === images.length - 1) { // counter == 4
            const prev = document.getElementById('previous');
            prev.style.display = 'block';
            const nextButton = document.querySelector('#next');
            nextButton.style.display = 'none';
        }
    }
     
