var imageOurGalleryPhotos = [{
        type: "landscape",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, voluptatem. ",
        link: "OurImages/eiffel.jpg",
        createdAt: "Created by Hekan at 2011"
    },
    {
        type: "landscape",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, voluptatem. ",
        link: "OurImages/girl.jpg",
        createdAt: "Created by Hüseyin at 2011"
    },
    {
        type: "landscape",
        description: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur, mus tenetur. ",
        link: "OurImages/landscape1.jpg",
        createdAt: "Created by Harun at 2011"
    },
    {
        type: "landscape",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, voluptatem. ",
        link: "OurImages/mountain.jpg",
        createdAt: "Created by Hilal at 2011"
    }
]

var imageYourGalleryPhotos = [{
        type: "landscape",
        description: "Lorem ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse voluptatum libero, laudantium at quos magnam molestiae dolores dolor praesentium maiores recusandae error in itaque adipisci!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse voluptatum libero, laudantium at quos magnam molestiae dolores dolor praesentium maiores recusandae error in itaque adipisci!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse voluptatum libero, laudantium at quos magnam molestiae dolores dolor praesentium maiores recusandae error in itaque adipisci!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse voluptatum libero, laudantium at quos magnam molestiae dolores dolor praesentium maiores recusandae error in itaque adipisci!dolor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse voluptatum libero, laudantium at quos magnam molestiae dolores dolor praesentium maiores recusandae error in itaque adipisci!sit amet consectetur, adipisicing elit. Esse voluptatum libero, laudantium at quos magnam molestiae dolores dolor praesentium maiores recusandae error in itaque adipisci! ",
        link: "YourImages/beautifulphot.jpg",
        createdAt: "Created by @user at 2015"
        
    },
    {
        type: "landscape",
        description: "Lorem ipsum dolor sitLorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse voluptatum libero, laudantium at quos magnam molestiae dolores dolor praesentium maiores recusandae error in itaque adipisci!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse voluptatum libero, laudantium at quos magnam molestiae dolores dolor praesentium maiores recusandae error in itaque adipisci!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse voluptatum libero, laudantium at quos magnam molestiae dolores dolor praesentium maiores recusandae error in itaque adipisci!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse voluptatum libero, laudantium at quos magnam molestiae dolores dolor praesentium maiores recusandae error in itaque adipisci!ipsum dolor sit amet consectetur, adipisicing elit. Esse voluptatum libero, laudantium at quos magnam molestiae dolores dolor praesentium maiores recusandae error in itaque adipisci! amet consectetur, adipisicing elit. Esse voluptatum libero, laudantium at quos magnam molestiae dolores dolor praesentium maiores recusandae error in itaque adipisci! ",
        link: "YourImages/sea.jpg",
        createdAt: "Created by @user1 at 2015"
    },
    {
        type: "landscape",
        description: "Lorem ipsum dolor sitLorem ipsum dolor sit amet consectetur, adipisicing elit. Esse voluptatum libero, laudantium at quos magnam molestiae dolores dolor praesentium maiores recusandae error in itaque adipisci! amet Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore debitis blanditiis officiis at earum adipisci animi, sint eligendi libero qui placeat! Repellendus veniam tenetur velit quos inventore error, amet beatae tempora soluta a dignissimos molestiae facilis et sed, cum magni corporis at, libero sint repellat corrupti! Itaque ut accusamus tenetur. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore debitis blanditiis officiis at earum adipisci animi, sint eligendi libero qui placeat! Repellendus veniam tenetur velit quos inventore error, amet beatae tempora soluta a dignissimos molestiae facilis et sed, cum magni corporis at, libero sint repellat corrupti! Itaque ut accusamus tenetur. consectetur, adipisicing elit. Inventore debitis blanditiis officiis at earum adipisci animi, sint eligendi libero qui placeat! Repellendus veniam tenetur velit quos inventore error, amet beatae tempora soluta a dignissimos molestiae facilis et sed, cum magni corporis at, libero sint repellat corrupti! Itaque ut accusamus tenetur. ",
        link: "YourImages/winter.jpg",
        createdAt: "Created by @user2 at 2015"
    },
    {
        type: "landscape",
        description: "Lorem ipsumLorem ipsum dolor sit amet consectetur, adipisicing elit. Esse voluptatum libero, laudantium at quos magnam molestiae dolores dolor praesentium maiores recusandae error in itaque adipisci! dolor sitLorem ipsum dolor sit amet consectetur, adipisicing elit. Esse voluptatum libero, laudantium at quos magnam molestiae dolores dolor praesentium maioresLorem ipsum dolor sit amet consectetur, adipisicing elit. Esse voluptatum libero, laudantium at quos magnam molestiae dolores dolor praesentium maiores recusandae error in itaque adipisci!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse voluptatum libero, laudantium at quos magnam molestiae dolores dolor praesentium maiores recusandae error in itaque adipisci!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse voluptatum libero, laudantium at quos magnam molestiae dolores dolor praesentium maiores recusandae error in itaque adipisci! recusandae error in itaque adipisci! amet consectetur, adipisicing elit. Esse voluptatum libero, laudantium at quos magnam molestiae dolores dolor praesentium maiores recusandae error in itaque adipisci! ",
        link: "YourImages/flower.jpg",
        createdAt: "Created by @user3 at 2015"
    }
]

