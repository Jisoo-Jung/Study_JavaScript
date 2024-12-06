const button = document.getElementById("get-photos");

button.addEventListener("click", () => {
    photoService.getPhotos(photoLayout.showPhotos);
});
