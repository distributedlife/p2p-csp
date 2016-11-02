import define from 'ensemblejs/lib/define';
import { on } from 'ensemblejs/lib';
import { key } from '../constants';

define('StateSeed', () => ({
  [key]: {
    space: 0,
    continuous: 0,
    event: []
  }
}));

const increment = (current) => current + 1;
const upSpaceYourFace = () => [`${key}.space`, increment]
const incrementContinuous = () => [`${key}.continuous`, increment];

define('ActionMap', () => ({ space: [{ call: [upSpaceYourFace], onRelease: true }] }));
on('PhysicsFrame', () => incrementContinuous);