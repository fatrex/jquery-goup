# jQuery GoUp!
A simple jQuery plugin that let users go back to the top of a web page.

[![Gratipay User](https://img.shields.io/gratipay/user/dnlnrs.svg?style=flat-square)](https://gratipay.com/~dnlnrs/)

---
#### Easy Peasy
Download the minified version of the plugin, include it after jQuery and:
```
<script>
jQuery(document).ready(function(){
    jQuery.goup();
});
</script>
```

### Demo
Yeah! You can see a live demo here: http://dnlnrs.github.io/jquery-goup/

### Options

| Name            	| Description                                                                                    | Type    | Default        |
|-------------------|------------------------------------------------------------------------------------------------|---------|----------------|
| `location`        | On which side the button will be shown ("left" or "right")                                     | String  | right          |
| `locationOffset`  | How many pixel the button is distant from the edge of the screen, based on the location setted | Integer | 20             |
| `bottomOffset`    | How many pixel the button is distant from the bottom edge of the screen                        | Integer | 10             |
| `containerSize` 	| The width and height of the button (minimum is 20)                                     		 | Integer | 40             |
| `containerRadius` | Let you transform a square in a circle (yeah, it's magic!)                                     | Integer | 10             |
| `containerClass`  | The class name given to the button container                                                   | String  | goup-container |
| `arrowClass`      | The class name given to the arrow container                                                    | String  | goup-arrow     |
| `containerColor`  | The color of the container (in hex format)                                                   	 | String  | #000 			|
| `arrowColor`      | The color of the arrow (in hex format)	                                                     | String  | #fff           |
| `trigger`         | After how many scrolled down pixels the button must be shown (bypassed by `alwaysVisible`)     | Integer | 500            |
| `entryAnimation`  | The animation of the show and hide events of the button ("slide" or "fade")				     | String  | fade           |
| `alwaysVisible`   | Set to true if u want the button to be always visible (bypass `trigger`)                       | Boolean | false          |
| `goupSpeed`		| The speed at which the user will be brought back to the top ("slow", "normal" or "fast")       | String  | slow           |
| `hideUnderWidth`  | The threshold of window width under which the button is permanently hidden                     | Integer | 500            |
| `title`           | A text to show on the button mouse hover                                                       | String  | ''             |
| `titleAsText`     | If true the hover title becomes a true text under the button                                   | Boolean | false          |
| `titleAsTextClass`| The class name given to the title text                                                         | String  | goup-text      |
| `zIndex`          | Set the z-index                                                                                | Integer | 1              |

### Changelog
#### v1.1.3 (08-31-2017)
* Added ESLint check
* Some code refactoring

#### v1.1.2 (08-09-2017)
* Some code refactoring

#### v1.1.1 (08-05-2017)
* Year and url update

#### v1.1.0 (05-08-2016)
* Added `zIndex` parameter
* Some code refactoring

For more changelog info check the `CHANGELOG.md` file.

### License and Copyright
jQuery GoUp! is dual licensed under the [GPL](http://www.gnu.org/licenses/gpl.html) and [MIT](http://www.opensource.org/licenses/mit-license.php) licenses.

(c) 2014-2017 Daniele Lenares
