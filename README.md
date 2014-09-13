# Travel Theme for the [Ghost](https://ghost.org) blogging platform

Response and minimalistic theme for ghost that was built to chronicle my wife and I's trip around SE Asia.

This theme comes packaged with bootstrap 3.2.0 and font-awesome 4.2.0 already. It uses the less versions of each in the theme specific less files in the root assets/less directory.

### Install

```
cd /path/to/ghost/content/themes
git clone https://github.com/ftdysa/ghost-travel-template.git
npm install
gulp build
```  

Navigate to localhost:2368/ghost and Choose travel 0.1.0 as the theme.

### Development

The following command will watch the less and js directories for changes and automatically re-build all the assets.

```
gulp dev
```

