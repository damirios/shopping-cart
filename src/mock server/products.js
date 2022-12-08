import ShurshikPink from '../assets/images/ShurshikPink.jpg';
import ShurshikViolet from '../assets/images/ShurshikViolet.jpg';
import AkuliySom from '../assets/images/AkuliySom.jpg';
import LeGushka from '../assets/images/LeGushka.jpg';

import getNextID from '../utilityFunctions/getNextID';

const shurshik1 = {
    id: getNextID(),
    title: 'Shurshik',
    color: 'pink',
    category: 'sewing',
    imageSRC: ShurshikPink,
    price: 5
};

const shurshik2 = {
    id: getNextID(),
    title: 'Shurshik',
    color: 'violet',
    category: 'sewing',
    imageSRC: ShurshikViolet,
    price: 5
};

const akuliySOM = {
    id: getNextID(),
    title: 'Akuliy Som',
    color: 'violet',
    category: 'crochet',
    imageSRC: AkuliySom,
    price: 4
}

const leGushkaMini = {
    id: getNextID(),
    title: 'Froggy',
    color: 'green',
    category: 'crochet',
    imageSRC: LeGushka,
    price: 5
}

export const handcrafts = {
    [shurshik1.id]: shurshik1,
    [shurshik2.id]: shurshik2,
    [akuliySOM.id]: akuliySOM,
    [leGushkaMini.id]: leGushkaMini
};