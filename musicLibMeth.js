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
  }

}


library.printPlaylists();









