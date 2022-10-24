var wms_layers = [];


        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'type': 'base',
            'opacity': 0.516000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_GAM_grp3_1 = new ol.format.GeoJSON();
var features_GAM_grp3_1 = format_GAM_grp3_1.readFeatures(json_GAM_grp3_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GAM_grp3_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GAM_grp3_1.addFeatures(features_GAM_grp3_1);
var lyr_GAM_grp3_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GAM_grp3_1, 
                style: style_GAM_grp3_1,
                interactive: true,
                title: '<img src="styles/legend/GAM_grp3_1.png" /> GAM_grp3'
            });
var format_GAM_grp1_2 = new ol.format.GeoJSON();
var features_GAM_grp1_2 = format_GAM_grp1_2.readFeatures(json_GAM_grp1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GAM_grp1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GAM_grp1_2.addFeatures(features_GAM_grp1_2);
var lyr_GAM_grp1_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GAM_grp1_2, 
                style: style_GAM_grp1_2,
                interactive: true,
                title: '<img src="styles/legend/GAM_grp1_2.png" /> GAM_grp1'
            });
var format_GAM_grp2_3 = new ol.format.GeoJSON();
var features_GAM_grp2_3 = format_GAM_grp2_3.readFeatures(json_GAM_grp2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GAM_grp2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GAM_grp2_3.addFeatures(features_GAM_grp2_3);
var lyr_GAM_grp2_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GAM_grp2_3, 
                style: style_GAM_grp2_3,
                interactive: true,
                title: '<img src="styles/legend/GAM_grp2_3.png" /> GAM_grp2'
            });

lyr_OpenTopoMap_0.setVisible(true);lyr_GAM_grp3_1.setVisible(true);lyr_GAM_grp1_2.setVisible(true);lyr_GAM_grp2_3.setVisible(true);
var layersList = [lyr_OpenTopoMap_0,lyr_GAM_grp3_1,lyr_GAM_grp1_2,lyr_GAM_grp2_3];
lyr_GAM_grp3_1.set('fieldAliases', {'id': 'id', 'si_isit': 'si_isit', 'sid_coordx': 'sid_coordx', 'sid_coordy': 'sid_coordy', });
lyr_GAM_grp1_2.set('fieldAliases', {'id': 'id', 'si_isit': 'si_isit', 'sid_coordx': 'sid_coordx', 'sid_coordy': 'sid_coordy', });
lyr_GAM_grp2_3.set('fieldAliases', {'id': 'id', 'si_isit': 'si_isit', 'sid_coordx': 'sid_coordx', 'sid_coordy': 'sid_coordy', });
lyr_GAM_grp3_1.set('fieldImages', {'id': 'TextEdit', 'si_isit': 'TextEdit', 'sid_coordx': 'TextEdit', 'sid_coordy': 'TextEdit', });
lyr_GAM_grp1_2.set('fieldImages', {'id': 'TextEdit', 'si_isit': 'TextEdit', 'sid_coordx': 'TextEdit', 'sid_coordy': 'TextEdit', });
lyr_GAM_grp2_3.set('fieldImages', {'id': 'TextEdit', 'si_isit': 'TextEdit', 'sid_coordx': 'TextEdit', 'sid_coordy': 'TextEdit', });
lyr_GAM_grp3_1.set('fieldLabels', {'id': 'no label', 'si_isit': 'no label', 'sid_coordx': 'no label', 'sid_coordy': 'no label', });
lyr_GAM_grp1_2.set('fieldLabels', {'id': 'no label', 'si_isit': 'no label', 'sid_coordx': 'no label', 'sid_coordy': 'no label', });
lyr_GAM_grp2_3.set('fieldLabels', {'id': 'inline label', 'si_isit': 'no label', 'sid_coordx': 'no label', 'sid_coordy': 'no label', });
lyr_GAM_grp2_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});