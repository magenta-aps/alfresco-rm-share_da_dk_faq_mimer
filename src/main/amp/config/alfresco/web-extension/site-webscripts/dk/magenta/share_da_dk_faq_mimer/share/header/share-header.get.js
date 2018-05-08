// logger.log("### Inside share-header.get.js ###");

var userMenuHelp = widgetUtils.findObject(model.jsonModel, "id", "HEADER_USER_MENU_HELP");

if (userMenuHelp == null) {
} else {
	userMenuHelp.config.targetUrl = "https://mimer.rm.dk/share/page/site/mimer-faq/dashboard";
}