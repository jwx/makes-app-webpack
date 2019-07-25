// Promise polyfill for old browsers
import 'promise-polyfill/lib/polyfill';
import { DebugConfiguration } from '@aurelia/debug';
import { BasicConfiguration } from '@aurelia/jit-html-browser';
import { RouterConfiguration } from '@aurelia/router';
import { Aurelia } from '@aurelia/runtime';
import { App } from './app';

global['au'] = new Aurelia()
  .register(BasicConfiguration, DebugConfiguration, RouterConfiguration)
  .app({
    host: document.querySelector('app'),
    component: new App()
  })
  .start();
