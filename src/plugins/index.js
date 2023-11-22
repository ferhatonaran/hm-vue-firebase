/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import router from '../router'
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from '../firebase'

export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(router)
    .use(VueFire, {
      // imported above but could also just be created here
      firebaseApp,
      modules: [
        // we will see other modules later on
        VueFireAuth(),
      ],
    })

}