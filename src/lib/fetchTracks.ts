import { SavedTrack } from 'spotify-types';

const apiToken: string = 'BQA07f3DHkEd8gL_gFRPPV7-LrHnErNKfPVo3_btorChtQMzkr_zgcYfwpu9Rse7cBo9UAOjEtwRXQoGdeUqXdgyti5vebgAY6fpz0I_xx31uNPb0qUxpxSXIZ1AebQaPanxG8Z1jhtbnSmvuuCFfxTZ427G5ct3Y7PN5VcAHerSdf9RmAmjzyVx7PWnH9luPndZoDF2Yxon4YN-N-dIxOOAeA';

export const fetchTracks = async ():Promise<SavedTrack[]> => {
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
  const data = await response.json() as { items: SavedTrack[] };

  return data.items;
};
