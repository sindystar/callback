const btnOpen = document.querySelector(".btnOpen");
const main = document.querySelector("main");
const aside = document.querySelector("aside");
const btnClose = aside.querySelector(".btnClose");
const _top = aside.querySelector(".top");
const _right = aside.querySelector(".right");
const _bottom = aside.querySelector(".bottom");
const _left = aside.querySelector(".left");
const _inner = aside.querySelector(".inner");
const speed = 500;

btnOpen.addEventListener("click", (e) => {
  e.preventDefault();
  aside.style.display = "block";
  main.classList.add("off");
  new Anim(_top, {
    prop: "width",
    value: "100%",
    duration: speed,
    callback: () => {
      new Anim(_right, {
        prop:"height",
        value: "100%",
        duration: speed,
        callback: () => {
          new Anim(_bottom, {
            prop: "width",
            value: "100%",
            duration: speed,
            callback: () => {
              new Anim(_left, {
                prop: "height",
                value: "100%",
                duration: speed,
                callback: () => {
                  new Anim(_inner, {
                    prop: "opacity",
                    value: 1,
                    duration:speed,
                  })
                }
              })
            }
          })
        }
      })
    }
  })
})

btnClose.addEventListener("click", (e) => {
  e.preventDefault();

  new Anim(_inner, {
    prop: "opacity",
    value: 0,
    duration: speed,
    callback: () => {
      new Anim(_top, {
        prop: "width",
        value: "0%",
        duration: speed,
      });
      new Anim(_right, {
        prop: "height",
        value: "0%",
        duration: speed,
      });
      new Anim(_bottom, {
        prop: "width",
        value: "0%",
        duration:speed,
      });
      new Anim(_left, {
        prop: "height",
        value: "0%",
        duration: speed,
        callback: () => {
          aside.style.display = "none";
          main.classList.remove("off");
        }
      });
    }
  })
})