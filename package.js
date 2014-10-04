Package.describe({
    summary: "Timing package for eval of meteor-enc",
});

Package.onUse(function (api) {
    api.addFiles('timeLog.js', ['client', 'server']);

    // TODO: export just one timing variable
    api.export("logAdd");
    api.export("startTime");
    api.export("endTime");
    api.export("markTime");
    api.export("markGlobTime");
    api.export("timeLog");
    api.export("LATENCY_LOG");
    api.export("TPUT_LOG");
    api.export("TOTAL_MSGS");
});
