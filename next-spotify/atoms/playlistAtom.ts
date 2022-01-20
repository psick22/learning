import { atom, AtomOptions } from "recoil";

export const playlistState = atom<SpotifyApi.SinglePlaylistResponse | null>({
  key: "playlistState",
  default: null,
});

export const playlistIdState = atom({
  key: "playlistIdState",
  default: "2VfaMyn0IPahxHQrG0YgD1",
});
