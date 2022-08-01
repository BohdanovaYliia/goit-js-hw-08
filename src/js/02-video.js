import VimeoPlayer from "@vimeo/player";
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new VimeoPlayer(iframe);
    
player.on('timeupdate', throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000));

const savedCurrentTime = localStorage.getItem('videoplayer-current-time');
 
if (savedCurrentTime) {
    player.setCurrentTime(savedCurrentTime);
};

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});
