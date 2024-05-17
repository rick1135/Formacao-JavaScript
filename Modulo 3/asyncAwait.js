const { error } = require("console");

const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    const error = false;

    if (error) return reject(new Error("Erro ao realizar login!"));

    console.log("usuário logado!");
    resolve({ email });
  });
};

const getUserVideos = (email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("getUserVideos");
      resolve(["video1", "video2", "video3"]);
    }, 2000);
  });
};

const getVideoDetails = (video) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("getVideoDetails");
      resolve({ título: "Título do video" });
    }, 2000);
  });
};

// loginUser("rick1135@hotmail.com", "123456")
//     .then((user) => getUserVideos(user.email))
//     .then((videos) => getVideoDetails(videos[0]))
//     .then((videoDetails) => console.log(videoDetails))
//     .catch((error)=>console.log(error))

const displayUser = async () => {
  try {
    const user = await loginUser("rick1135@hotmail.com", "123456");
    const videos = await getUserVideos(user.email);
    const videoDetails = await getVideoDetails(videos[0]);
    console.log(videos);
    console.log(videoDetails);
    console.log({ user });
  } catch (error) {
    console.log(error);
  }
};

displayUser();
