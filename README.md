# Travel Theme for the [Ghost](https://ghost.org) blogging platform

This is a responsive and minimalistic theme for ghost that was built to chronicle my wife and I's trip around SE Asia. You can view what it looks like [here](http://travel.fdysart.com).

This theme comes packaged with bootstrap 3.2.0 and font-awesome 4.2.0 already. It uses the less versions of each. The theme specific less files are in the root of assets/less with the main entry point being site.less.

### Install

This assumes that you already have ghost installed. See [this link](https://ghost.org/download) to obtain ghost.

```
cd /path/to/ghost/content/themes
git clone https://github.com/ftdysa/ghost-travel-theme.git
cd ghost-travel-theme/
npm install
gulp build
```  

Once gulp has finished, navigate to localhost:2368/ghost (or whatever domain you have ghost set up on), click Settings, and choose ghost-travel-theme 0.1.0 as the theme.

#### Cron for tags

There is a script located in the cron directory that builds a text file of all tags in the Ghost sqlite database. I wrote this because there was currently no way to list **all** the tags in the system, only those for a specific post, or those for the currently paginated posts. This will grab every single tag that exists.

Here is how I run it. There is some jquery code in partials/footer-js.hbs that grabs the json file and creates the list in the sidebar.

Eventually I'd like to turn this into a "tag cloud builder" type system.

```
/path/to/node /path/to/theme/cron/make-tags.js > /path/to/theme/data/tag_data
```

The name of the file has to be pretty specific because I believe ghost does some weird stuff with its routing that will try and intercept the request and emit a 404. For example, data/tags.json or data/tag do not work as file names. 

### Development

The following command will watch the less and js directories for changes and automatically re-build all the assets.

```
gulp dev
```

