### Easy Peasy
Download the minified version of the plugin, include it after jQuery and:
```
<script type="text/javascript">
$(document).ready(function(){

$.goup();

});
</script>
```

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

### Future Versions?
You can count on that! I'm just begun...

### License and Copyright
jQuery GoUp! is dual licensed under the [GPL](http://www.gnu.org/licenses/gpl.html) and [MIT](http://www.opensource.org/licenses/mit-license.php) licenses.

(c) 2014 Daniele "Ryuk87" Lenares
