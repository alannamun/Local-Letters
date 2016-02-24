/* Customize icons for mapbox */

var map = L.mapbox.map("map", "alannamunro.igi91aln")
                .setView([49.2617, -123.1438], 15);

var myLayer = L.mapbox.featureLayer().addTo(map);

var geoJson = [

{
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [-123.1410, 49.2579]
    },
    "properties": {
        "title": "Mount Royal",
        "description": "These letters and numerals demand attention with their dramatic details and quirky proportions. Born out of the theatre districts... <a href='http://www.locallettering.com/mount-royal/'>more</a>",
        "icon": {
            "iconUrl": "https://dl.dropboxusercontent.com/u/3107278/map-icons/icons/mount-royal-icon.svg",
            "iconSize": [50, 50], // size of the icon
            "iconAnchor": [25, 25], // point of the icon which will correspond to marker's location
            "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
            "className": "dot"
        }
    }
},

{
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [-123.1401, 49.2597]
    },
    "properties": {
        "title": "The Sussex",
        "description": "Blackletters are one of the more popular options for the front of South Granville buildings. This version has a very high stroke contrast... <a href='http://www.locallettering.com/the-sussex/'>more</a>",
        "icon": {
            "iconUrl": "https://dl.dropboxusercontent.com/u/3107278/map-icons/icons/the-sussex-icon.svg",
            "iconSize": [50, 50], // size of the icon
            "iconAnchor": [25, 25], // point of the icon which will correspond to marker's location
            "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
            "className": "dot"
        }
    }
},

{
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [-123.1399, 49.2582]
    },
    "properties": {
        "title": "Margaret Rose",
        "description": "Letterforms are often modeled after the shapes made by constructing letters with certain tools. In the case of the Margaret Rose... <a href='http://www.locallettering.com/margaret-rose/'>more</a>",
        "icon": {
            "iconUrl": "https://dl.dropboxusercontent.com/u/3107278/map-icons/icons/margaret-rose-icon.svg",
            "iconSize": [50, 50], // size of the icon
            "iconAnchor": [25, 25], // point of the icon which will correspond to marker's location
            "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
            "className": "dot"
        }
    }
},

{
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [-123.1407, 49.2597]
    },
    "properties": {
        "title": "The Rembrandt",
        "description": "This building, named after the 17th century painter, appropriately uses letterforms modeled after typography from... <a href='http://www.locallettering.com/the-rembrandt/'>more</a>",
        "icon": {
            "iconUrl": "https://dl.dropboxusercontent.com/u/3107278/map-icons/icons/the-rembrandt-icon.svg",
            "iconSize": [50, 50], // size of the icon
            "iconAnchor": [25, 25], // point of the icon which will correspond to marker's location
            "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
            "className": "dot"
        }
    }
},

{
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [-123.1377, 49.2588]
    },
    "properties": {
        "title": "Marion's Manor",
        "description": "Marion's Manor starts out with a wonderfully steep angle, and slowly becomes more upright by the end of the second word. This is a beautiful... <a href='http://www.locallettering.com/marions-manor/'>more</a>",
        "icon": {
            "iconUrl": "https://dl.dropboxusercontent.com/u/3107278/map-icons/icons/marions-manor-icon.svg",
            "iconSize": [50, 50], // size of the icon
            "iconAnchor": [25, 25], // point of the icon which will correspond to marker's location
            "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
            "className": "dot"
        }
    }
},

{
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [-123.1347, 49.2587]
    },
    "properties": {
        "title": "Gauntlett Manor",
        "description": "Gauntlett manor is a combination of a script and a serif. The script is a fairly simple one except for the flourishes on the first letter... <a href='http://www.locallettering.com/gauntlett-manor/'>more</a>",
        "icon": {
            "iconUrl": "https://dl.dropboxusercontent.com/u/3107278/map-icons/icons/gauntlett-manor-icon.svg",
            "iconSize": [50, 50], // size of the icon
            "iconAnchor": [25, 25], // point of the icon which will correspond to marker's location
            "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
            "className": "dot"
        }
    }
},

