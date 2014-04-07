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
Yeah! You can see a live demo here: http://ryuk87.github.io/jquery-goup/

### Options

| Name            	| Description                                                                                    | Type    | Default        |
|-------------------|------------------------------------------------------------------------------------------------|---------|----------------|
| `location`        | On which side the button will be shown ("left" or "right")                                     | String  | right          |
| `locationOffset`  | How many pixel the button is distant from the edge of the screen, based on the location setted | Integer | 20             |
| `bottomOffset`    | How many pixel the button is distant from the bottom edge of the screen                        | Integer | 10             |
| `containerRadius` | Let you transform a square in a circle (yeah, it's magic!)                                     | Integer | 10             |
| `containerClass`  | The class name given to the button container                                                   | String  | goup-container |
| `arrowClass`      | The class name given to the arrow container                                                    | String  | goup-arrow     |
| `trigger`         | After hoiw many scrolled down pixels the button must be shown                                  | Integer | 500            |
| `animationSpeed`  | The speed at which the user will be brought back to the top ("slow", "normal" or "fast")       | String  | slow           |
| `hideUnderWidth`  | The threshold of window width under which the button is permanently hidden                     | Integer | 500            |

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
