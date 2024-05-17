const { error } = require("console");

const loginUser = (email, password, onSucess, onError) => {
    setTimeout(() => {
        const error = false;
        if (error) return onError(new Error("Erro ao realizar login!"));
        console.log("usuário logado!");
        onSucess ({email});
    }, 1500);
};

const getUserVideos = (email, callback) => {
    setTimeout(() => {
        callback (["video1", "video2", "video3"]);
    }, 2000);
};

const getVideoDetails = (video, callback) => {
    setTimeout(() => {
        callback ({título: "Título do video"});
    }, 2000);

}

const user = loginUser("rick1135@hotmail.com", "123456", (user) => {
    getUserVideos(user.email, (videos) =>{
        console.log(videos);
        getVideoDetails(videos[0], (videosDetails) => {
            console.log(videosDetails);
        })
    });
}, (error) => {
    console.log(error);
});
