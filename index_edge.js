(function(compId) {
    "use strict";
    var im = 'images/',
        aud = 'media/',
        vid = 'media/',
        js = 'js/',
        fonts = {},
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [],
        scripts = [],
        symbols = {
            "stage": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "both",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [{
                        id: 'Interface-01',
                        type: 'image',
                        rect: ['0px', '0', '1024px', '588px', 'auto', 'auto'],
                        fill: ["rgba(0,0,0,0)", im + "Interface-01.svg", '0px', '0px']
                    }, {
                        id: 'line1-01',
                        display: 'none',
                        type: 'image',
                        rect: ['0px', '0px', '1024px', '588px', 'auto', 'auto'],
                        clip: 'rect(572px 442px 580px 397px)',
                        fill: ["rgba(0,0,0,0)", im + "line1-01.svg", '0px', '0px']
                    }, {
                        id: 'line2-01',
                        display: 'none',
                        type: 'image',
                        rect: ['0px', '0px', '1024px', '588px', 'auto', 'auto'],
                        clip: 'rect(572px 486px 580px 442px)',
                        fill: ["rgba(0,0,0,0)", im + "line2-01.svg", '0px', '0px']
                    }, {
                        id: 'line3-01',
                        type: 'image',
                        rect: ['0px', '0px', '1024px', '588px', 'auto', 'auto'],
                        clip: 'rect(572px 532px 580px 488px)',
                        fill: ["rgba(0,0,0,0)", im + "line3-01.svg", '0px', '0px']
                    }, {
                        id: 'play-01',
                        display: 'block',
                        type: 'image',
                        rect: ['0', '0', '1024px', '588px', 'auto', 'auto'],
                        overflow: 'visible',
                        clip: 'rect(542px 71px 576px 37px)',
                        cursor: 'pointer',
                        fill: ["rgba(0,0,0,0)", im + "play-01.svg", '0px', '0px']
                    }, {
                        id: 'stop-01',
                        type: 'image',
                        rect: ['0px', '0px', '1024px', '588px', 'auto', 'auto'],
                        clip: 'rect(542px 125px 576px 90px)',
                        cursor: 'pointer',
                        fill: ["rgba(0,0,0,0)", im + "stop-01.svg", '0px', '0px']
                    }, {
                        id: 'pause-01',
                        display: 'none',
                        type: 'image',
                        rect: ['0px', '0px', '1024px', '588px', 'auto', 'auto'],
                        clip: 'rect(542px 71px 576px 37px)',
                        cursor: 'pointer',
                        fill: ["rgba(0,0,0,0)", im + "pause-01.svg", '0px', '0px']
                    }, {
                        id: 'audio-01',
                        display: 'none',
                        type: 'image',
                        rect: ['0px', '0px', '1024px', '588px', 'auto', 'auto'],
                        clip: 'rect(542px 178px 576px 143px)',
                        cursor: 'pointer',
                        fill: ["rgba(0,0,0,0)", im + "audio-01.svg", '0px', '0px']
                    }, {
                        id: 'mute-01',
                        type: 'image',
                        rect: ['0px', '0px', '1024px', '588px', 'auto', 'auto'],
                        clip: 'rect(542px 178px 576px 143px)',
                        cursor: 'pointer',
                        fill: ["rgba(0,0,0,0)", im + "mute-01.svg", '0px', '0px']
                    }, {
                        id: 'velocidad-01',
                        type: 'image',
                        rect: ['0px', '0px', '1024px', '588px', 'auto', 'auto'],
                        clip: 'rect(542px 396px 572px 263px)',
                        fill: ["rgba(0,0,0,0)", im + "velocidad-01.svg", '0px', '0px']
                    }, {
                        id: 'veinticinco',
                        type: 'image',
                        rect: ['0px', '0px', '1024px', '588px', 'auto', 'auto'],
                        clip: 'rect(542px 441px 571px 397px)',
                        cursor: 'pointer',
                        fill: ["rgba(0,0,0,0)", im + "25-01.svg", '0px', '0px']
                    }, {
                        id: 'cincuenta',
                        type: 'image',
                        rect: ['0px', '0px', '1024px', '588px', 'auto', 'auto'],
                        clip: 'rect(542px 486px 571px 442px)',
                        cursor: 'pointer',
                        fill: ["rgba(0,0,0,0)", im + "50-01.svg", '0px', '0px']
                    }, {
                        id: 'cien',
                        type: 'image',
                        rect: ['0px', '0px', '1024px', '588px', 'auto', 'auto'],
                        clip: 'rect(542px 532px 571px 487px)',
                        cursor: 'pointer',
                        fill: ["rgba(0,0,0,0)", im + "100-01.svg", '0px', '0px']
                    }, {
                        id: 'glosario-01',
                        type: 'image',
                        rect: ['0px', '0px', '1024px', '588px', 'auto', 'auto'],
                        clip: 'rect(535px 1003px 582px 872px)',
                        cursor: 'pointer',
                        fill: ["rgba(0,0,0,0)", im + "glosario-01.svg", '0px', '0px']
                    }, {
                        id: 'interprete-01',
                        type: 'image',
                        rect: ['0px', '0px', '1024px', '588px', 'auto', 'auto'],
                        clip: 'rect(535px 868px 582px 737px)',
                        cursor: 'pointer',
                        fill: ["rgba(0,0,0,0)", im + "interprete-01.svg", '0px', '0px']
                    }, {
                        id: 'subtitulos-012',
                        type: 'image',
                        rect: ['0px', '0px', '1024px', '588px', 'auto', 'auto'],
                        clip: 'rect(535px 733px 584px 599px)',
                        cursor: 'pointer',
                        fill: ["rgba(0,0,0,0)", im + "subtitulos-012.svg", '0px', '0px']
                    }, {
                        id: 'CC',
                        display: 'none',
                        type: 'video',
                        tag: 'video',
                        rect: ['25px', '484px', '974px', '50px', 'auto', 'auto'],
                        source: [vid + "CC.mp4"],
                        preload: 'auto'
                    }, {
                        id: 'interprete2',
                        display: 'none',
                        type: 'video',
                        tag: 'video',
                        rect: ['822px', '317px', '221px', '165px', 'auto', 'auto'],
                        source: [vid + "interprete.mp4"],
                        preload: 'auto'
                    }, {
                        id: 'Rectangle2',
                        type: 'rect',
                        rect: ['797px', '317px', '36px', '165px', 'auto', 'auto'],
                        fill: ["rgba(221,221,221,1.00)"],
                        stroke: [0, "rgb(0, 0, 0)", "none"]
                    }, {
                        id: 'teoria',
                        type: 'video',
                        tag: 'video',
                        rect: ['96px', '24px', '740px', '440px', 'auto', 'auto'],
                        source: [vid + "teoria.mp4"],
                        preload: 'auto'
                    }, {
                        id: 'Rectangle',
                        type: 'rect',
                        rect: ['1020px', '315px', '4px', '180px', 'auto', 'auto'],
                        fill: ["rgba(68,68,68,1.00)"],
                        stroke: [0, "rgb(0, 0, 0)", "none"]
                    }],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1024px', '588px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        ["eid1", "display", 0, 0, "linear", "${play-01}", 'block', 'block'],
                        ["eid2", "display", 0, 0, "linear", "${pause-01}", 'none', 'none'],
                        ["eid7", "display", 0, 0, "linear", "${interprete2}", 'none', 'none'],
                        ["eid4", "display", 0, 0, "linear", "${line2-01}", 'none', 'none'],
                        ["eid5", "display", 0, 0, "linear", "${line1-01}", 'none', 'none'],
                        ["eid3", "display", 0, 0, "linear", "${audio-01}", 'none', 'none'],
                        ["eid6", "display", 0, 0, "linear", "${CC}", 'none', 'none']
                    ]
                }
            }
        };
    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);
    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-9666302");
