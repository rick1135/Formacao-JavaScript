async function fetchProfileData(){   
    const url = 'https://raw.githubusercontent.com/rick1135/Formacao-JavaScript/refs/heads/main/Portfólio/data/profile.json';
    const fetching = await fetch(url);
    return await fetching.json(); 
}
