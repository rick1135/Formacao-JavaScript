async function fetchProfileData(){   
    const url = 'https://avatars.githubusercontent.com/u/55491414?v=4';
    const fetching = await fetch(url);
    return await fetching.json(); 
}
