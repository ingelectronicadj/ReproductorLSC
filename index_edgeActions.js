(function($, Edge, compId) {
    var Composition = Edge.Composition,
        Symbol = Edge.Symbol;
    (function(symbolName) {
        Symbol.bindElementAction(compId, symbolName, "${pause-01}", "click", function(sym, e) {
            if (sym.$("pause-01").is(":visible")) {
                sym.$("pause-01").hide();
            } else {
                sym.$("pause-01").show();
            }
            if (sym.$("play-01").is(":visible")) {
                sym.$("play-01").hide();
            } else {
                sym.$("play-01").show();
            }
            sym.$("interprete2")[0].pause();
            sym.$("teoria")[0].pause();
            sym.$("CC")[0].pause();
        });
        Symbol.bindElementAction(compId, symbolName, "${play-01}", "click", function(sym, e) {
            if (sym.$("play-01").is(":visible")) {
                sym.$("play-01").hide();
            } else {
                sym.$("play-01").show();
            }
            if (sym.$("pause-01").is(":visible")) {
                sym.$("pause-01").hide();
            } else {
                sym.$("pause-01").show();
            }
            sym.$("interprete2")[0].play();
            sym.$("teoria")[0].play();
            sym.$("CC")[0].play();
        });
        Symbol.bindElementAction(compId, symbolName, "${mute-01}", "click", function(sym, e) {
            sym.$("teoria")[0].muted = !sym.$("teoria")[0].muted;
            if (sym.$("audio-01").is(":visible")) {
                sym.$("audio-01").hide();
            } else {
                sym.$("audio-01").show();
            }
            if (sym.$("mute-01").is(":visible")) {
                sym.$("mute-01").hide();
            } else {
                sym.$("mute-01").show();
            }
        });
        Symbol.bindElementAction(compId, symbolName, "${audio-01}", "click", function(sym, e) {
            sym.$("teoria")[0].muted = !sym.$("teoria")[0].muted;
            if (sym.$("audio-01").is(":visible")) {
                sym.$("audio-01").hide();
            } else {
                sym.$("audio-01").show();
            }
            if (sym.$("mute-01").is(":visible")) {
                sym.$("mute-01").hide();
            } else {
                sym.$("mute-01").show();
            }
        });
        Symbol.bindElementAction(compId, symbolName, "${cien}", "click", function(sym, e) {
            sym.$("line3-01").show();
            sym.$("line1-01").hide();
            sym.$("line2-01").hide();
            sym.$("interprete2")[0].playbackRate = 1;
            sym.$("teoria")[0].playbackRate = 1;
            sym.$("CC")[0].playbackRate = 1;
        });
        Symbol.bindElementAction(compId, symbolName, "${cincuenta}", "click", function(sym, e) {
            sym.$("line3-01").hide();
            sym.$("line1-01").hide();
            sym.$("line2-01").show();
            sym.$("interprete2")[0].playbackRate = 0.5;
            sym.$("teoria")[0].playbackRate = 0.5;
            sym.$("CC")[0].playbackRate = 0.5;
        });
        Symbol.bindElementAction(compId, symbolName, "${veinticinco}", "click", function(sym, e) {
            sym.$("line3-01").hide();
            sym.$("line1-01").show();
            sym.$("line2-01").hide();
            sym.$("interprete2")[0].playbackRate = 0.25;
            sym.$("teoria")[0].playbackRate = 0.25;
            sym.$("CC")[0].playbackRate = 0.25;
        });
        Symbol.bindElementAction(compId, symbolName, "${glosario-01}", "click", function(sym, e) {
            window.open("glosario/index.html", "_blank");
        });
        Symbol.bindElementAction(compId, symbolName, "${subtitulos-012}", "click", function(sym, e) {
            if (sym.$("CC").is(":visible")) {
                sym.$("CC").hide();
            } else {
                sym.$("CC").show();
            }
        });
        Symbol.bindElementAction(compId, symbolName, "${interprete-01}", "click", function(sym, e) {
            if (sym.$("interprete2").is(":visible")) {
                sym.$("interprete2").hide();
            } else {
                sym.$("interprete2").show();
            }
        });
        Symbol.bindElementAction(compId, symbolName, "${stop-01}", "click", function(sym, e) {
            sym.$("interprete2")[0].currentTime = 1;
            sym.$("teoria")[0].currentTime = 1;
            sym.$("CC")[0].currentTime = 1;
            sym.$("interprete2")[0].pause();
            sym.$("teoria")[0].pause();
            sym.$("CC")[0].pause();
            if (sym.$("pause-01").is(":visible")) {
                sym.$("pause-01").hide();
            } else {
                sym.$("pause-01").show();
            }
            if (sym.$("play-01").is(":visible")) {
                sym.$("play-01").hide();
            } else {
                sym.$("play-01").show();
            }
        });
    })("stage");
    (function(symbolName) {})("Precargador");
})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-9666302");