function getOurPhotos() {
    var getOurPhotosDiv = document.getElementById("ourPhotos")
    for (let i = 0; i <= imageOurGalleryPhotos.length - 1; i++) {
        let newPhotoDiv = document.createElement("div");
        let photoCreatedByDiv = document.createElement("div");
        let photoCreatedByP = document.createElement("p");
        let photoCreatedByDescription = document.createTextNode(imageOurGalleryPhotos[i].createdAt)
        photoCreatedByP.appendChild(photoCreatedByDescription)
        photoCreatedByDiv.appendChild(photoCreatedByP)
        photoCreatedByDiv.classList.add("createdAt")
        newPhotoDiv.classList.add("photo")
        let imageDiv = document.createElement("div");
        imageDiv.classList.add("galleryImg");
        let newImage = document.createElement("img");
        newImage.src = imageOurGalleryPhotos[i].link;
        let newDescriptionDiv = document.createElement("div");
        newDescriptionDiv.classList.add("infoImg")
        let descriptionP = document.createElement("p");
        let descriptionText = document.createTextNode(imageOurGalleryPhotos[i].description)
        descriptionP.appendChild(descriptionText)
        newDescriptionDiv.appendChild(descriptionP)
        imageDiv.appendChild(newImage)
        newPhotoDiv.appendChild(imageDiv)
        newPhotoDiv.appendChild(newDescriptionDiv);
        getOurPhotosDiv.appendChild(newPhotoDiv)
        newPhotoDiv.appendChild(photoCreatedByDiv)
    }
}

function getYourPhotos() {
    var getYourPhotosDiv = document.getElementById("yourPhotos")
    for (let i = 0; i <= imageYourGalleryPhotos.length - 1; i++) {
        let newPhotoDiv = document.createElement("div");
        newPhotoDiv.classList.add("photo")
        let photoCreatedByDiv = document.createElement("div");
        let photoCreatedByP = document.createElement("p");
        let photoCreatedByDescription = document.createTextNode(imageYourGalleryPhotos[i].createdAt)
        photoCreatedByP.appendChild(photoCreatedByDescription)
        photoCreatedByDiv.appendChild(photoCreatedByP)
        photoCreatedByDiv.classList.add("createdAt")
        let imageDiv = document.createElement("div");
        imageDiv.classList.add("galleryImg");
        let newImage = document.createElement("img");
        newImage.src = imageYourGalleryPhotos[i].link;
        newImage.title = imageYourGalleryPhotos[i].type;
        let newDescriptionDiv = document.createElement("div");
        newDescriptionDiv.classList.add("infoImg")
        let descriptionP = document.createElement("p");
        let descriptionText = document.createTextNode(imageYourGalleryPhotos[i].description)
        descriptionP.appendChild(descriptionText)
        newDescriptionDiv.appendChild(descriptionP)
        imageDiv.appendChild(newImage)
        newPhotoDiv.appendChild(imageDiv)
        newPhotoDiv.appendChild(newDescriptionDiv);
        getYourPhotosDiv.appendChild(newPhotoDiv)
        newPhotoDiv.appendChild(photoCreatedByDiv)
    }
}

function joined() {
    alert("Thanks for contact with us! ")
}

window.onload = getOurPhotos(), getYourPhotos();