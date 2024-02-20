const apiToken: string = 'BQD7CXePurVvvKP_7tmqYNg8M2rXEsQwn6R-aWuhZ9r3MINJgtM5xfyE8ckh7JlJfLog9zjbBVo5P3qf9C9uJZTNroM6Qwf9SJfTqHxnAjjUpXgtD9XSQ3BL_dHKhUGwAXiALxElM7Ql5fB7ft_qOA0ulWgFakFyshRfShZ1EeE25F5aD2ei7-TkEuATb3zXVgAZCcZaqABdxfvPoYvNWF_Aew';

export const fetchTracks = async () => {
  // This function does nothing, yet
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
     throw new Error(`Fetching tracks failed with status ${response.status}`)
   }
  const data = await response.json() as { items: unknown[] };

  return data.items;
};
