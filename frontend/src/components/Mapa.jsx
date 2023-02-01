import React from 'react';
import {render} from 'react-dom';

import DeckGL from '@deck.gl/react';
import {MapView} from '@deck.gl/core';
import {TileLayer} from '@deck.gl/geo-layers';
import {BitmapLayer, PathLayer} from '@deck.gl/layers';

const INITIAL_VIEW_STATE = {
	latitude: 47.65,
	longitude: 7,
	zoom: 4.5,
	maxZoom: 20,
	maxPitch: 89,
	bearing: 0
  };
  
  const COPYRIGHT_LICENSE_STYLE = {
	position: 'absolute',
	right: 0,
	bottom: 0,
	backgroundColor: 'hsla(0,0%,100%,.5)',
	padding: '0 5px',
	font: '12px/20px Helvetica Neue,Arial,Helvetica,sans-serif'
  };
  
  const LINK_STYLE = {
	textDecoration: 'none',
	color: 'rgba(0,0,0,.75)',
	cursor: 'grab'
  };

/* global window */
const devicePixelRatio = (typeof window !== 'undefined' && window.devicePixelRatio) || 1;

function getTooltip({tile}) {
  if (tile) {
    const {x, y, z} = tile.index;
    return `tile: x: ${x}, y: ${y}, z: ${z}`;
  }
  return null;
}

const Mapa = () => {
return (
	<section>
	<div>
	<h1>Mapa.</h1>
	</div>
	</section>
);

};

export default Mapa;
