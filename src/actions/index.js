export const MAIN_MENU = 'MAIN_MENU'
export const SONGS_MENU = 'SONGS'
export const ALBUMS_MENU = 'ALBUMS'
export const ARTISTS_MENU = 'ARTISTS'
export const PLAYLISTS_MENU = 'PLAYLISTS'
export const DISPLAY_SONGS = 'DISPLAY_SONGS'
export const DISPLAY_ALBUMS = 'DISPLAY_ALBUMS'
export const DISPLAY_PLAYLISTS = 'DISPLAY_PLAYLISTS'
export const SONGS_LIST = ['TEMPARATURE', 'SORRY', 'DRAG ME', 'NIRVANA']
export const ARTISTS_LIST = ['JUSTIN BIEBER', 'TAYLOR SWIFT', 'ZAYN MALIK', 'KATY PERRY']

// Action types
export function addMainMenu() {
    return [
            {index: 0, name: "Songs", isActive: true},
            {index: 1, name: "Albums", isActive: false},
            {index: 2, name: "Artists", isActive: false},
            {index: 3, name: "Playlists", isActive: false}
    ]
}

export function addSongsMenu() {
    return [
        {index: 0, name: "Temparature", isActive: true},
        {index: 1, name: "Sorry", isActive: false},
        {index: 2, name: "Drag Me", isActive: false},
        {index: 3, name: "Nirvana", isActive: false}
    ]
}

export function addArtistsMenu() {
    return [
        {index: 0, name: "Justin Bieber", isActive: true},
        {index: 1, name: "Taylor Swift", isActive: false},
        {index: 2, name: "Zayn Malik", isActive: false},
        {index: 3, name: "Katy Perry", isActive: false}
    ]
}

export function addAlbumsMenu() {
    return [
        {index: 0, name: "Perfect", isActive: true},
        {index: 1, name: "Battle Cry", isActive: false},
        {index: 2, name: "Bad Blood", isActive: false},
        {index: 3, name: "Love Me", isActive: false}
    ]
}

export function addPlaylistsMenu() {
    return [
        {index: 0, name: "Default", isActive: true},
        {index: 1, name: "Create", isActive: false}

    ]
}

export function isPresentInSongs(songName) {
    // console.log(songName)
    const songs = SONGS_LIST.filter((song) => {
        // console.log(song)
        return song === songName
    })
    // console.log('songs', songs)
    return songs.length !== 0;
}

export function isPresentInArtists(artistName) {
    const names = ARTISTS_LIST.filter((artist) => artist === artistName);

    return names.length != 0;
}


export function getArtistURL(index) {
    if(index === 0) {
        return 'https://m.economictimes.com/thumb/msid-58517562,width-1200,height-900,resizemode-4,imgsize-183605/at-4mn-justin-biebers-mumbai-concert-will-be-the-most-expensive-gig-in-india-ever.jpg'
    } else if(index === 1) {
        return 'https://media.wired.com/photos/59a08dd0f210736360c3c3bb/191:100/w_1280,c_limit/TaylorSwift-617309460.jpg'
    } else if(index == 2) {
        return 'https://www.gstatic.com/tv/thumb/persons/883224/883224_v9_bb.jpg'
    } else {
        return 'https://static.billboard.com/files/2020/03/katy-perry-2020-feb-ux-billboard-1548-1583347473-768x433.jpg'
    }
}


export function getDescription(index) {
    if(index === 0) {
        return 'Justin Drew Bieber is a Canadian singer, songwriter, and actor'
    } else if(index == 1) {
        return 'Taylor Alison Swift is an American singer-songwriter.'
    } else if(index == 2) {
        return 'Zain Javadd Malik, known mononymously as Zayn, is an English singer and songwriter'
    } else {
        return 'Katheryn Elizabeth Hudson, known professionally as Katy Perry, is an American singer'
    }
}