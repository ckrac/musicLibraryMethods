var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },

  printPlaylists: function () {

    // console.log(library.playlists);
    // console.log(library[playlist]);
    for (var p in this.playlists) {
      var plists = this.playlists[p];
      var  plistId = this.playlists[p].id;
      // console.log(plistId);
      var plistName = this.playlists[p].name;
      // console.log(plistName);
      var plistTrack = this.playlists[p].tracks;
      var plistTracks = this.playlists[p].tracks.length;
      // console.log(plistTracks);
      console.log(plistId + ": " + plistName + " - " + plistTracks + " tracks");
      }
  },

  printTracks: function () {

    for (var t in this.tracks) {
      var tId = this.tracks[t].id;
      // console.log(tId);
      var tName = this.tracks[t].name;
      // console.log(tName);
      var tArtist = this.tracks[t].artist;
      // console.log(tArtist);
      var tAlbum = this.tracks[t].album;
      // console.log(tAlbum);
      console.log(tId + ": " + tName + " by " + tArtist + " (" + tAlbum + ")" );
    }
  },

  printPlaylist: function (playlistId) {

    for (var p in this.playlists)  {
      var plists = this.playlists[p];
      var plistId = this.playlists[p].id;
      // console.log(plistId);
      var plistName = this.playlists[p].name;
      // console.log(plistName);
      var plistTrack = this.playlists[p].tracks;
      var plistTracks = this.playlists[p].tracks.length;
      // console.log(plistTracks);
      if(playlistId === plistId) {
        console.log(plistId + ": " + plistName + " - " + plistTracks + " tracks");
      }

      if (playlistId === plistId) {
        // console.log(plistId + "true");
        // console.log(plistTrack);
        for (var i = 0; i < plistTracks; i++) {
          // console.log(plistTrack[i]);
          for (var t in this.tracks) {
            var tId = this.tracks[t].id;
            // console.log(tId);
            var tName = this.tracks[t].name;
            // console.log(tName);
            var tArtist = this.tracks[t].artist;
            // console.log(tArtist);
            var tAlbum = this.tracks[t].album;
            // console.log(tAlbum);
            if (tId === plistTrack[i]) {
              console.log(tId + ": " + tName + " by " + tArtist + " (" + tAlbum + ")" );
            }
          }

        }
      }
    }
  },

  addTrackToPlaylist: function (trackId, playlistId) {

    for (var p in this.playlists) {
      var plists = this.playlists[p];
      var  plistId = this.playlists[p].id;
      // console.log(plistId);
      var plistTrack = this.playlists[p].tracks;
      // console.log(plistTrack);
        if (playlistId === plistId) {
          plistTrack.push(trackId)
          // console.log(plistTrack);
        }
    }
  },

  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  addTrack: function (name, artist, album) {

    var newTrack = this.uid();
    // console.log(newTrack);
    var trackToAdd = {
      id: newTrack,
      name: name,
      artist: artist ,
      album: album
    }
    this.tracks[newTrack] = trackToAdd;
    // console.log(library);

  },

  addPlaylist: function (name) {

    var newPlayList = this.uid();
    // console.log(newPlayList);
    var playListAdd = {
      id: newPlayList,
      name: name,
      tracks: []
    }
    // console.log(playListAdd);
    this.playlists[newPlayList] = playListAdd;
    // console.log(library);
  }


}


// library.printPlaylists();
// library.printTracks();
// library.printPlaylist("p01");
// library.addTrackToPlaylist("t02", "p02");
// console.log(library.playlists);
// console.log(library.uid());
// library.addTrack("burn", "usher", "anAlbum" );
library.addPlaylist("old playlist");
console.log(library);