{
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [-123.1428, 49.2617]
    },
    "properties": {
        "title": "The Aberdare",
        "description": "The Aberdare is a flowing script with well matched numbers and a small bit of sans serif. The split shading is a huge feature... <a href='http://www.locallettering.com/the-aberdare/'>more</a>",
        "icon": {
            "iconUrl": "https://dl.dropboxusercontent.com/u/3107278/map-icons/icons/the-aberdare-icon.svg",
            "iconSize": [50, 50], // size of the icon
            "iconAnchor": [25, 25], // point of the icon which will correspond to marker's location
            "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
            "className": "dot"
        }
    }
},

{
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [-123.1366, 49.2587]
    },
    "properties": {
        "title": "The Regency",
        "description": "The Regency is a tall blue-tiled building with a large entrance way. The entrance seems to be saying this is a very elegant place ... <a href='http://www.locallettering.com/the-regency/'>more</a>",
        "icon": {
            "iconUrl": "https://dl.dropboxusercontent.com/u/3107278/map-icons/icons/the-regency-icon.svg",
            "iconSize": [50, 50], // size of the icon
            "iconAnchor": [25, 25], // point of the icon which will correspond to marker's location
            "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
            "className": "dot"
        }
    }
},

{
   "type": "Feature",
   "geometry": {
       "type": "Point",
       "coordinates": [-123.1414, 49.2620]
   },
   "properties": {
       "title": "The Unique",
       "description": "While not incredibly unique, this one certainly does have its quirks. The 'n' is the first letter that stands out as being ... <a href='http://www.locallettering.com/the-unique/'>more</a>",
       "icon": {
           "iconUrl": "https://dl.dropboxusercontent.com/u/3107278/map-icons/icons/the-unique-icon.svg",
           "iconSize": [50, 50], // size of the icon
           "iconAnchor": [25, 25], // point of the icon which will correspond to marker's location
           "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
           "className": "dot"
       }
   }
},

{
   "type": "Feature",
   "geometry": {
       "type": "Point",
       "coordinates": [-123.1342, 49.2590]
   },
   "properties": {
       "title": "Wynne Manor",
       "description": "I was particularly attracted to Wynne Manor because of its upright emphasis and nearly straight decender in the lowercase 'y' ... <a href='http://www.locallettering.com/wynne-manor/'>more</a>",
       "icon": {
           "iconUrl": "https://dl.dropboxusercontent.com/u/3107278/map-icons/icons/wynne-manor-icon.svg",
           "iconSize": [50, 50], // size of the icon
           "iconAnchor": [25, 25], // point of the icon which will correspond to marker's location
           "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
           "className": "dot"
       }
   }
},

{
   "type": "Feature",
   "geometry": {
       "type": "Point",
       "coordinates": [-123.1327, 49.2589]
   },
   "properties": {
       "title": "Queen Anne Place",
       "description": "This dull concrete building is endowed with some of the most beautifully done lettering in the neighbourhood. The craft of the painting ... <a href='http://www.locallettering.com/queen-anne-place/'>more</a>",
       "icon": {
           "iconUrl": "https://dl.dropboxusercontent.com/u/3107278/map-icons/icons/queen-anne-icon.svg",
           "iconSize": [50, 50], // size of the icon
           "iconAnchor": [25, 25], // point of the icon which will correspond to marker's location
           "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
           "className": "dot"
       }
   }
},

{
   "type": "Feature",
   "geometry": {
       "type": "Point",
       "coordinates": [-123.1356, 49.2581]
   },
   "properties": {
       "title": "Braemar",
       "description": "The Braemar immediatly conjures visions of football players and cheerleaders wearing college sports team sweaters. The straight, slabby serif ... <a href='http://www.locallettering.com/braemar/'>more</a>",
       "icon": {
           "iconUrl": "https://dl.dropboxusercontent.com/u/3107278/map-icons/icons/braemar-icon.svg",
           "iconSize": [50, 50], // size of the icon
           "iconAnchor": [25, 25], // point of the icon which will correspond to marker's location
           "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
           "className": "dot"
       }
   }
},

