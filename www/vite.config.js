import copy from 'rollup-plugin-copy2'
import zip from 'rollup-plugin-zip'

import glob from "glob";

let public_assets = glob.sync("public/**/*", {nodir:true} );

// read the public access and copy into the bundle so they get zipped
// ['public/logo.svg', 'logo.svg']

public_assets = public_assets.map(function(match) {
  return [ match, match.replace("public/", "") ];
})

export default {
  plugins: [{
      ...copy({
        assets: 
         public_assets
      }),
      enforce: 'pre',
      apply: 'build'
    },
    {
      ...zip({
        file: '../../www.zip'
      }),
      enforce: 'post',
      apply: 'build'
    }
  ]
}