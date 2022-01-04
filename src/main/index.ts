import { Initialize } from './Initialize';
import { App } from '../App';

const initialize = Initialize.getInstance();
initialize.setComponent(App).render();