{
   "type": "Feature",
   "geometry": {
       "type": "Point",
       "coordinates": [-123.1424, 49.2619]
   },
   "properties": {
       "title": "Cecilia Court",
       "description": "I think that this piece is newer than most in the neighbourhood. I have a theory that there used to be something old and faded ... <a href='http://www.locallettering.com/cecilia-court/'>more</a>",
       "icon": {
           "iconUrl": "https://dl.dropboxusercontent.com/u/3107278/map-icons/icons/cecilia-court-icon.svg",
           "iconSize": [50, 50], // size of the icon
           "iconAnchor": [25, 25], // point of the icon which will correspond to marker's location
           "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
           "className": "dot"
       }
   }
},

{
   "type": "Feature",
   "geometry": {
       "type": "Point",
       "coordinates": [-123.1274, 49.2615] 
   },
   "properties": {
       "title": "Sutherland Place",
       "description": "Sutherland Place is right on the edge of what I still consider South Granville. This particular 3 or 4 block radius has a very eclectic ... <a href='http://www.locallettering.com/sutherland-place/'>more</a>",
       "icon": {
           "iconUrl": "https://dl.dropboxusercontent.com/u/3107278/map-icons/icons/sutherland-place-icon.svg",
           "iconSize": [50, 50], // size of the icon
           "iconAnchor": [25, 25], // point of the icon which will correspond to marker's location
           "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
           "className": "dot"
       }
   }
},

{
   "type": "Feature",
   "geometry": {
       "type": "Point",
       "coordinates": [-123.1149, 49.2588]
   },
   "properties": {
       "title": "The Cumberland",
       "description": "There are not many hand-painted serifs around town, but the cumberland is one of the more funky ones. The first letter seems to have a bit of and identity crisis ... <a href='http://www.locallettering.com/the-cumberland/'>more</a>",
       "icon": {
           "iconUrl": "https://dl.dropboxusercontent.com/u/3107278/map-icons/icons/the-cumberland-icon.svg",
           "iconSize": [50, 50], // size of the icon
           "iconAnchor": [25, 25], // point of the icon which will correspond to marker's location
           "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
           "className": "dot"
       }
   }
},

{
   "type": "Feature",
   "geometry": {
       "type": "Point",
       "coordinates": [-123.1553, 49.2697]
   },
   "properties": {
       "title": "Ocean Crest Manor",
       "description": "Ocean Crest Manor is a wonderful example of a casual script, which really suits the beach-y feel of the neighbourhood. ... <a href='http://www.locallettering.com/ocean-crest-manor/'>more</a>",
       "icon": {
           "iconUrl": "https://dl.dropboxusercontent.com/u/3107278/map-icons/icons/ocean-crest-icon.svg",
           "iconSize": [50, 50], // size of the icon
           "iconAnchor": [25, 25], // point of the icon which will correspond to marker's location
           "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
           "className": "dot"
       }
   }
},

{
   "type": "Feature",
   "geometry": {
       "type": "Point",
       "coordinates": [-123.1399, 49.2616]
   },
   "properties": {
       "title": "Westwind",
       "description": "The Westwind is a flowing script with an appropriate wave in the bar of the 't' that adds to its appearance ... <a href='http://www.locallettering.com/westwind/'>more</a>",
       "icon": {
           "iconUrl": "https://dl.dropboxusercontent.com/u/3107278/map-icons/icons/westwind-icon.svg",
           "iconSize": [50, 50], // size of the icon
           "iconAnchor": [25, 25], // point of the icon which will correspond to marker's location
           "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
           "className": "dot"
       }
   }
},

