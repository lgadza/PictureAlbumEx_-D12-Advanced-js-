const options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer[563492ad6f91700001000001b8ae8829d887489d81bee37d6386866]",
    // "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};
fetch("https://api.pexels.com/v1/search?query=5", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
