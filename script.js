const file1 = document.getElementById("file1");
const file2 = document.getElementById("file2");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const imageimage = document.querySelector(".imageimage");
const compare = document.getElementById("compare");

file1.addEventListener("change", function() {
    const reader = new FileReader();
    reader.onload = function() {
      image1.src = reader.result;
      image1.style.display = "block";
      imageimage.style.display = "none";
    }
    reader.readAsDataURL(file1.files[0]);
  });
  
  file2.addEventListener("change", function() {
    const reader = new FileReader();
    reader.onload = function() {
      image2.src = reader.result;
      imageimage.style.display = "none";
    }
    reader.readAsDataURL(file2.files[0]);
  });
  
compare.addEventListener("click", function () {
    if (image1.style.display === "none") {
        image1.style.display = "flex";
        image2.style.display = "none";
        
    } else {
        image1.style.display = "none";
        image2.style.display = "flex";
        
    }
});
