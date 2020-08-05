import React from 'react';
import zingtouch from 'zingtouch';
import Menu from './components/Menu'
import Songs from './components/Songs'
import Common from './components/Common'
import Artists from './components/Artists'

import * as action from './actions'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

let currentAngle = 0;
let lastAngle = 0;

// Main class
class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      // To get main menu, when state is empty
      events: action.addMainMenu(),
      active: 0,
      main_menu: true,
      songs_menu: false,
      albums_menu: false,
      artists_menu: false,
      playlists_menu: false,
      display_songs: false,
      display_artists: false,
      display_albums: false,
      display_playlists: false
    }
  }

  // When the wheel is rotated forward, move to the next option
  moveToNext() {
    const size = this.state.events.length;
    this.setState({
      active: (this.state.active + 1) % size
    })
  }
  // When the wheel is rotated backward, move to the next option
  moveToPrev() {
    const size = this.state.events.length;
    let nextStateActive = this.state.active;
    if(nextStateActive - 1 < 0) {
      nextStateActive += size;
    }
    this.setState({
      active: (nextStateActive - 1) % size
    })
  }

  // For handling the center click button
  handleClickEvent = () => {
    const curActive = this.state.active;
    const currentPage = Object.keys(this.state).filter((key) => {
      return this.state[key] === true
    })

    const event = this.state.events.filter((event) => {
      return event.index === curActive
    })

    if(currentPage === undefined) return;
    if(currentPage[0] === 'display_albums' || currentPage[0] === 'display_playlists') return;
    console.log('Active', curActive)
    console.log('Current', currentPage)
    this.setState({
      active: 0,
      main_menu: false,
      songs_menu: false,
      albums_menu: false,
      artists_menu: false,
      playlists_menu: false,
      display_songs: false,
      display_artists: false,
      display_albums: false,
      display_playlists: false
    })
    
    console.log(event);
    if(event.length === 0) return
    const name = event[0].name;
    console.log(name)
    if(name.toUpperCase() === action.SONGS_MENU) {
      this.setState({
        events: action.addSongsMenu(),
        songs_menu: true
      })
    }

    if(name.toUpperCase() === action.ARTISTS_MENU) {
      this.setState({
        events: action.addArtistsMenu(),
        artists_menu: true
      })
    }

    if(name.toUpperCase() === action.ALBUMS_MENU) {
      this.setState({
        events: action.addAlbumsMenu(),
        albums_menu: true
      })
    }

    if(name.toUpperCase() === action.PLAYLISTS_MENU) {
      this.setState({
        events: action.addPlaylistsMenu(),
        playlists_menu: true
      })
    }

    if(action.isPresentInArtists(name.toUpperCase())) {
      this.setState({
        display_artists: true,
      })
    }
    // console.log(action.isPresentInSongs(name.toUpperCase()));
    // const getSong = action.isPresentInSongs(name.toUpperCase);
    if(action.isPresentInSongs(name.toUpperCase())) {
      console.log('Updating')
      this.setState({
        display_songs: true,
      })
    }

    console.log(currentPage)
    if(currentPage[0] === 'albums_menu') {
      this.setState({
        display_albums: true
      })
    }

    if(currentPage[0] === 'playlists_menu') {
      this.setState({
        display_playlists: true
      })
    }



  }
  
  // For handling the menu button, to move back
  handleMenuEvent = () => {
    const curActive = this.state.active;
    console.log(this.state);
    const curPage = Object.keys(this.state).filter((key) => {
      return this.state[key] === true
    })

    if(curPage[0] === 'main_menu') return;
    this.setState({
      main_menu: false,
      playlists_menu: false,
      albums_menu: false,
      artists_menu: false,
      songs_menu: false,
      display_songs: false,
      display_artists: false,
      display_albums: false,
      display_playlists: false
    })
    console.log(curPage[0]);
    console.log(action.addSongsMenu());
    const curPageName = curPage[0];
    if(curPageName === 'songs_menu' || curPageName === 'playlists_menu' || 
      curPageName === 'artists_menu' || curPageName == 'albums_menu') {
      this.setState({
        events: action.addMainMenu(),
        main_menu: true
      })
    } else if(curPageName === 'display_songs') {
      this.setState({
        events: action.addSongsMenu(),
        songs_menu: true
      })
    } else if(curPageName === 'display_artists') {
      this.setState({
        events: action.addArtistsMenu(),
        artists_menu: true
      })
    } else if(curPageName === 'display_albums') {
      this.setState({
        events: action.addAlbumsMenu(),
        albums_menu: true
      })
    } else if(curPageName === 'display_playlists') {
      this.setState({
        events: action.addPlaylistsMenu(),
        playlists_menu: true
      })
    }
  }

  // To get the current heading [Songs, Albums, Artists]
  getHeadingName = () => {
    console.log(this.state);
    const curPage = Object.keys(this.state).filter((key) => {
      return this.state[key] === true
    })
    
    if(curPage.length === 0) return
    console.log(curPage[0])

    if(curPage[0] === 'songs_menu') {
      return 'Songs'
    } else if(curPage[0] === 'main_menu') {
      return 'iPod'
    } else if(curPage[0] === 'albums_menu') {
      return 'Albums'
    } else if(curPage[0] === 'playlists_menu') {
      return 'Playlists'
    } else if(curPage[0] === 'artists_menu') {
      return 'Artists'
    } else if(curPage[0] === 'display_songs') {
      return 'Song'
    } else {
      return ''
    }
  }

  // Zingtouch is configured
  componentDidMount() {
    this.region = zingtouch.Region(this.region);
    this.region.bind(this.element, 'rotate', (event) => {
      currentAngle += event.detail.distanceFromLast;
      const angle = Math.round(currentAngle % 360);
      console.log(angle)

      if(Math.abs(lastAngle - angle) >= 15) {
        if(event.detail.distanceFromLast > 0) {
          this.moveToNext();
        } else {
          this.moveToPrev();
        }
        lastAngle = angle;
      }
    })
  }


  render() {

    return (
      <div className="App">
        {/* Main Menu for all the components */}
        { (this.state.main_menu || this.state.songs_menu || this.state.albums_menu || this.state.artists_menu || this.state.playlists_menu) && <Menu list={this.state.events} isActive={this.state.active} heading={this.getHeadingName}/> }
        {/* Menu for the songs component */}
        { this.state.display_songs && <Songs isActive={this.state.active} list={this.state.events}/>}
        {/* Menu for the artists components */}
        { this.state.display_artists && <Artists index={this.state.active} list={this.state.events}/>}
        {/* Menu for albums and playlists section */}
        { (this.state.display_albums || this.state.display_playlists) && <Common />}
        <div className="wheel" ref={(element) => this.region = element}>
          <div className="inner-circle" ref={(element) => this.element = element}>
              <button className="menu-btn" onClick={this.handleMenuEvent}><MenuRoundedIcon /></button>
              <button className="next-btn"><SkipNextIcon /></button>
              <button className="prev-btn"><SkipPreviousIcon /></button>
              <button className="play-btn"><PlayArrowIcon /></button>
              <div className="center-btn" onClick={this.handleClickEvent}>
                <button></button>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
