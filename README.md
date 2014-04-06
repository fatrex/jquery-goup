#### Easy Peasy
Download the minified version of the plugin, include it after jQuery and:
```
<script type="text/javascript">
$(document).ready(function(){

$.goup();

});
</script>
```

### Demo
Yeah! You can see a live demo [here](http://ryuk87.github.io/jquery-goup/): http://ryuk87.github.io/jquery-goup/

### Options
In this first version there are a few options that you can use to make this little thing suits your needs:

* **location** : "right" or "left". On wich side the thing will be shown (_default is "right"_);
* **locationOffset** : integer. How many pixels separates the thing from the edge of the screen (based on the location setted) (_default is 20_)
* **bottomOffset** : integer. How many pixels separates the thing from the bottom edge of the screen (_default is 10_);
* **containerRadius** : integer. Make you transform a square in a circle (yeah, it's magic!) (_default is 10_)
* **containerClass** : string. Don't you like the name i chose? You can change it! (I'm a little sad though...) (_default is "goup-container"_)
* **arrowClass** : string. Read above. (_default is "goup-arrow"_)
* **trigger** : integer. After how many scrolled (down obviously) pixels the thing must be shown. (_default is 500_)
* **animationSpeed** : "slow", "normal", "fast". The speed at which the user will be brought back up (_default is "slow"_)
* **hideUnderWidth** : integer. The threshold of window width under which the thing is permanently hidden (_default is 500_) 

### Changelog
#### v0.1.6 (04-06-2014)
Fixed a bug for Firefox 28 preventing the button to show up.

#### v0.1.5 (04-06-2014)
Added width threshold (_hideUnderWidth_) to hide the button on small screens.

#### v0.1.0 (04-05-2014)
Initial Release

### License and Copyright
jQuery GoUp! is dual licensed under the [GPL](http://www.gnu.org/licenses/gpl.html) and [MIT](http://www.opensource.org/licenses/mit-license.php) licenses.

(c) 2014 Daniele "Ryuk87" Lenares