{
   "type": "Feature",
   "geometry": {
       "type": "Point",
       "coordinates": [-123.1326, 49.2617]
   },
   "properties": {
       "title": "The Wendalin",
       "description": "The Wendalin is in South Granville, but the style of the lettering seems to fit a more beach-like atmosphere. The wavey line brings up imagery of the sea ... <a href='http://www.locallettering.com/the-wendalin/'>more</a>",
       "icon": {
           "iconUrl": "https://dl.dropboxusercontent.com/u/3107278/map-icons/icons/the-wendalin-icon.svg",
           "iconSize": [50, 50], // size of the icon
           "iconAnchor": [25, 25], // point of the icon which will correspond to marker's location
           "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
           "className": "dot"
       }
   }
},

{
   "type": "Feature",
   "geometry": {
       "type": "Point",
       "coordinates": [-123.1404, 49.2618]
   },
   "properties": {
       "title": "Royal Anna Court",
       "description": "This is one of my favourite examples of apartment lettering. The sharp edges and angled curves of the script make it look like it was written quickly with a marker ... <a href='http://www.locallettering.com/royal-anna/'>more</a>",
       "icon": {
           "iconUrl": "https://dl.dropboxusercontent.com/u/3107278/map-icons/icons/royal-anna-icon.svg",
           "iconSize": [50, 50], // size of the icon
           "iconAnchor": [25, 25], // point of the icon which will correspond to marker's location
           "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
           "className": "dot"
       }
   }
},

{
   "type": "Feature",
   "geometry": {
       "type": "Point",
       "coordinates": [-123.1544, 49.2698]
   },
   "properties": {
       "title": "Ocean Villa",
       "description": "Ocean Villa screams late 60's/early 70's to me. Its psychedelic, bell-bottom like flowing forms speak of lazy days of love on the beach ... <a href='http://www.locallettering.com/ocean-villa/'>more</a>",
       "icon": {
           "iconUrl": "https://dl.dropboxusercontent.com/u/3107278/map-icons/icons/ocean-villa-icon.svg",
           "iconSize": [50, 50], // size of the icon
           "iconAnchor": [25, 25], // point of the icon which will correspond to marker's location
           "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
           "className": "dot"
       }
   }
},

{
   "type": "Feature",
   "geometry": {
       "type": "Point",
       "coordinates": [-123.1547, 49.2698]
   },
   "properties": {
       "title": "View Arms",
       "description": "The original on the window was a bit damaged, so I had to really do a double take at the name of this building ... <a href='http://www.locallettering.com/view-arms/'>more</a>",
       "icon": {
           "iconUrl": "https://dl.dropboxusercontent.com/u/3107278/map-icons/icons/view-arms-icon.svg",
           "iconSize": [50, 50], // size of the icon
           "iconAnchor": [25, 25], // point of the icon which will correspond to marker's location
           "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
           "className": "dot"
       }
   }
},

{
   "type": "Feature",
   "geometry": {
       "type": "Point",
       "coordinates": [-123.1529, 49.2698]
   },
   "properties": {
       "title": "The Flamingo",
       "description": "The flamingo is a wonderfully flambouyent piece of lettering and window artwork - the orginal even has illustrations ... <a href='http://www.locallettering.com/the-flamingo/'>more</a>",
       "icon": {
           "iconUrl": "https://dl.dropboxusercontent.com/u/3107278/map-icons/icons/the-flamingo-icon.svg",
           "iconSize": [50, 50], // size of the icon
           "iconAnchor": [25, 25], // point of the icon which will correspond to marker's location
           "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
           "className": "dot"
       }
   }
},

];

// Set a custom icon on each marker based on feature properties.
myLayer.on('layeradd', function(e) {
    var marker = e.layer,
        feature = marker.feature;

    marker.setIcon(L.icon(feature.properties.icon));
});


// Add features to the map.
myLayer.setGeoJSON(geoJson);