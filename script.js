// let div = document.getElementById("move-div");
// let title = document.getElementById("title")

// function isTouchDevice() {

//     try {
//         document.createEvent("TouchEvent")
//         return true
//     } catch (e) {
//         return false
//     }
// }

// const move = (e) => {

//     try {
//         var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
//         var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
//     } catch (error) {}
//         div.style.left = x + "px";
//         div.style.top = y + "px";
//         const rect = title.getBoundingClientRect();
//         if( x > rect.left && x < rect.right && y > rect.top && y < rect.bottom){
//             div.style.width = 10 + "em";
//             div.style.height = 10 + "em";
//         }
//         else{
//             div.style.width = 3 + "em";
//             div.style.height = 3 + "em";
//         }

// }

// //For mouse
// document.addEventListener("mousemove", (e) => {
//     move(e);
//   });

//   //For touch
// document.addEventListener("touchmove", (e) => {
//     move(e);
//   });

const div = document.getElementById("move-div");
const title = document.getElementById("title");

function isTouchDevice() {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}

function updateDivPosition(cursorX, cursorY) {
  div.style.left = cursorX + "px";
  div.style.top = cursorY + "px";
}

function updateDivSize(cursorX, cursorY) {
  const rect = title.getBoundingClientRect();
  if (
    cursorX > rect.left &&
    cursorX < rect.right &&
    cursorY > rect.top &&
    cursorY < rect.bottom
  ) {
    div.style.width = "10em";
    div.style.height = "10em";
    div.style.backgroundColor = "purple";
  } else {
    div.style.width = "3em";
    div.style.height = "3em";
    div.style.backgroundColor = "orange";
  }
}

function move(e) {
  try {
    const cursorX = isTouchDevice() ? e.touches[0].pageX : e.pageX;
    const cursorY = isTouchDevice() ? e.touches[0].pageY : e.pageY;

    updateDivPosition(cursorX, cursorY);
    updateDivSize(cursorX, cursorY);
  } catch (error) {
    console.error("Error in move function:", error);
  }
}

 document.addEventListener("mousemove", move);
 document.addEventListener("touchmove", move);


