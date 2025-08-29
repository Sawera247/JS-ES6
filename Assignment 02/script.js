const mobiles = {
    Apple: {
    models: {
        "iPhone 14": "./img/iphone_14.png",
        "iPhone 13": "./img/iphone_13.png",
        "iPhone 15": "./img/iPhone 15.png"
    }
    },
    Samsung: {
    models: {
        "Galaxy S23": "./img/samsung-galaxy-s23-.webp",
        "Galaxy Z Flip 5": "./img/galaxy-z-flip5-.webp",
        "Galaxy A54": "./img/galaxy-a54.avif"
    }
    },
    Xiaomi: {
    models: {
        "Redmi Note 12": "./img/xiaomi-redmi-note-12-.webp",
        "Poco X5 Pro": "./img/poco x5.webp",
        "Xiaomi 13 Pro": "./img/xiaomi 13.png"
    }
    },
    Oppo: {
    models: {
        "Oppo Reno 10": "./img/reno_10_oppo.png",
        "Oppo F23": "./img/oppo f23.webp",
        "Oppo A78": "./img/a78-oppo.png"
    }
    },
    Vivo: {
    models: {
        "Vivo V27": "./img/vivo v27.png",
        "Vivo Y36": "./img/vivo-y36-.webp",
        "Vivo X90 Pro": "./img/vivo x90.png"
    }
    }
};

let brand = document.getElementById("brands");
let model = document.getElementById("models");
let search = document.getElementById("search");

for(let brandName in mobiles){
    brand.innerHTML += `<option value="${brandName}">${brandName}</option>`;
}

brand.addEventListener("change", function (){
    model.innerHTML = '<option value="model">Choose That Brand Model</option>';

    let selectedBrand = this.value;

    if(selectedBrand !== "brand"){
        let models = mobiles[selectedBrand].models;
        let options = "";
        for (let modelName in models) {
        options += `<option value="${models[modelName]}">${modelName}</option>`;
        }

        model.innerHTML += options;
    }
});

search.addEventListener("click", function (){
    let selectedImg = model.value;

    if(selectedImg !== "model") {
        document.querySelector(".preview").innerHTML = 
        `<img src="${selectedImg}" alt="Selected Model">`;
    }else{
        preview.innerHTML = "<p>Please select a model</p>";
    }
});
