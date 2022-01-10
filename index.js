export default class DeezerClient {

    constructor(requester, idUser) {
        this.requester = requester;
        this.API_ENDPOINT = "https://api.deezer.com";
        this.id = idUser || null;
        if (this.id) {
            this.myUser = this.user(this.id);
        } else {
            this.myUser = {}
        }
    }



    albums = (id) => {
        return {
            infos: async () => await this.request(`${this.API_ENDPOINT}/album/${id}`),
            tracks: async () => await this.request(`${this.API_ENDPOINT}/album/${id}/tracks`),
            fans: async () => await this.request(`${this.API_ENDPOINT}/album/${id}/fans`)
        }
    }

    artist = (id) => {
        return {
            infos: async () => await this.request(`${this.API_ENDPOINT}/artist/${id}`),
            top: async () => await this.request(`${this.API_ENDPOINT}/album/${id}/top`),
            albums: async () => await this.request(`${this.API_ENDPOINT}/album/${id}/albums`),
            fans: async () => await this.request(`${this.API_ENDPOINT}/album/${id}/fans`),
            related: async () => await this.request(`${this.API_ENDPOINT}/album/${id}/related`),
            radio: async () => await this.request(`${this.API_ENDPOINT}/album/${id}/radio`),
            playlists: async () => await this.request(`${this.API_ENDPOINT}/album/${id}/playlists`)
        }
    }

    chart = (id) => {
        return {
            infos: async () => await this.request(`${this.API_ENDPOINT}/chart/${id}`),
            tracks: async () => await this.request(`${this.API_ENDPOINT}/chart/${id}/tracks`),
            albums: async () => await this.request(`${this.API_ENDPOINT}/chart/${id}/albums`),
            artists: async () => await this.request(`${this.API_ENDPOINT}/chart/${id}/artists`),
            playlists: async () => await this.request(`${this.API_ENDPOINT}/chart/${id}/playlists`),
            podcasts: async () => await this.request(`${this.API_ENDPOINT}/chart/${id}/podcasts`)
        }
    }

    episode = {
        infos: async () => await this.request(`${this.API_ENDPOINT}/episode/${id}`),
        bookmark: async () => await this.request(`${this.API_ENDPOINT}/chart/${id}/bookmark`)
    }

    editorial = async () => {
        return await this.request(`${this.API_ENDPOINT}/editorial`)
    }

    genre = async () => {
        return await this.request(`${this.API_ENDPOINT}/genre`)
    }

    infos = async () => {
        return await this.request(`${this.API_ENDPOINT}/infos`)
    }

    options = async () => {
        return await this.request(`${this.API_ENDPOINT}/options`)
    }

    playlist = (id) => {
        return {
            infos: async () => await this.request(`${this.API_ENDPOINT}/playlist/${id}`),
            tracks: async () => await this.request(`${this.API_ENDPOINT}/playlist/${id}/tracks`),
            seen: async () => await this.request(`${this.API_ENDPOINT}/playlist/${id}/seen`),
            radio: async () => await this.request(`${this.API_ENDPOINT}/playlist/${id}/radio`)
        }
    }

    podcast = (id) => {
        return {
            infos: async () => await this.request(`${this.API_ENDPOINT}/podcast/${id}`),
            episodes: async () => await this.request(`${this.API_ENDPOINT}/podcast/${id}/episodes`)
        }
    }

    radio = {
        infos: async () => await this.request(`${this.API_ENDPOINT}/radio`),
        genres: async () => await this.request(`${this.API_ENDPOINT}/radio/genres`),
        top: async () => await this.request(`${this.API_ENDPOINT}/radio/top`),
        lists: async () => await this.request(`${this.API_ENDPOINT}/radio/lists`)
    }

    track = (id) => {
        return {
            infos: async () => await this.request(`${this.API_ENDPOINT}/track/${id}`)
        }
    }

    search = {
        infos: async (str) => await this.request(`${this.API_ENDPOINT}/search?q=${str.toString()}`),
        album: async (str) => await this.request(`${this.API_ENDPOINT}/search/album?q=${str.toString()}`),
        artist: async (str) => await this.request(`${this.API_ENDPOINT}/search/artist?q=${str.toString()}`),
        history: async (str) => await this.request(`${this.API_ENDPOINT}/search/history?q=${str.toString()}`),
        playlist: async (str) => await this.request(`${this.API_ENDPOINT}/search/playlist?q=${str.toString()}`),
        podcast: async (str) => await this.request(`${this.API_ENDPOINT}/search/podcast?q=${str.toString()}`),
        radio: async (str) => await this.request(`${this.API_ENDPOINT}/search/radio?q=${str.toString()}`),
        track: async (str) => await this.request(`${this.API_ENDPOINT}/search/track?q=${str.toString()}`),
        user: async (str) => await this.request(`${this.API_ENDPOINT}/search/user?q=${str.toString()}`)
    }

    user = (id) => {
        return {
            infos: async () => await this.request(`${this.API_ENDPOINT}/user/${id}`),
            albums: async () => await this.request(`${this.API_ENDPOINT}/user/${id}/albums`),
            artists: async () => await this.request(`${this.API_ENDPOINT}/user/${id}/artists`),
            charts: async () => await this.request(`${this.API_ENDPOINT}/user/${id}/charts`),
            flow: async () => await this.request(`${this.API_ENDPOINT}/user/${id}/flow`),
            followings: async () => await this.request(`${this.API_ENDPOINT}/user/${id}/followings`),
            followers: async () => await this.request(`${this.API_ENDPOINT}/user/${id}/followers`),
            history: async () => await this.request(`${this.API_ENDPOINT}/user/${id}/history`), // need Oauth
            notifications: async () => await this.request(`${this.API_ENDPOINT}/user/${id}/notifications`),  // need Oauth
            permissions: async () => await this.request(`${this.API_ENDPOINT}/user/${id}/permissions`), // need Oauth
            options: async () => await this.request(`${this.API_ENDPOINT}/user/${id}/options`), // need Oauth
            personal_songs: async () => await this.request(`${this.API_ENDPOINT}/user/${id}/personal_songs`), // need Oauth
            playlists: async () => await this.request(`${this.API_ENDPOINT}/user/${id}/playlists`),
            podcasts: async () => await this.request(`${this.API_ENDPOINT}/user/${id}/podcasts`),
            radios: async () => await this.request(`${this.API_ENDPOINT}/user/${id}/radios`),
            tracks: async () => await this.request(`${this.API_ENDPOINT}/user/${id}/tracks`),
            recommendations: {
                albums: async () => await this.request(`${this.API_ENDPOINT}/user/${id}/recommendations/albums`), // need Oauth
                releases: async () => await this.request(`${this.API_ENDPOINT}/user/${id}/recommendations/releases`), // need Oauth
                artists: async () => await this.request(`${this.API_ENDPOINT}/user/${id}/recommendations/artists`), // need Oauth
                playlists: async () => await this.request(`${this.API_ENDPOINT}/user/${id}/recommendations/playlists`), // need Oauth
                tracks: async () => await this.request(`${this.API_ENDPOINT}/user/${id}/recommendations/tracks`), // need Oauth
                radios: async () => await this.request(`${this.API_ENDPOINT}/user/${id}/recommendations/radios`) // need Oauth
            }
        }
    }


    async request(url) {
        const { data } = await this.requester(url).catch(function (error) {
            throw error;
        });
        return data;
    }
}