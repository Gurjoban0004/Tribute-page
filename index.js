document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll("a").forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
      });
    });
  
    const expandBtn = document.createElement("button");
    expandBtn.textContent = "Read More";
    expandBtn.classList.add("expand-btn");
    const bioSection = document.querySelector(".biography_section");
    const fullText = bioSection.querySelector("p").textContent;
    const shortText = fullText.slice(0, 150) + "...";
  
    bioSection.querySelector("p").textContent = shortText;
    bioSection.appendChild(expandBtn);
  
    expandBtn.addEventListener("click", function () {
      if (bioSection.querySelector("p").textContent === shortText) {
        bioSection.querySelector("p").textContent = fullText;
        expandBtn.textContent = "Read Less";
      } else {
        bioSection.querySelector("p").textContent = shortText;
        expandBtn.textContent = "Read More";
      }
    });
  
    const images = document.querySelectorAll(".biography_section img");
    images.forEach(img => {
      img.addEventListener("click", function () {
        const modal = document.createElement("div");
        modal.classList.add("modal");
        const largeImg = document.createElement("img");
        largeImg.src = img.src;
        modal.appendChild(largeImg);
        document.body.appendChild(modal);
  
        modal.addEventListener("click", function () {
          document.body.removeChild(modal);
        });
      });
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".navbar a").forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        if (this.getAttribute("href").startsWith("#")) {
          e.preventDefault();
          const targetId = this.getAttribute("href").substring(1);
          document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  });

  let navButton = document.createElement("a");
navButton.href = "songs.html";
navButton.textContent = "Songs";
document.getElementById("navbar").appendChild(navButton);
