angular.module('introGame.albumController',['ui.router', 'introGame.playLogService'])
.controller('AlbumController', ['SongsService',
    'AlbumFetcherService',
    'GameLogicService',
    'PlayLogService',
    '$state',
    function(SongsService, AlbumFetcherService, GameLogicService, PlayLogService, $state) {

      var self = this;





      self.loadAlbums = function(search) {
        return AlbumFetcherService.getAlbums(search)
          .then(function(results){
            self.albums = results;
          });
      };

      self.loadSongToGuess = function(album) {
        return SongsService.getAlbum(album)
          .then(function() {
            GameLogicService.newGame();
            PlayLogService.newGame();
            self._changeToSongState();
          });
      };

      self._changeToSongState = function(){
        $state.go('song', {});
      };

      self.albums = [
      {artist: "Adele",
        title: "21",
        albumID: "7n3QJc7TBOxXtlYh4Ssll8",
        imgUrl: "http://i.scdn.co/image/d8be232ecd4350b7a1d5bc89db6c08e86064804d"},

      {artist: "Michael Jackson",
        title: "Thriller",
        albumID: "2ANVost0y2y52ema1E9xAZ",
        imgUrl: "http://i.scdn.co/image/dc35bf21345ca407c822150d069d3dff21d6b5b3"},

      {artist: "Bruce Springsteen",
        title: "Born in the U.S.A",
        albumID: "0PMasrHdpaoIRuHuhHp72O",
        imgUrl: "http://i.scdn.co/image/ff30aee935ac235dcdf53e2b4cef4532de7d33cf"},

      {artist: "Alanis Morissette",
        title: "Jagged Little Pill",
        albumID: "09AwlP99cHfKVNKv4FC8VW",
        imgUrl: "http://i.scdn.co/image/b45f1b84098251d48f8e257312818ae31784be73"},

      {artist: "Lady Gaga",
        title: "The Fame Monster (Deluxe)",
        albumID: "4yHr095BMG5I3IRH4ToE5l",
        imgUrl: "http://i.scdn.co/image/8a01942de7c8bd69239395af72a1807216b03585"},

      {artist: "Fleetwood Mac",
        title: "Rumours",
        albumID: "63k57x0qOkUWEMR0dkMivh",
        imgUrl: "http://i.scdn.co/image/12fe04b0eb5ba5ecbfa9f508da60c2669719102e"},

      {artist: "Linkin Park",
        title: "Hybrid Theory",
        albumID: "6hPkbAV3ZXpGZBGUvL6jVM",
        imgUrl: "http://i.scdn.co/image/bec4a40aa4ac10b3e5518cf1dcbca33d1e5121ec"},


      {artist: "Bon Jovi",
        title: "Slippery When Wet",
        albumID: "3gORsZp3xSbkN1ymRNonp1",
        imgUrl: "http://i.scdn.co/image/411a0625a53f1d4d187d6922c432937572fcac89"},

      {artist: "Pearl Jam",
        title: "10",
        albumID: "31G5IKmrHwpPWGJYk3X2kI",
        imgUrl: "http://i.scdn.co/image/06ebbdaaefe1db754eb6144e245800b781ba7510"},

      {artist: "Radiohead",
        title: "Kid A",
        albumID: "6J6nlVu4JMveJz0YM9zDgL",
        imgUrl: "http:////i.scdn.co/image/26107c34e7f13c0181618d0be36ef6271c70aa27"},

      {artist: "The Strokes",
        title: "Is This It",
        albumID: "2yNaksHgeMQM9Quse463b5",
        imgUrl: "http://i.scdn.co/image/b6f7557412f63e1fd35e6fe4dfafc421c7f80571"},

      //{artist: "The White Stripes",
        //title: "Elephant",
        //albumID: "0rRNLpdA8nA8Sm8Fk490b9",
        //imgUrl: "http://i.scdn.co/image/4d761858e1541ef386a0b8a9f1047805db754a6d"},

      {artist: "Eminem",
        title: "The Marshall Mathers LP",
        albumID: "04Xgxe2lRRSK9MN3xDt16s",
        imgUrl: "http://i.scdn.co/image/ff097f84355c55f3d9e411eece8febf88e56ee09"},


      {artist: "LCD Soundsystem",
        title: "Sound of Silver",
        albumID: "1R8kkopLT4IAxzMMkjic6X",
        imgUrl: "http://i.scdn.co/image/4264f624bb4de8787f0aa6e1679221109287712c"},



      {artist: "Amy Winehouse",
        title: "Back To Black",
        albumID: "097eYvf9NKjFnv4xA9s2oV",
        imgUrl: "http://i.scdn.co/image/096694f2d1a7762cc180d39062576d56e50f925a"},

      {artist: "Mumford & Sons",
        title: "Sigh No More",
        albumID: "1c2Ee269Rj9w8wn8s3qQu9",
        imgUrl: "http://i.scdn.co/image/e9ad7103c00072d70dd33ddddde9a4ac4d0354ab"},


      {artist: "Daft Punk",
        title: "Discovery",
        albumID: "2noRn2Aes5aoNVsU6iWThc",
        imgUrl: "http://i.scdn.co/image/f04bb6fba32e89475d9981007aff21e13745dec2"},


      {artist: "Jay-Z and Kanye West",
        title: "Watch The Throne",
        albumID: "7mCeLbChyegbRwwKK5shJs",
        imgUrl: "http://i.scdn.co/image/b0443fdcf536d6d8c462ee86b2353df741352003"},


      {artist: "Nirvana",
        title: "Unplugged In New York",
        albumID: "1To7kv722A8SpZF789MZy7",
        imgUrl: "http://i.scdn.co/image/8c2b3ef24a01cb1d11c520ec5f602ccd9360925e"},


      {artist: "Lou Reed",
        title: "Transformer",
        albumID: "3JKDzf9F11y9kjWnehKna1",
        imgUrl: "http://i.scdn.co/image/19e4828ddb234b8061dc0e0c689358224302de27"},
      {artist: "Weezer",
        title: "Weezer",
        albumID: "5n15QbYKbO4pzAV2Iy1VVG",
        imgUrl: "https://i.scdn.co/image/0959a0187154515697eb3938a981c2c44ec160ce"},
      {artist: "Father John Misty",
        title: "I Love You, Honeybear",
        albumID: "7buEcyw6fJF3WPgr06BomH",
        imgUrl: "https://i.scdn.co/image/09ac3be0f7cd80783c79e1a1b85416a409e4a6ff"},
      {artist: "The Beatles",
        title: "1",
        albumID: "5ju5Ouzan3QwXqQt1Tihbh",
        imgUrl: "https://i.scdn.co/image/4e6916b16ce51c241c16f4d642360443aeb7b4df"},
      {artist: "Radiohead",
        title: "OK Computer",
        albumID: "7dxKtc08dYeRVHt3p9CZJn",
        imgUrl: "https://i.scdn.co/image/f89c1ecdd0cc5a23d5ad7303d4ae231d197dde98"},
      {artist: "Queen",
        title: "Greatest Hits",
        albumID: "3VWrUk4vBznMYXGMPc7dRB",
        imgUrl: "https://i.scdn.co/image/8995c45551984864859c3b7c127e3e234e3307f4"},
      {artist: "Arcade Fire",
        title: "Funeral",
        albumID: "0530hyl3GtZKWPebWVMZkK",
        imgUrl: "https://i.scdn.co/image/0545b22a34a2399ccf000951ce7b4425c720a836"}
      ];
    }]);
