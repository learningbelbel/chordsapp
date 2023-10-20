import { songs } from '../json/songs.json'

export class SongService {

    async getSongs() {
        return songs;
    }
}