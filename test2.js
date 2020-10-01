// 2. Rogue button
// A. Create a JavaScript browser application with one page and one button in the middle of it.
// If you resize the window, the button must remain in the middle. Do not use plain CSS :)
// B. When you try to press a button, it "runs" away from the mouse cursor.
// Code must be commented and stored in public Git repo (Bitbucket).


const btn = document.querySelector('button'); // getting first element with selector 'button'

btn.addEventListener('mouseover', function() {                      // adding event listener on mouseover event, declaring callback function, that gets executed when event ocurs,
    const height = Math.floor(Math.random() * window.innerHeight);  // 'window.innerHeight' returns the interior height of the window, 
                                                                    // 'Math.random()' returns floating-point from 0 to less than 1, 
                                                                    // 'Math.floor()' returns the largest integer less than or equal to a given number, alltogether we getting random height in pixels.
    const width = Math.floor(Math.random() * window.innerWidth);
    
    btn.style.top = `${height}px`;                                  // using html dom style.top property to set the height in pixels using string interpolation
    btn.style.left = `${width}px`;
});
