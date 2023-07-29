const input = document.getElementById("file-input")
const output = document.getElementById("file-output")
let imagesArray = []

input.addEventListener("change", function() {
    const file = input.files
    imagesArray.push(file[0])
    displayImages()
})

function displayImages() {
    let images = ""
    imagesArray.forEach((image, index) => {
      images += `<div class="image">
                  <img src="${URL.createObjectURL(image)}" alt="image">
                  <span onclick="deleteImage(${index})">&times;</span>
                </div>`
    })
    output.innerHTML = images
}
