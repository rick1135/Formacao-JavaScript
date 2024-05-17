const { error } = require("console");

const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
        const error = false;

        if (error) return reject(new Error("Erro ao realizar login!"));
        
        console.log("usuário logado!");
        resolve({email});
    })
}

const getUserVideos = (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("getUserVideos");
            resolve (["video1", "video2", "video3"]);
        }, 2000);
    })    
};

const getVideoDetails = (video) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("getVideoDetails");
            resolve ({título: "Título do video"});
        }, 2000);
    })
}

// loginUser("rick1135@hotmail.com", "123456")
//     .then((user) => getUserVideos(user.email))
//     .then((videos) => getVideoDetails(videos[0]))
//     .then((videoDetails) => console.log(videoDetails))
//     .catch((error)=>console.log(error))

const yt = new Promise((resolve) =>{
    setTimeout(() => {
        console.log("Carregando canal do youtube");
        resolve({nome: "Canal do Rick", inscritos: 1000});
    }, 2000);
})

const fb = new Promise((resolve) =>{
    setTimeout(() => {
        console.log("Carregando página do facebook");
        resolve({nome: "Página do Rick", seguidores: 1000});
    }, 2000);
})

Promise.all([yt, fb]).then((result) => {
    console.log(result);
})
